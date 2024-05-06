import {
  BanknotesIcon,
  ClockIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  projects: ClipboardDocumentIcon,
  completed: ClipboardDocumentCheckIcon,
};

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'collected' | 'pending' | 'projects' | 'completed';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export default async function CardWrapper() {
  return (
    <>
      <Card title="Collected" value="$1,234.56" type="collected" />
      <Card title="Pending" value="$78.90" type="pending" />
      <Card title="Total Projects" value="48" type="projects" />
      <Card title="Total Completed" value="36" type="completed" />
    </>
  );
}
