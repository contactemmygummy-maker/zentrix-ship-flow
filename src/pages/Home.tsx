import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Truck, Anchor, Shield, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air transport solutions for time-sensitive cargo worldwide.",
      icon: <Plane className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/fefa4754-a264-4d92-81a9-185598b7b69b/service-air-freight-5939fd84-1779503187861.webp"
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective maritime shipping for large-scale international shipments.",
      icon: <Anchor className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/fefa4754-a264-4d92-81a9-185598b7b69b/service-ocean-freight-eefd06dd-1779503188691.webp"
    },
    {
      title: "Road Transport",
      description: "Efficient domestic and cross-border trucking services for flexible delivery.",
      icon: <Truck className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/fefa4754-a264-4d92-81a9-185598b7b69b/service-truck-delivery-05043f49-1779503188584.webp"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fefa4754-a264-4d92-81a9-185598b7b69b/hero-logistics-global-network-049925f5-1779503187964.webp"
            alt="Logistics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30">
              Global Logistics Excellence
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Your Global <span className="text-orange-500">Supply Chain</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Terra Zentrix delivers seamless logistics solutions tailored to your business needs. 
              From air to sea, we move your world forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/track">
                <Button className="w-full sm:w-auto h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-xl transition-all shadow-lg shadow-orange-500/20">
                  Track Shipment
                </Button>
              </Link>
              <Link to="/quote">
                <Button className="w-full sm:w-auto h-14 px-8 bg-white/10 hover:bg-white/20 text-white text-lg rounded-xl backdrop-blur-md border border-white/30 transition-all">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Globe className="w-10 h-10 text-orange-500" />, title: "200+ Countries", desc: "Global reach covering every continent with strategic hubs." },
              { icon: <Clock className="w-10 h-10 text-orange-500" />, title: "Real-time Tracking", desc: "Always know where your cargo is with our advanced tracking." },
              { icon: <Shield className="w-10 h-10 text-orange-500" />, title: "Secure Delivery", desc: "Comprehensive insurance and safety protocols for peace of mind." }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl">{stat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{stat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We provide comprehensive logistics and transportation solutions to ensure your goods arrive on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to="/quote"
                    className="inline-flex items-center text-orange-500 font-semibold group/link"
                  >
                    Request Quote <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Optimize Your Logistics?</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Join thousands of businesses worldwide who trust Terra Zentrix for their global shipping and supply chain management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="w-full sm:w-auto h-14 px-10 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg">
                Contact Sales
              </Button>
            </Link>
            <Link to="/about">
              <Button className="w-full sm:w-auto h-14 px-10 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white rounded-xl text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;