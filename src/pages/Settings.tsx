import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  DollarSign, 
  Brain, 
  Smartphone, 
  Bell,
  Eye,
  Shield,
  Clock,
  Palette
} from 'lucide-react';
import BoltBadge from '../components/BoltBadge';

const Settings = () => {
  const [hourlyWage, setHourlyWage] = useState('500');
  const [notifications, setNotifications] = useState(true);
  const [strictMode, setStrictMode] = useState(false);
  const [aiPersonality, setAiPersonality] = useState('witty');

  const settingSections = [
    {
      title: 'Personal Settings',
      icon: User,
      items: [
        {
          label: 'Hourly Wage',
          description: 'Used to calculate "hours of work" for purchases',
          type: 'input',
          value: hourlyWage,
          onChange: setHourlyWage,
          prefix: '₹'
        },
        {
          label: 'AI Personality',
          description: 'How your AI therapist should speak to you',
          type: 'select',
          value: aiPersonality,
          onChange: setAiPersonality,
          options: [
            { value: 'witty', label: 'Witty & Sarcastic' },
            { value: 'gentle', label: 'Gentle & Supportive' },
            { value: 'strict', label: 'Strict & Direct' },
            { value: 'funny', label: 'Funny & Lighthearted' }
          ]
        }
      ]
    },
    {
      title: 'Intervention Settings',
      icon: Brain,
      items: [
        {
          label: 'Strict Mode',
          description: 'Makes it harder to bypass AI prompts',
          type: 'toggle',
          value: strictMode,
          onChange: setStrictMode
        },
        {
          label: 'Enable Notifications',
          description: 'Get reminded about your savings goals',
          type: 'toggle',
          value: notifications,
          onChange: setNotifications
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
          <p className="text-slate-600">Customize your ImpulseStopper experience</p>
        </div>
        <div className="lg:hidden">
          <BoltBadge />
        </div>
      </motion.div>

      {/* Settings Sections */}
      {settingSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
        >
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <section.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">{section.title}</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {section.items.map((item, itemIndex) => (
              <motion.div
                key={item.label}
                className="flex items-center justify-between"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex-1">
                  <h3 className="font-medium text-slate-800">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                
                <div className="ml-6">
                  {item.type === 'input' && (
                    <div className="relative">
                      {item.prefix && (
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
                          {item.prefix}
                        </span>
                      )}
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => item.onChange(e.target.value)}
                        className={`w-32 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          item.prefix ? 'pl-8' : ''
                        }`}
                      />
                    </div>
                  )}
                  
                  {item.type === 'select' && (
                    <select
                      value={item.value}
                      onChange={(e) => item.onChange(e.target.value)}
                      className="w-48 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {item.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {item.type === 'toggle' && (
                    <motion.button
                      onClick={() => item.onChange(!item.value)}
                      className={`relative inline-flex w-12 h-6 rounded-full transition-colors ${
                        item.value ? 'bg-blue-500' : 'bg-slate-300'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-md"
                        animate={{
                          x: item.value ? 24 : 2,
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{ y: 2 }}
                      />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Connected Services */}
      <motion.div
        className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-xl">
              <Smartphone className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">Connected Services</h2>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {[
            { name: 'Bank Account', status: 'Connected', color: 'emerald' },
            { name: 'Chrome Extension', status: 'Active', color: 'blue' },
            { name: 'Expense Tracker', status: 'Not Connected', color: 'slate' }
          ].map((service, index) => (
            <div key={service.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <p className="font-medium text-slate-800">{service.name}</p>
                <p className={`text-sm text-${service.color}-600`}>{service.status}</p>
              </div>
              <motion.button
                className={`px-4 py-2 rounded-lg font-medium ${
                  service.status === 'Not Connected'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.status === 'Not Connected' ? 'Connect' : 'Manage'}
              </motion.button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer with Bolt Badge */}
      <motion.div 
        className="flex justify-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <BoltBadge />
      </motion.div>
    </div>
  );
};

export default Settings;