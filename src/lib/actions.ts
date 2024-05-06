'use server';

import prisma, { PrismaClientKnownRequestError } from '@/lib/config/db/prisma';
import bcrypt from 'bcrypt';
import type { Skill, User, UserState } from '@/lib/types/definitions';
import commaSeparatedListToArray from '@/lib/utils';
import { UserSignUpSchema } from '@/lib/types/schemas';

async function createOrRetrieveSkillIds(skillNames: string[]) {
  const skillIds: Skill[] = [];

  skillNames.forEach(async (skillName) => {
    let skill = await prisma.skills.findUnique({
      where: { name: skillName },
    });

    if (!skill) {
      skill = await prisma.skills.create({
        data: { name: skillName },
      });
    }

    skillIds.push(skill);
  });

  return skillIds;
}

export default async function createUser(
  prevState: UserState,
  formData: FormData,
) {
  const validatedFields = UserSignUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    type: formData.get('type'),
    location: formData.get('location'),
    skills: formData.get('skills'),
    field: formData.get('field'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User',
    };
  }

  const {
    name,
    email,
    password,
    type,
    location,
    skills,
    field,
  } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  let skillNames;
  const userData: Omit<User, 'id'> = {
    name,
    email,
    password: hashedPassword,
    type,
    location,
  };

  if (field) {
    userData.field = field;
  }

  if (skills) {
    skillNames = commaSeparatedListToArray(skills);
    userData.skills = { connect: await createOrRetrieveSkillIds(skillNames) };
  }

  try {
    await prisma.users.create({ data: userData });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // The `.code` property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        return {
          message: 'Error: User Already Exists',
        };
      }
    }

    return {
      message: 'Unknown Error: Failed to Create User',
    };
  }

  return {
    message: '',
  };
}
