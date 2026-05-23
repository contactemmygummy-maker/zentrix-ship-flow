import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about your shipment or want to discuss a large-scale logistics project? 
            Our global support team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Call Us</p>
                    <p className="text-lg font-semibold">+1 (800) 555-LOGI</p>
                    <p className="text-sm text-slate-400">Available Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Email Us</p>
                    <p className="text-lg font-semibold">support@terrazentrix.com</p>
                    <p className="text-sm text-slate-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Main Headquarters</p>
                    <p className="text-lg font-semibold leading-relaxed">
                      123 Logistics Way, Suite 500<br />
                      Global Trade Center<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800 flex space-x-6 relative z-10">
                {[MessageSquare, Globe, Clock].map((Icon, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-bold">Verified</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Live Support</h4>
                <p className="text-sm text-slate-500">Instant chat with our agents for urgent queries.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Help Center</h4>
                <p className="text-sm text-slate-500">Access our comprehensive FAQ and guides.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-semibold text-slate-700">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-semibold text-slate-700">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-slate-700">Business Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold text-slate-700">Subject</Label>
                  <Input id="subject" placeholder="Shipment Inquiry" required className="h-12 rounded-xl bg-slate-50 border-slate-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold text-slate-700">Your Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" required className="min-h-[150px] rounded-xl bg-slate-50 border-slate-200" />
                </div>

                <Button type="submit" className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl group shadow-lg shadow-orange-500/20">
                  Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;