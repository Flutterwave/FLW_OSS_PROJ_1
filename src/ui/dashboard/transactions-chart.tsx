import { ReceiptRefundIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/ui/fonts';

export default async function TransactionsChart() {
  const chartHeight = 350;

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Transactions
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
          </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ReceiptRefundIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 transactions</h3>
        </div>
      </div>
    </div>
  );
}
