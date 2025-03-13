// app/profile/page.tsx
'use client';

import React, { useState } from 'react';
import { Target, ArrowRight, Shield, Percent, DollarSign, Info, Calendar, TrendingUp, Bell } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState('preferences');
  const [formData, setFormData] = useState({
    riskTolerance: '',
    investmentHorizon: '',
    investmentGoal: '',
    budget: '',
    monthlyContribution: '',
    taxBracket: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.riskTolerance) {
      setError('Please select your risk tolerance');
      return;
    }

    if (!formData.investmentGoal) {
      setError('Please select your investment goal');
      return;
    }

    const budget = parseFloat(formData.budget);
    if (isNaN(budget) || budget < 0) {
      setError('Please enter a valid investment budget');
      return;
    }

    // Simulate successful save
    setSuccess(true);
  };

  // Investment goal options
  const investmentGoals = [
    { value: 'retirement', label: 'Retirement Planning', icon: Shield, description: 'Save for long-term retirement needs' },
    { value: 'growth', label: 'Wealth Growth', icon: Percent, description: 'Focus on capital appreciation' },
    { value: 'income', label: 'Income Generation', icon: DollarSign, description: 'Generate regular income from investments' }
  ];

  // Risk tolerance options
  const riskOptions = [
    { value: 'low', label: 'Conservative', description: 'Minimal risk, modest but stable returns' },
    { value: 'medium', label: 'Moderate', description: 'Balanced approach with moderate risk/return' },
    { value: 'high', label: 'Aggressive', description: 'Higher risk with potential for higher returns' }
  ];

  // Time horizon options
  const timeHorizonOptions = [
    { value: 'short', label: 'Short-term (< 3 years)' },
    { value: 'medium', label: 'Medium-term (3-7 years)' },
    { value: 'long', label: 'Long-term (7+ years)' }
  ];

  return (
    <div className="p-0">
      {/* Page header */}
      <div className="px-6 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-xl font-bold">Profile</h1>
      </div>
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6">
          <button 
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'preferences' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            Investment Preferences
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'security' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'notifications' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </div>
        
        {activeTab === 'preferences' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Target className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Investment Preferences</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Configure your investment strategy and goals</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column */}
                <div className="space-y-6">
                  {/* Investment Goal */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Investment Goal
                    </label>
                    <div className="space-y-3">
                      {investmentGoals.map((goal) => (
                        <div
                          key={goal.value}
                          className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
                            formData.investmentGoal === goal.value
                              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                              : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                          }`}
                          onClick={() => setFormData({ ...formData, investmentGoal: goal.value })}
                        >
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                            formData.investmentGoal === goal.value
                              ? 'bg-blue-100 dark:bg-blue-900'
                              : 'bg-slate-100 dark:bg-slate-800'
                          }`}>
                            <goal.icon size={20} className={formData.investmentGoal === goal.value ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">
                              {goal.label}
                              {formData.investmentGoal === goal.value && (
                                <span className="ml-2 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              {goal.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Investment Horizon */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Investment Time Horizon
                    </label>
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                      {timeHorizonOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`flex-1 py-2 text-xs font-medium rounded-md ${
                            formData.investmentHorizon === option.value
                              ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                          onClick={() => setFormData({ ...formData, investmentHorizon: option.value })}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tax Bracket */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Tax Bracket
                    </label>
                    <select
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.taxBracket}
                      onChange={(e) => setFormData({ ...formData, taxBracket: e.target.value })}
                    >
                      <option value="">Select Tax Bracket</option>
                      <option value="10">10% - $0 to $10,275</option>
                      <option value="12">12% - $10,276 to $41,775</option>
                      <option value="22">22% - $41,776 to $89,075</option>
                      <option value="24">24% - $89,076 to $170,050</option>
                      <option value="32">32% - $170,051 to $215,950</option>
                      <option value="35">35% - $215,951 to $539,900</option>
                      <option value="37">37% - $539,901 or more</option>
                    </select>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-6">
                  {/* Risk Tolerance */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Risk Tolerance
                      </label>
                      <button 
                        type="button"
                        className="flex items-center text-xs text-blue-600 dark:text-blue-400"
                      >
                        <Info size={14} className="mr-1" />
                        Learn more
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {riskOptions.map((option) => (
                        <div
                          key={option.value}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            formData.riskTolerance === option.value
                              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                              : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                          }`}
                          onClick={() => setFormData({ ...formData, riskTolerance: option.value })}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{option.label}</h3>
                            {formData.riskTolerance === option.value && (
                              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {option.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Initial Investment Budget
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <DollarSign size={16} className="text-slate-400" />
                      </div>
                      <input
                        type="number"
                        className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your total investment budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  {/* Monthly Contribution */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Monthly Contribution
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar size={16} className="text-slate-400" />
                      </div>
                      <input
                        type="number"
                        className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Recurring monthly investment"
                        value={formData.monthlyContribution}
                        onChange={(e) => setFormData({ ...formData, monthlyContribution: e.target.value })}
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      Regular contributions can significantly improve your long-term returns
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                {error && (
                  <div className="p-4 mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg flex items-start">
                    <span className="mr-2">⚠️</span>
                    <span>{error}</span>
                  </div>
                )}
                
                {success && (
                  <div className="p-4 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-lg flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Your investment preferences have been saved successfully!</span>
                  </div>
                )}
                
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                  >
                    Save Preferences
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <Shield className="text-slate-600 dark:text-slate-400" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold">Security Settings</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage your account security preferences</p>
              </div>
            </div>
            
            <div className="p-10 text-center text-slate-500 dark:text-slate-400">
              Security settings will be available in the next update
            </div>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <Bell className="text-slate-600 dark:text-slate-400" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold">Notification Preferences</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage how you receive alerts and updates</p>
              </div>
            </div>
            
            <div className="p-10 text-center text-slate-500 dark:text-slate-400">
              Notification settings will be available in the next update
            </div>
          </div>
        )}
      </div>
    </div>
  );
}