import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Settings, 
  MessageCircle, 
  ShoppingBag, 
  Zap,
  Heart,
  TrendingDown
} from 'lucide-react';
import BoltBadge from './BoltBadge';

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/therapist', icon: MessageCircle, label: 'AI Therapist' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.aside 
        className="w-64 bg-white/80 backdrop-blur-md border-r border-slate-200 flex flex-col"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">ImpulseStopper</h1>
              <p className="text-sm text-slate-600">Your AI Guardian</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <motion.div 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-colors ${
                    isActive 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Stats Summary */}
        <div className="p-4 m-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingDown className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">This Week</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Saved</span>
              <span className="font-bold text-emerald-600">₹2,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Impulses Stopped</span>
              <span className="font-bold text-blue-600">12</span>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Good afternoon, Alex!</h2>
              <p className="text-slate-600">You're on a 3-day regret-free streak 🔥</p>
            </div>
            <BoltBadge />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;