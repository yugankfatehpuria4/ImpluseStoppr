import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Brain,
  Target,
  Calendar,
  Award,
  Clock
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Dashboard = () => {
  const savingsData = [
    { name: 'Mon', saved: 450, impulses: 2 },
    { name: 'Tue', saved: 800, impulses: 3 },
    { name: 'Wed', saved: 0, impulses: 0 },
    { name: 'Thu', saved: 1200, impulses: 4 },
    { name: 'Fri', saved: 600, impulses: 2 },
    { name: 'Sat', saved: 300, impulses: 1 },
    { name: 'Sun', saved: 950, impulses: 3 },
  ];

  const moodData = [
    { name: 'Bored', value: 35, color: '#3B82F6' },
    { name: 'Stressed', value: 25, color: '#EF4444' },
    { name: 'Happy', value: 20, color: '#10B981' },
    { name: 'Sad', value: 15, color: '#8B5CF6' },
    { name: 'Other', value: 5, color: '#F59E0B' },
  ];

  const stats = [
    {
      title: 'Total Saved',
      value: '₹24,450',
      change: '+12%',
      icon: DollarSign,
      color: 'emerald',
      description: 'This month'
    },
    {
      title: 'Impulses Stopped',
      value: '47',
      change: '+8',
      icon: ShoppingCart,
      color: 'blue',
      description: 'This week'
    },
    {
      title: 'Current Streak',
      value: '3 days',
      change: 'New record!',
      icon: Target,
      color: 'purple',
      description: 'Regret-free'
    },
    {
      title: 'AI Interactions',
      value: '23',
      change: '+5',
      icon: Brain,
      color: 'orange',
      description: 'This week'
    }
  ];

  const recentSaves = [
    {
      item: 'Wireless Headphones',
      amount: '₹8,999',
      reason: 'Realized you already have 3 pairs',
      time: '2 hours ago',
      mood: 'Bored'
    },
    {
      item: 'Designer Hoodie',
      amount: '₹4,500',
      reason: 'Equivalent to 12 hours of work',
      time: '1 day ago',
      mood: 'Stressed'
    },
    {
      item: 'Gaming Mouse',
      amount: '₹3,200',
      reason: 'Bank balance too low',
      time: '2 days ago',
      mood: 'Happy'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">You're crushing it! 💪</h1>
            <p className="text-blue-100 text-lg">
              You've saved <span className="font-bold">₹24,450</span> this month by avoiding impulse purchases
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
              <Award className="w-8 h-8" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-medium text-${stat.color}-600`}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Savings Trend */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-slate-800 mb-4">Weekly Savings Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="saved" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Mood Analysis */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-slate-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-slate-800 mb-4">Shopping Triggers</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={moodData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div 
        className="bg-white/80 backdrop-blur-md rounded-xl border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-800">Recent Saves</h3>
          <p className="text-slate-600">Your latest victories over impulse buying</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentSaves.map((save, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{save.item}</p>
                    <p className="text-sm text-slate-600">{save.reason}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600">{save.amount}</p>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{save.time}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                      {save.mood}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;