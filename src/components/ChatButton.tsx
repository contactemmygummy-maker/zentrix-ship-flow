import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-sm">Logistics Support</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-6 h-[300px] overflow-y-auto bg-slate-50 flex flex-col space-y-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm self-start max-w-[80%] border border-slate-100">
                Hello! 👋 Welcome to Terra Zentrix. How can I help you with your logistics today?
              </div>
              <div className="bg-orange-500 p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-md self-end max-w-[80%]">
                I'd like to track a shipment.
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm self-start max-w-[80%] border border-slate-100">
                Sure! You can use our <span className="font-bold text-orange-500">Track Shipment</span> page or just type your tracking number here.
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type a message..."
                  className="h-10 rounded-xl bg-slate-100 border-none text-sm focus:ring-1 focus:ring-orange-500"
                />
                <Button size="icon" className="h-10 w-10 bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? "bg-slate-900 hover:bg-slate-800" : "bg-orange-500 hover:bg-orange-600 scale-110"
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
      </Button>
    </div>
  );
};

export default ChatButton;