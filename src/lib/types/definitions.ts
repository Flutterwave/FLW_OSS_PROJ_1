import { SkillsCreateNestedManyWithoutUsersInput } from '@/lib/config/db/prisma';
import { UserType } from '@prisma/client';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  type: UserType,
  location: string,
  skills?: SkillsCreateNestedManyWithoutUsersInput,
  field?: string | null
};
