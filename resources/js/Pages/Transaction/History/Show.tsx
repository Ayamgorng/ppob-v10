import React, { ButtonHTMLAttributes, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Card from '@/Components/Card'
import Transaction, { StatusType } from '@/types/transaction'
import clsx from 'clsx';
import { listStatus, rupiah } from '@/libs/BaseHelper';
import axios from 'axios';
import { router } from '@inertiajs/react';
import CategoryType from '@/types/category';
import ProductType from '@/types/product';

type ItemDataProps = {
  label: string
  value: any
  align?: string
}

const ItemData = ({ label, value, align = 'text-left' }: ItemDataProps) => {
  return (
    <div className={clsx('p-2', align)}>
      <div className='dark:text-white leading-8'>{label}</div>
      <div className='text-xl font-semibold dark:text-white inline-flex'>{value}</div>
    </div>
  )
}

const BtnSubmit = ({ label, loading, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { label: string, loading?: boolean }) => {
  return (<button disabled={loading} {...props} className={clsx('w-full p-2 rounded-xl text-center text-white transition-all duration-300', className)}>{loading ? 'Loading...' : label}</button>)
}

type ShowProps = {
  auth: any,
  transaction: Transaction,
  category: CategoryType,
  product: ProductType
}

export default function Show({ auth, transaction, category }: ShowProps) {
  const [loading, setLoading] = useState(false)

  const status: StatusType = listStatus[transaction.status];

  const onSubmit = async (type: number) => {
    setLoading(true)

    await axios.put(`/transaction/postpaid/${transaction.id}`, { type })

    router.reload();
    setLoading(false)
  }

  return (
    <AuthenticatedLayout
      auth={auth}
    >
      <div className='text-3xl dark:text-white'>History</div>
      <div className='flex justify-between gap-x-10'>
        <Card className='px-4 py-3 w-full md:w-1/2'>
          <ItemData label={category.name} value={transaction.product_name} />

          <div className='flex justify-between'>
            <ItemData label='Order ID' value={transaction.id} />
            <div className='p-3 text-right'>
              <div className='dark:text-white'>Date</div>
              <div className='dark:text-white'>{transaction.created_at_formatted}</div>
            </div>
          </div>

          <ItemData label='Number/ID Customer' value={transaction.mtrpln ? transaction.mtrpln : transaction.target} />

          <ItemData label='Serial Number / Token / Security Code' value={transaction.token || '-'} />

          <ItemData label='Price' value={rupiah(transaction.total)} />

          <ItemData label='Status' value={<div className={clsx('px-4 py-2 rounded-xl text-white', status.color)}>{status.label}</div>} />

          <div className='p-3'>
            <div className='dark:text-white'>Note</div>
            <div className='dark:text-white'>{transaction.note}</div>
          </div>

          {
            transaction.status === 3 &&
            <div className='p-3 mt-5 flex gap-x-8 justify-between'>
              <BtnSubmit label='Cancel' loading={loading} onClick={() => onSubmit(0)} className={clsx('bg-red-500', !loading && 'hover:bg-red-600')} />
              <BtnSubmit label='Pay Now' loading={loading} onClick={() => onSubmit(1)} className={clsx('bg-blue-500', !loading && 'hover:bg-blue-600')} />
            </div>
          }
        </Card>

        <Card className='px-4 py-3 w-full md:w-1/2'>
          <div className='dark:text-white mb-10 text-xl'>Transaction Status Note</div>
          <table>
            <tbody>
              {
                listStatus.map((d: StatusType, i: number) => {
                  return (
                    <tr key={i}>
                      <td className='pb-3'><div className={clsx('px-4 py-2 rounded-xl text-white text-center', d.color)}>{d.label}</div></td>
                      <td className='pb-3 pl-10 dark:text-white'>{d.desc}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Card>
      </div>
    </AuthenticatedLayout>
  )
}
