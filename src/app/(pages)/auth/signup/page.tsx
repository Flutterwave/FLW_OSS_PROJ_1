import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import WaveworkLogo from '@/ui/base-components/wavework-logo';
import SignUpForm from '@/ui/auth/signup-form';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function Page() {
  const session = await getServerSession();

  if (session) {
    return redirect('/dashboard');
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <WaveworkLogo />
          </div>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
