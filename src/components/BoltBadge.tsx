import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const BoltBadge = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ rotate: -5 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Zap className="w-4 h-4" />
      <span className="font-bold text-sm">Built for Bolt⚡</span>
    </motion.div>
  );
};

export default BoltBadge;