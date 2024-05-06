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

export type UserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    type?: string[];
    location?: string[];
    skills?: string[];
    field?: string[]
  };
  message?: string;
};

export type Skill = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};
