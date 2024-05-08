import Search from '@/ui/base-components/search';
import Table from '@/ui/projects/table';
import { CreateProject } from '@/ui/projects/buttons';
import { lusitana } from '@/ui/fonts';
import { ProjectsTableSkeleton } from '@/ui/base-components/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search projects" />
        <CreateProject />
      </div>
       <Suspense key={query + currentPage} fallback={<ProjectsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
