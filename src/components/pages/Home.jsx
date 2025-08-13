import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Sun,
  Zap,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              YOUR STEP TO A{" "}
              <span className="text-yellow-400">SUSTAINABLE FUTURE!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Headquartered in Islamabad, CIEL Electric provides cutting-edge
              platform solutions supported by personal customer care and the
              most extensive warranty in the sector.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-transform transform hover:scale-105"
              >
                <Link to="/quotation">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-transform transform hover:scale-105"
              >
                <Link to="/contact">Book an Appointment</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to CIEL Electric
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At CIEL Electric, we believe in creating a sustainable future
              through innovative solar energy solutions. From residential to
              commercial projects, our team is committed to delivering
              excellence at every step of the journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3">
                <Link to="/company-profile">Company Profile</Link>
              </Button>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3">
                <Link to="/projects">Our Projects</Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-3"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="src\assets\img.png"
              alt="CIEL Electric Introduction"
              className="shadow-lg w-full object-cover border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Panels for Your Business
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solar solutions tailored to your needs
            </p>
          </motion.div>

          {/* Responsive grid: 1 on small, 2 on medium, 3 on large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Customized Solar Solutions",
                desc: "Our team of experts will design a system tailored to your specific energy needs, ensuring maximum efficiency and cost savings.",
              },
              {
                icon: Zap,
                title: "Solar Panel Maintenance",
                desc: "We provide regular check-ups and cleaning to ensure your panels are operating at peak performance year-round.",
              },
              {
                icon: Shield,
                title: "Battery Backup Systems",
                desc: "Keep the lights on during outages with our reliable battery storage solutions, designed to work seamlessly with your solar setup.",
              },
              {
                icon: Users,
                title: "Solar Panel Financing",
                desc: "We offer flexible payment plans that make switching to solar affordable for everyone.",
              },
              {
                icon: Sun,
                title: "Case Studies",
                desc: "See real-world examples of how our systems have helped businesses and homeowners reduce energy costs.",
              },
              {
                icon: Users,
                title: "Frequently Asked Questions",
                desc: "Get clear answers to the most common questions about switching to solar energy.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 animate-bounce">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-blue-100">
              Ready to start your solar journey? Get in touch with our experts
              today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+92 51 8480204", "+92 337 3332667"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info@cielelectric.com"],
              },
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["8, Street 31, F-7/1, Islamabad"],
              },
            ].map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <contact.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {contact.title}
                  </h3>
                  {contact.lines.map((line, idx) => (
                    <p key={idx} className="text-blue-100 text-sm sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-transform transform hover:scale-110"
              >
                <Icon className="h-8 w-8" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
