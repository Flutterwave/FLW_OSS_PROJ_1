import Breadcrumbs from '@/ui/projects/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Project',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          {
            label: 'Create Project',
            href: '/projects/create',
            active: true,
          },
        ]}
      />
      <p>Create Project Page</p>
    </main>
  );
}
