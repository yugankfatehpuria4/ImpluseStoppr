import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Heart, Sparkles } from 'lucide-react';
import BoltBadge from '../components/BoltBadge';

const Therapist = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hey there! I'm your AI shopping therapist. I noticed you almost bought those headphones earlier. Want to talk about what was going through your mind?",
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      type: 'user',
      content: "I was feeling pretty bored and saw an ad for them. They looked really cool.",
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      type: 'ai',
      content: "Ah, the classic boredom-to-shopping pipeline! 😄 I get it - when we're understimulated, our brains love the dopamine hit of 'new shiny thing.' But you already have 3 pairs of headphones, right? What do you think was really missing in that moment?",
      timestamp: new Date(Date.now() - 180000)
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    "That's totally normal! Boredom shopping is like emotional eating but for your wallet. What usually helps you feel more engaged?",
    "I love your self-awareness! 🌟 That pause you took before buying shows you're building great habits. How are you feeling about that choice now?",
    "Sounds like you were looking for some excitement. Have you considered that the thrill might come from the hunt, not the purchase? What else gives you that same energy?",
    "You're getting so good at catching these patterns! The fact that you noticed the emotion behind the urge is huge progress. 💪"
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai' as const,
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold text-slate-800">AI Therapist</h1>
            <BoltBadge />
          </div>
          <p className="text-slate-600">Your judgment-free zone for shopping emotions</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-emerald-800">AI Online</span>
        </div>
      </motion.div>

      {/* Chat Container */}
      <motion.div 
        className="flex-1 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-end space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      {message.type === 'user' ? 
                        <User className="w-5 h-5 text-white" /> : 
                        <Bot className="w-5 h-5 text-white" />
                      }
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                  <p className={`text-xs text-slate-500 mt-1 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-slate-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Share what's on your mind..."
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isTyping}
              className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Helpful Tips */}
      <motion.div 
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          {
            icon: Heart,
            title: "Emotional Check-in",
            description: "How are you feeling right now?"
          },
          {
            icon: Sparkles,
            title: "Gratitude Practice",
            description: "What are you grateful for today?"
          },
          {
            icon: Bot,
            title: "Shopping Triggers",
            description: "Let's explore your spending patterns"
          }
        ].map((tip, index) => (
          <motion.button
            key={tip.title}
            className="p-4 bg-white/60 backdrop-blur-md rounded-xl border border-slate-200 text-left hover:bg-white/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setNewMessage(tip.description)}
          >
            <div className="flex items-center space-x-3 mb-2">
              <tip.icon className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-slate-800">{tip.title}</span>
            </div>
            <p className="text-sm text-slate-600">{tip.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Therapist;