import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  X, 
  AlertCircle, 
  Clock, 
  Coffee, 
  Car,
  Brain,
  CheckCircle,
  XCircle
} from 'lucide-react';
import BoltBadge from '../components/BoltBadge';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState('prompt'); // prompt, decision, result

  const productData = {
    name: "Wireless Noise-Cancelling Headphones",
    price: 8999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    site: "Amazon"
  };

  const hourlyWage = 500;
  const workHours = Math.ceil(productData.price / hourlyWage);
  const coffees = Math.floor(productData.price / 200);
  const uberRides = Math.floor(productData.price / 300);

  const aiPrompts = [
    "Are you buying this because you're bored or because you actually need it?",
    "You already have 3 pairs of headphones. What makes this one special?",
    "This costs " + workHours + " hours of work. Still feeling it?",
    "Your bank balance is ₹12,450. You sure about this purchase?"
  ];

  const [currentPrompt] = useState(aiPrompts[Math.floor(Math.random() * aiPrompts.length)]);

  const handleDecision = (decision: 'buy' | 'skip' | 'therapist') => {
    setCurrentStep('result');
    // In real app, this would log the decision and update analytics
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div 
        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {/* Main Prompt */}
          {currentStep === 'prompt' && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Hold up! 🛑</h3>
                    <p className="text-sm text-slate-600">Let's think about this...</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BoltBadge />
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={productData.image} 
                    alt={productData.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">{productData.name}</h4>
                    <p className="text-xl font-bold text-blue-600">₹{productData.price.toLocaleString()}</p>
                    <p className="text-sm text-slate-500">on {productData.site}</p>
                  </div>
                </div>

                {/* AI Prompt */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800 mb-1">Your AI conscience says:</p>
                      <p className="text-slate-700">{currentPrompt}</p>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <h5 className="font-semibold text-slate-800 mb-3">This purchase equals:</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-slate-600">Hours of work</span>
                      </div>
                      <span className="font-bold text-slate-800">{workHours} hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-slate-600">Coffee dates</span>
                      </div>
                      <span className="font-bold text-slate-800">{coffees} coffees</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Car className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-slate-600">Uber rides</span>
                      </div>
                      <span className="font-bold text-slate-800">{uberRides} rides</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={() => handleDecision('skip')}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🎉 You're right, I'll skip this
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleDecision('therapist')}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💭 Talk to AI Therapist
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleDecision('buy')}
                    className="w-full py-3 bg-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    I'll buy it anyway
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Result Screen */}
          {currentStep === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Great choice! 🎉</h3>
              <p className="text-slate-600 mb-4">
                You just saved ₹{productData.price.toLocaleString()} by thinking it through!
              </p>
              <div className="bg-emerald-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-emerald-800">
                  This brings your total monthly savings to <span className="font-bold">₹26,449</span>
                </p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <BoltBadge />
              </div>
              <motion.button
                onClick={() => setIsVisible(false)}
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping Mindfully
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Popup;