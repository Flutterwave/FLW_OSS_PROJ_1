'use client';

import { lusitana } from '@/ui/fonts';
import {
  UsersIcon,
  UserIcon,
  AtSymbolIcon,
  KeyIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Button from '@/ui/button';
import { useCallback, useState } from 'react';
import { useFormStatus } from 'react-dom';
import createUser from '@/lib/actions';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { UserState } from '@/lib/types/definitions';
import { UserType } from '@prisma/client';

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

export default function SignUpForm() {
  const [formState, setFormState] = useState<UserState>({ message: '', errors: {} });
  const router = useRouter();
  const searchParams = useSearchParams();
  const callBackUrl = searchParams.get('callbackUrl');
  const [clientView, setClientView] = useState(false);
  const [toggleClicked, setToggleClicked] = useState(false);

  const handleClientToggle = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setClientView((prev) => !prev);

    if (!toggleClicked) {
      setToggleClicked(true);
    }
  }, [toggleClicked]);

  const handleSubmit = useCallback(async (formData: FormData) => {
    const createUserResponse = await createUser(formState, formData);

    if (createUserResponse.message) {
      setFormState(createUserResponse);
      return;
    }

    // Because `signIn()` needs to be invoked from the client and not a server action
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    const error = response?.error;

    if (!error) {
      router.push(callBackUrl || '/dashboard');
    }
  }, [formState, router, callBackUrl]);

  return (
    <form action={handleSubmit}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <div className="flex justify-between items-center mb-3">
          <h1 className={`${lusitana.className} text-2xl`}>
            Create a {clientView ? 'client' : 'freelancer'} account
          </h1>
          <button
            className={clsx(
              'flex justify-center items-center w-[1.5rem] h-[1.5rem] rounded-full border border-solid shrink-0 z-10 before:w-[2rem] before:h-[2rem] before:absolute before:rounded-full before:-z-10',
              {
                'bg-green-200 border-green-500 before:bg-green-200': clientView,
                'bg-amber-200 border-amber-500 before:bg-amber-200': !clientView,
                'before:animate-ping': !toggleClicked,
              },
            )}
            onClick={handleClientToggle}
          >
            {clientView ? (
              <BuildingOffice2Icon className="cursor-pointer h-[18px] w-[18px] text-gray-700" />
            ) : (
              <UsersIcon className="cursor-pointer h-[18px] w-[18px] text-gray-700" />
            )}
          </button>
        </div>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              {clientView ? 'Company ' : ''}Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                name="name"
                placeholder={`Enter your ${clientView ? "company's " : ''}name`}
              />
              {clientView ? (
                <BuildingOfficeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              ) : (
                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              )}
            </div>

            <div id="name-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.name
                && <p className="mt-2 text-sm text-red-500" key={formState.errors.name[0]}>
                  {formState.errors.name[0]}
                </p>
              }
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="email-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.email
                && <p className="mt-2 text-sm text-red-500" key={formState.errors.email[0]}>
                  {formState.errors.email[0]}
                </p>
              }
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="password-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.password
                && <p className="mt-2 text-sm text-red-500" key={formState.errors.password[0]}>
                  {formState.errors.password[0]}
                </p>
              }
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.confirmPassword
                && <p className="mt-2 text-sm text-red-500" key={formState.errors.confirmPassword[0]}>
                  {formState.errors.confirmPassword[0]}
                </p>
              }
            </div>
          </div>

          <input
            name="type"
            value={clientView ? UserType.CLIENT : UserType.FREELANCER}
            hidden
            readOnly
          />

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="location"
            >
              Location
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="location"
                name="location"
                placeholder="Enter your location"
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="location-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.location
                && <p className="mt-2 text-sm text-red-500" key={formState.errors.location[0]}>
                  {formState.errors.location[0]}
                </p>
              }
            </div>
          </div>
          {clientView ? (
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="field"
              >
                Field
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="field"
                  name="field"
                  placeholder="Enter your field"
                />
                <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>

              <div id="field-error" aria-live="polite" aria-atomic="true">
                {formState.errors?.field
                  && <p className="mt-2 text-sm text-red-500" key={formState.errors.field[0]}>
                    {formState.errors.field[0]}
                  </p>
                }
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="skills"
              >
                Skills
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="skills"
                  name="skills"
                  placeholder="Enter your skills (comma-separated)"
                />
                <AcademicCapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>

              <div id="skills-error" aria-live="polite" aria-atomic="true">
                {formState.errors?.skills
                  && <p className="mt-2 text-sm text-red-500" key={formState.errors.skills[0]}>
                    {formState.errors.skills[0]}
                  </p>
                }
              </div>
            </div>
          )}
        </div>
        <SignUpButton />
        <div
          className="flex space-x-1 mt-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {formState.message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{formState.message}</p>
            </>
          )}
        </div>

        <p className="mt-4 text-center">Already have an account?{' '}
          <Link
            href="/auth/signin"
            className="text-blue-700 underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
