import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Package, MapPin, Truck, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    serviceType: "",
    email: "",
    details: ""
  });

  const handleNext = () => {
    if (step === 1 && (!formData.origin || !formData.destination)) {
      toast.error("Please fill in route details");
      return;
    }
    if (step === 2 && (!formData.weight || !formData.serviceType)) {
      toast.error("Please fill in shipment specifications");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! Our team will contact you within 2 hours.");
    setStep(4);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Request a Quote</h1>
          <p className="text-slate-600 text-lg">Get precise pricing for your logistics needs in minutes.</p>
        </div>

        {/* Progress Stepper */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                    step >= s
                      ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-white border-slate-200 text-slate-400"
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-8 h-0.5 mx-2 ${step > s ? "bg-orange-500" : "bg-slate-200"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="origin" className="text-slate-700 font-semibold flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" /> Origin City / Country
                    </Label>
                    <Input
                      id="origin"
                      placeholder="Ex: Shanghai, China"
                      className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="destination" className="text-slate-700 font-semibold flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" /> Destination City / Country
                    </Label>
                    <Input
                      id="destination"
                      placeholder="Ex: Los Angeles, USA"
                      className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleNext}
                  className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-lg font-semibold group"
                >
                  Continue to Package Info <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="weight" className="text-slate-700 font-semibold flex items-center">
                      <Calculator className="w-4 h-4 mr-2 text-orange-500" /> Total Weight (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 500"
                      className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-slate-700 font-semibold flex items-center">
                      <Truck className="w-4 h-4 mr-2 text-orange-500" /> Service Mode
                    </Label>
                    <Select
                      onValueChange={(val) => setFormData({ ...formData, serviceType: val })}
                      defaultValue={formData.serviceType}
                    >
                      <SelectTrigger className="h-12 bg-slate-50 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air">Air Freight (Fastest)</SelectItem>
                        <SelectItem value="ocean">Ocean Freight (Economical)</SelectItem>
                        <SelectItem value="road">Road Transport (Flexible)</SelectItem>
                        <SelectItem value="express">Express Courier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 h-14 rounded-2xl border-slate-200"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-[2] h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-lg font-semibold group"
                  >
                    Contact Information <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="details" className="text-slate-700 font-semibold">Additional Requirements (Optional)</Label>
                    <Textarea
                      id="details"
                      placeholder="Special handling, fragile items, temperature control..."
                      className="min-h-[120px] bg-slate-50 border-slate-200 rounded-xl"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 h-14 rounded-2xl border-slate-200"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-[2] h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-lg font-bold shadow-lg shadow-orange-500/20"
                  >
                    Request Free Quote
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                  Reference: <span className="font-mono font-bold text-slate-900">QT-{Math.floor(Math.random() * 90000) + 10000}</span>
                </p>
                <p className="text-slate-500 mb-10">
                  We've received your request. One of our logistics experts will review your details and send a formal quote to <span className="font-medium text-slate-900">{formData.email}</span> within 2 business hours.
                </p>
                <Button
                  onClick={() => setStep(1)}
                  className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-xl"
                >
                  New Quote Request
                </Button>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;