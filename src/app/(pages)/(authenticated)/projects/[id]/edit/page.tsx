import Breadcrumbs from '@/ui/projects/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Project',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          {
            label: 'Edit Project',
            href: `/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <p>Edit Project Page: {id}</p>
    </main>
  );
}
