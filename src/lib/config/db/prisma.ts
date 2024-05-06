import { $Enums, Prisma, PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export const { PrismaClientKnownRequestError } = Prisma;
export type SkillsCreateNestedManyWithoutUsersInput =
Prisma.skillsCreateNestedManyWithoutUsersInput;
export type UserType = $Enums.UserType;

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
