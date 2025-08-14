import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We love our customers, so feel free to visit during normal
              business hours or message us on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Speak directly with our team
                </CardDescription>
                <p className="font-semibold text-gray-900">+92 51 8480204</p>
                <p className="font-semibold text-gray-900">+92 337 3332667</p>
                <p className="text-gray-600 text-sm">Mon–Fri 9AM–6PM</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Send us your questions anytime
                </CardDescription>
                <p className="font-semibold text-gray-900">
                  info@cielelectric.com
                </p>
                <p className="text-gray-600 text-sm">24-hour response</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Our headquarters
                </CardDescription>
                <p className="font-semibold text-gray-900">
                  8, Street 31, F-7/1
                </p>
                <p className="font-semibold text-gray-900">
                  Islamabad, Pakistan
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  When we're available to help
                </CardDescription>
                <p className="font-semibold text-gray-900">Mon–Fri: 9AM–6PM</p>
                <p className="font-semibold text-gray-900">Sat: 10AM–4PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Google Map Embed */}
          <div className="mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5330790594184!2d73.0501049!3d33.713794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf0046179575%3A0xa46e90f054c2f05e!2sCiel%20Electric!5e0!3m2!1sen!2s!4v1691769098765!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Ciel Electric can help you harness the
            power of the sun and reduce your energy costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3"
              asChild
            >
              <a
                href="https://wa.me/923373332667"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3"
              asChild
            >
              <a href="tel:+92518480204">Call Now: +92 51 8480204</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/cielelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/cielelectric/?fbclid=IwY2xjawEclmZleHRuA2FlbQIxMAABHYAALitdcRXUFfAn2ZZj60-YH8XTGFaIKW-WzKIyxxwLruDnRunNlQC7Og_aem_hjHlzG0EcZFDBU0ZPxYKaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/ciel-electric/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
