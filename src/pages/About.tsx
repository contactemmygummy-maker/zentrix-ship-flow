import { motion } from "framer-motion";
import { Ship, Target, Users, ShieldCheck, Globe2, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Reliability",
      desc: "We pride ourselves on 99.9% on-time delivery across our global network.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Global Network",
      desc: "Our strategic hubs in over 200 countries ensure seamless logistics flow.",
      icon: <Globe2 className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Customer First",
      desc: "Personalized service tailored to your unique business requirements.",
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Innovation",
      desc: "Leveraging cutting-edge AI and IoT to track and optimize your cargo.",
      icon: <Zap className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Mission is to <span className="text-orange-500">Move Your World</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Terra Zentrix Logistics Worldwide started with a single truck and a big dream. 
            Today, we are a global leader in supply chain management.
          </p>
        </div>
      </section>

      {/* History & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-2xl -z-10"></div>
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fefa4754-a264-4d92-81a9-185598b7b69b/about-logistics-team-warehouse-56658333-1779503188172.webp"
                alt="Our Warehouse Team"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-bold text-orange-500 mb-1">25+</p>
                <p className="text-sm font-medium uppercase tracking-widest">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Our Story</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Founded on Precision and Innovation</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Established in 1999, Terra Zentrix began with a vision to simplify the complexities of global shipping. What started as a local courier service has evolved into a sophisticated logistics network spanning every corner of the globe.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We believe that logistics is more than just moving boxes; it's about connecting cultures, enabling trade, and fueling global economic growth. Our commitment to technology and sustainability drives us to constantly innovate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-50 p-3 rounded-xl">
                    <Target className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Vision</h4>
                    <p className="text-sm text-slate-500 mt-1">To be the world's most trusted logistics partner.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Ship className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Strategy</h4>
                    <p className="text-sm text-slate-500 mt-1">Driving efficiency through smart technology.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our principles guide every decision we make and every package we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl w-fit group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;