"use client";

import ButtonPayment from '@/components/button-payment';
import { GiveWay, Transaction } from '@/types';
import { Ticket } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import { NumericFormat } from "react-number-format";

interface CheckoutProps {
    transaction: Transaction;
    giveway: GiveWay;
  }

const Checkout : React.FC<CheckoutProps> = ({
    transaction,
    giveway
  }) => {

    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    return ( 
        <div className="p-4">
            <h2 className="text-white text-xl mt-10 text-center">Transaccion ID: {id} </h2>
            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                <div className="w-full flex items-center">
                                    <div className="overflow-hidden rounded-lg w-16 bg-gray-50 border border-gray-200">
                                        <Ticket height={50} width={50} className='mx-auto' />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-semibold uppercase text-gray-600">{giveway.name}</h6>
                                        <p className="text-gray-400">x {transaction.tickets.length}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600 text-xl">
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                            <span className="ml-1">cop</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Subtotal</span>
                                    </div>
                                    <div className="pl-3 font-semibold">
                                        <span className="font-semibold text-gray-600 text-xl">
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                            <span className="ml-1">cop</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Impuestos</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">$0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Total</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            <div className='w-full'>
                                <ButtonPayment total={transaction.total} reference={transaction.code} giveaway={giveway.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;
