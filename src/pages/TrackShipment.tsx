import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package, MapPin, CheckCircle2, Clock, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setResult({
        id: trackingNumber.toUpperCase(),
        status: "In Transit",
        estimatedDelivery: "Oct 24, 2024",
        origin: "Singapore Hub",
        destination: "New York, USA",
        currentLocation: "Frankfurt Transit Center, Germany",
        history: [
          { status: "Package Received", location: "Singapore Hub", date: "Oct 20, 2024, 10:00 AM", completed: true },
          { status: "Sorted at Hub", location: "Singapore Hub", date: "Oct 20, 2024, 02:30 PM", completed: true },
          { status: "Departed Facility", location: "Singapore Hub", date: "Oct 21, 2024, 09:00 AM", completed: true },
          { status: "Arrived at Transit Center", location: "Frankfurt, DE", date: "Oct 22, 2024, 11:45 PM", completed: true },
          { status: "In Transit", location: "In Transit to New York", date: "Current Status", completed: false },
        ]
      });
      toast.success("Shipment found!");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Track Your Shipment</h1>
          <p className="text-slate-600 text-lg">Enter your tracking number below to see real-time updates.</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 mb-10 border border-slate-100">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <Package className="w-5 h-5" />
              </div>
              <Input
                type="text"
                placeholder="Ex: TZ-123456789"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="pl-12 h-14 text-lg border-slate-200 focus:ring-orange-500 rounded-2xl"
              />
            </div>
            <Button
              type="submit"
              disabled={isSearching}
              className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-lg font-semibold min-w-[160px]"
            >
              {isSearching ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Search className="w-6 h-6" />
                </motion.div>
              ) : (
                "Track Now"
              )}
            </Button>
          </form>
          <p className="mt-4 text-sm text-slate-400 text-center">
            Standard format: TZ followed by 9 digits
          </p>
        </div>

        <AnimatePresence mode="wait">
          {result && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Result Summary */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Truck className="w-32 h-32 text-orange-500" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2 block">Current Status</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{result.status}</h2>
                    <div className="flex items-center text-slate-600 space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Estimated Delivery: <span className="font-semibold text-slate-900">{result.estimatedDelivery}</span></span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase">Current Location</p>
                        <p className="text-sm font-medium text-slate-900">{result.currentLocation}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="text-xs text-slate-400 uppercase">From</p>
                        <p className="font-semibold">{result.origin}</p>
                      </div>
                      <ChevronRight className="text-slate-300" />
                      <div className="text-right">
                        <p className="text-xs text-slate-400 uppercase">To</p>
                        <p className="font-semibold">{result.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed History */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Shipment History</h3>
                <div className="space-y-8">
                  {result.history.map((event: any, idx: number) => (
                    <div key={idx} className="flex space-x-4 relative">
                      {idx !== result.history.length - 1 && (
                        <div className={`absolute left-[11px] top-7 bottom-[-20px] w-0.5 ${event.completed ? "bg-orange-500" : "bg-slate-200"}`}></div>
                      )}
                      <div className="relative z-10">
                        {event.completed ? (
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-4 border-orange-100">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-slate-300">
                            <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow pb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                          <div>
                            <p className={`font-bold ${event.completed ? "text-slate-900" : "text-slate-400"}`}>{event.status}</p>
                            <p className="text-sm text-slate-500">{event.location}</p>
                          </div>
                          <p className="text-xs font-medium text-slate-400 sm:text-right">{event.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrackShipment;