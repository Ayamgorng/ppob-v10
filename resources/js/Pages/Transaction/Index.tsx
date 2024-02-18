import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, router } from '@inertiajs/react';
import Card from '@/Components/Card';
import { FaPlus } from "react-icons/fa";
import { useMemo } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { rupiah } from '@/libs/BaseHelper';
import CategoryType from '@/types/category';
import { PageProps } from '@/types';

const ListCategory = ({ title, models }: { title: string, models: CategoryType[] }) => {
  if (!models) {
    return;
  }

  return (
    <div className='my-7'>
      <div className='pl-10 text-xl dark:text-white'>{title}</div>
      <div className='flex-wrap inline-flex min-w-full p-10 gap-8'>
        {
          models.map((d: CategoryType, i: number) => {
            return (
              <Link key={i} href={`/transaction/${d.slug}`} className='flex items-center ml-4 w-[calc(100%/6)] hover:pl-1'>
                <div className='p-3 shadow-lg rounded-3xl dark:bg-white'>
                  {
                    d.icon ?
                      <img className="h-10 w-10" decoding="async" src={`/images/category/${d.icon}`} alt={d.name} crossOrigin="anonymous" />
                      : <div className="h-10 w-10 flex justify-center items-center text-xl font-medium">{d.name.charAt(0)}</div>
                  }
                </div>
                <div className='ml-6 dark:text-white'>
                  {d.name}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default function Index({ data, models }: PageProps & { models: CategoryType[] }) {
  const categories = useMemo(() => {
    let tempPrepaid: CategoryType[] = []
    let tempPostpaid: CategoryType[] = []

    models.forEach((d: CategoryType) => {
      if (d.type === 'prepaid') {
        tempPrepaid.push(d)
      } else {
        tempPostpaid.push(d)
      }
    })

    return { prepaid: tempPrepaid, postpaid: tempPostpaid }
  }, [models])

  return (
    <AuthenticatedLayout
      data={data}
      title="Transaction"
    >
      <Card className='p-4 flex justify-between items-center rounded-lg'>
        <div className='dark:text-white'>
          {rupiah(data?.user?.saldo || 0)}
        </div>

        <PrimaryButton className='py-4' onClick={() => router.get('/deposit/create')}>
          <FaPlus />&nbsp;Topup
        </PrimaryButton>
      </Card>
      <Card>
        {
          models.length > 0 ?
            <>
              <ListCategory title='Prepaid' models={categories.prepaid} />
              <ListCategory title='Postpaid' models={categories.postpaid} />
            </>
            : <div className='dark:text-white'>Empty Product</div>
        }
      </Card>

    </AuthenticatedLayout>
  )
}
