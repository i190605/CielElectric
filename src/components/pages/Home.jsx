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

// Reusable Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -4, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
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
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
            >
              YOUR STEP TO A{" "}
              <span className="text-yellow-400 shimmer">
                SUSTAINABLE FUTURE!
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Headquartered in Islamabad, CIEL Electric provides cutting-edge
              platform solutions supported by personal customer care and the
              most extensive warranty in the sector.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg shadow-lg"
                >
                  <Link to="/quotation">Get a Free Quote</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeUp} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg shadow-lg"
                >
                  <Link to="/contact">Book an Appointment</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              {[
                { text: "Company Profile", link: "/company-profile" },
                { text: "Our Projects", link: "/projects" },
                { text: "Contact Us", link: "/contact" },
              ].map((btn, i) => (
                <motion.div
                  key={i}
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 shadow-lg">
                    <Link to={btn.link}>{btn.text}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://i.postimg.cc/t4BvKRVK/img.png"
              alt="CIEL Electric Introduction"
              className="shadow-lg w-full object-cover border border-gray-200 rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
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

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Sun,
                title: "Customized Solar Solutions",
                desc: "Our team designs systems tailored to your energy needs for maximum efficiency.",
              },
              {
                icon: Zap,
                title: "Solar Panel Maintenance",
                desc: "Regular check-ups & cleaning ensure peak performance year-round.",
              },
              {
                icon: Shield,
                title: "Battery Backup Systems",
                desc: "Reliable battery storage keeps your lights on during outages.",
              },
              {
                icon: Users,
                title: "Solar Panel Financing",
                desc: "Flexible payment plans make switching to solar affordable.",
              },
              {
                icon: Sun,
                title: "Case Studies",
                desc: "Real-world examples of cost savings for businesses & homeowners.",
              },
              {
                icon: Users,
                title: "Frequently Asked Questions",
                desc: "Clear answers to common solar energy questions.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  scale: 1.04,
                  rotateX: 4,
                  rotateY: 4,
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <Card className="h-full flex flex-col transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
          </motion.div>
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
              Ready to start your solar journey? Get in touch today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="flex flex-col items-center">
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
            <a
              href="https://www.facebook.com/cielelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/cielelectric/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/ciel-electric/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-blue-950 text-white py-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-blue-300 text-sm"
        >
          © {new Date().getFullYear()} CIEL Electric. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default Home;
