"use client";

import { useState } from 'react';
import { ChevronDownIcon, CreditCardIcon, DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'failed';
  invoiceUrl: string;
}

interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'amex' | 'paypal';
  last4: string;
  expiry?: string;
  isDefault: boolean;
}

export default function BillingPage() {
  const [selectedTab, setSelectedTab] = useState<'payment-methods' | 'invoices'>('payment-methods');
  const [showAddPayment, setShowAddPayment] = useState(false);
  
  const paymentMethods: PaymentMethod[] = [
    { id: '1', type: 'visa', last4: '4242', expiry: '12/25', isDefault: true },
    { id: '2', type: 'paypal', last4: '', isDefault: false },
  ];
  
  const invoices: Invoice[] = [
    { id: 'INV-001', date: 'July 01, 2023', amount: '$17.99', status: 'paid', invoiceUrl: '#' },
    { id: 'INV-002', date: 'June 01, 2023', amount: '$17.99', status: 'paid', invoiceUrl: '#' },
    { id: 'INV-003', date: 'May 01, 2023', amount: '$17.99', status: 'paid', invoiceUrl: '#' },
    { id: 'INV-004', date: 'April 01, 2023', amount: '$13.99', status: 'paid', invoiceUrl: '#' },
    { id: 'INV-005', date: 'March 01, 2023', amount: '$13.99', status: 'paid', invoiceUrl: '#' },
  ];

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return (
          <div className="bg-blue-600 text-white p-1 rounded">
            <span className="font-bold text-xs">VISA</span>
          </div>
        );
      case 'mastercard':
        return (
          <div className="bg-red-500 text-white p-1 rounded">
            <span className="font-bold text-xs">MC</span>
          </div>
        );
      case 'amex':
        return (
          <div className="bg-blue-400 text-white p-1 rounded">
            <span className="font-bold text-xs">AMEX</span>
          </div>
        );
      case 'paypal':
        return (
          <div className="bg-blue-700 text-white p-1 rounded flex items-center">
            <span className="font-bold text-xs">PP</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs font-medium">Paid</span>;
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded text-xs font-medium">Pending</span>;
      case 'failed':
        return <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs font-medium">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Billing & Payment</h1>
        <Link 
          href="/subscription"
          className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
        >
          Manage Subscription
        </Link>
      </div>

      <div className="bg-[#181e23] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Current Plan</h2>
          <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded text-xs font-bold">PREMIUM</span>
        </div>
        
        <div className="flex flex-wrap gap-y-4 justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Subscription</p>
            <p className="text-white">Premium Plan</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">Price</p>
            <p className="text-white">$17.99 / month</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">Renewal Date</p>
            <p className="text-white">August 1, 2023</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">Status</p>
            <p className="text-green-400">Active</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#232a31] mb-6">
        <button
          onClick={() => setSelectedTab('payment-methods')}
          className={`py-3 px-4 font-medium text-sm border-b-2 ${selectedTab === 'payment-methods' ? 'text-yellow-400 border-yellow-400' : 'text-gray-400 border-transparent hover:text-white'}`}
        >
          Payment Methods
        </button>
        <button
          onClick={() => setSelectedTab('invoices')}
          className={`py-3 px-4 font-medium text-sm border-b-2 ${selectedTab === 'invoices' ? 'text-yellow-400 border-yellow-400' : 'text-gray-400 border-transparent hover:text-white'}`}
        >
          Billing History
        </button>
      </div>

      {/* Payment Methods Tab */}
      {selectedTab === 'payment-methods' && (
        <>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-medium text-white">Your Payment Methods</h2>
            <button 
              onClick={() => setShowAddPayment(!showAddPayment)}
              className="text-sm bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-medium px-4 py-2 rounded-lg"
            >
              Add Payment Method
            </button>
          </div>

          {/* Payment methods list */}
          <div className="space-y-3 mb-6">
            {paymentMethods.map((method) => (
              <div key={method.id} className="bg-[#232a31] rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {getCardIcon(method.type)}
                  <div>
                    {method.type === 'paypal' ? (
                      <p className="text-white font-medium">PayPal Account</p>
                    ) : (
                      <p className="text-white font-medium">{method.type.charAt(0).toUpperCase() + method.type.slice(1)} ****{method.last4}</p>
                    )}
                    {method.expiry && <p className="text-sm text-gray-400">Expires {method.expiry}</p>}
                    {method.isDefault && <span className="text-xs text-yellow-400 font-medium">Default</span>}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {!method.isDefault && (
                    <button className="text-sm text-white hover:text-yellow-400 px-3 py-1 rounded transition-colors">
                      Set Default
                    </button>
                  )}
                  <button className="text-sm text-white hover:text-red-400 px-3 py-1 rounded transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add new payment method form */}
          {showAddPayment && (
            <div className="bg-[#181e23] rounded-xl p-6 mb-6 border border-[#232a31]">
              <h3 className="text-lg font-medium text-white mb-4">Add Payment Method</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
                    <div className="relative">
                      <CreditCardIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full bg-[#232a31] rounded-lg pl-10 pr-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full bg-[#232a31] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-[#232a31] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-[#232a31] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="default-payment"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-400 border-gray-500 rounded focus:ring-yellow-400 bg-[#232a31]"
                  />
                  <label htmlFor="default-payment" className="ml-2 text-sm text-white">
                    Make this my default payment method
                  </label>
                </div>
                
                <div className="flex justify-end gap-3 pt-2">
                  <button 
                    onClick={() => setShowAddPayment(false)}
                    className="px-4 py-2 bg-[#232a31] hover:bg-[#2c3540] rounded-lg text-white text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm font-medium transition-colors">
                    Save Card
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Invoices Tab */}
      {selectedTab === 'invoices' && (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#181e23] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#232a31]">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Invoice</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#232a31]">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-[#232a31]/50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-white font-medium">{invoice.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-300">{invoice.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-white">{invoice.amount}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {getStatusBadge(invoice.status)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <a 
                        href={invoice.invoiceUrl} 
                        className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        <span className="text-sm">PDF</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
