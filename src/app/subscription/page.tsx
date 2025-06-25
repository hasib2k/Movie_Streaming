"use client";

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { CreditCardIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

type PlanType = 'basic' | 'standard' | 'premium';

interface Plan {
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
  videoQuality: string;
  resolution: string;
  devices: string;
  concurrentStreams: number;
}

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('premium');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: Record<PlanType, Plan> = {
    basic: {
      name: 'Basic',
      price: billingCycle === 'monthly' ? '$8.99' : '$89.99',
      billingPeriod: billingCycle === 'monthly' ? '/month' : '/year',
      features: ['Unlimited movies and TV shows', 'Watch on mobile and tablet', 'Cancel anytime', 'No ads with limited interruptions'],
      videoQuality: 'Good',
      resolution: 'HD (720p)',
      devices: 'Phone, Tablet, Computer',
      concurrentStreams: 1
    },
    standard: {
      name: 'Standard',
      price: billingCycle === 'monthly' ? '$13.99' : '$139.99',
      billingPeriod: billingCycle === 'monthly' ? '/month' : '/year',
      features: ['Everything in Basic', 'Watch on your TV', 'Downloads available', 'No ads'],
      videoQuality: 'Better',
      resolution: 'Full HD (1080p)',
      devices: 'Phone, Tablet, Computer, TV',
      concurrentStreams: 2
    },
    premium: {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '$17.99' : '$179.99',
      billingPeriod: billingCycle === 'monthly' ? '/month' : '/year',
      features: ['Everything in Standard', 'Ultra HD and HDR available', 'Dolby Atmos audio', 'Priority customer service'],
      videoQuality: 'Best',
      resolution: 'Ultra HD (4K) and HDR',
      devices: 'All Devices',
      concurrentStreams: 4
    }
  };

  const savings = {
    basic: billingCycle === 'yearly' ? '$17.89' : '0',
    standard: billingCycle === 'yearly' ? '$27.89' : '0',
    premium: billingCycle === 'yearly' ? '$35.89' : '0'
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
      <p className="text-gray-300 mb-8">Select the plan that works best for you. Downgrade or upgrade at any time.</p>
      
      {/* Billing toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#181e23] rounded-lg p-1 inline-flex">
          <button 
            className={`px-5 py-2 rounded-md text-sm font-medium transition ${billingCycle === 'monthly' ? 'bg-[#232a31] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-5 py-2 rounded-md text-sm font-medium transition flex items-center ${billingCycle === 'yearly' ? 'bg-[#232a31] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly <span className="ml-1 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full font-bold">20% OFF</span>
          </button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['basic', 'standard', 'premium'] as PlanType[]).map((plan) => (
          <div 
            key={plan}
            className={`rounded-xl p-6 transition-all ${selectedPlan === plan ? 'bg-[#232a31] border-2 border-yellow-400 shadow-lg shadow-yellow-400/10' : 'bg-[#181e23] border-2 border-transparent hover:border-gray-700'}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{plans[plan].name}</h3>
              {selectedPlan === plan && <CheckCircleIcon className="h-6 w-6 text-yellow-400" />}
            </div>
            
            <div className="mb-4">
              <span className="text-3xl font-bold">{plans[plan].price}</span>
              <span className="text-gray-400">{plans[plan].billingPeriod}</span>
              
              {billingCycle === 'yearly' && (
                <div className="text-sm text-yellow-400 font-medium mt-1">
                  Save {savings[plan]} per year
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="mb-3">
                <p className="text-sm text-gray-300 mb-1">Video quality</p>
                <p className="font-medium">{plans[plan].videoQuality}</p>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-300 mb-1">Resolution</p>
                <p className="font-medium">{plans[plan].resolution}</p>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-300 mb-1">Supported devices</p>
                <p className="font-medium">{plans[plan].devices}</p>
              </div>
              <div className="mb-5">
                <p className="text-sm text-gray-300 mb-1">Concurrent streams</p>
                <p className="font-medium">{plans[plan].concurrentStreams}</p>
              </div>
              
              <ul className="space-y-2">
                {plans[plan].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={() => setSelectedPlan(plan)}
              className={`w-full py-3 rounded-lg font-medium transition ${selectedPlan === plan ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-[#232a31] hover:bg-[#2c3540]'}`}
            >
              {selectedPlan === plan ? 'Current Plan' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Payment section */}
      <div className="mt-12 bg-[#181e23] rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
            <div className="relative">
              <CreditCardIcon className="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="1234 5678 9012 3456" 
                className="w-full bg-[#232a31] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                className="w-full bg-[#232a31] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
              <input 
                type="text" 
                placeholder="123" 
                className="w-full bg-[#232a31] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
            <input 
              type="text" 
              placeholder="John Smith" 
              className="w-full bg-[#232a31] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 transition text-black font-medium py-3 px-6 rounded-lg">
            Subscribe to {plans[selectedPlan].name} Plan
          </button>
          <p className="mt-4 text-sm text-gray-400">
            By subscribing, you agree to our <a href="/terms-of-service" className="text-yellow-400 hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-yellow-400 hover:underline">Privacy Policy</a>.
            You can cancel your subscription anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
