import React from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Sun, Zap, Shield, Users, Phone, Mail, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              YOUR STEP TO A{" "}
              <span className="text-yellow-400">SUSTAINABLE FUTURE!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Headquartered in Islamabad, CIEL Electric provides cutting-edge
              platform solutions that are supported by personal customer care
              and the most extensive warranty in the sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg"
              >
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Going Solar with Ciel Electric Solar Installations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the solar revolution with Ciel Electric Solar Installations.
              We provide high-quality solar panel installations that are
              designed to save you money while protecting the environment.
              Contact us today to schedule your consultation and start saving!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Panels for Your Business
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customized Solar Solutions */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Customized Solar Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our team of experts will design and install a solar panel
                  system that fits your business' energy needs. We work with you
                  to create a custom solution that maximizes your energy
                  savings.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Solar Panel Maintenance */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Solar Panel Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our team provides regular checkups to ensure your solar panel
                  system is running at maximum efficiency. We also offer repairs
                  if needed.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Battery Backup Systems */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Battery Backup Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  In the event of a power outage, our battery backup systems
                  will keep your business running. Never be left in the dark
                  again.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Solar Panel Financing */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Solar Panel Financing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We offer flexible financing options to make solar energy more
                  accessible to businesses. Contact us to learn about our
                  financing plans.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Case Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  See how other businesses have saved money and reduced their
                  carbon footprint with our solar panel installations. Read our
                  case studies to learn more.
                </CardDescription>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Have questions about solar panel installations for your
                  business? Check out our FAQ page for answers to common
                  questions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-blue-100">
              Ready to start your solar journey? Get in touch with our experts
              today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+92 51 123 4567</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@cielelectric.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
