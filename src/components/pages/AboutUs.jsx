import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Target, Eye, Cog } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Company Profile Section */}
      <section id="company-profile" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Company Profile
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, vision, and commitment to sustainable
              energy solutions
            </p>
          </div>

          {/* Group wrapper for advanced hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 group">
            {/* Card Template */}
            {[
              {
                title: "Our Mission",
                text: "Empowering our people with sustainable and cost-effective energy solutions.",
                icon: (
                  <Target className="h-8 w-8 text-blue-600 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
                ),
                bg: "bg-blue-100",
              },
              {
                title: "Our Vision",
                text: "At Ciel, our people are the center of the business. We deliver innovative, sustainable, and cost-effective energy solutions to empower communities and improve everyday life.",
                icon: (
                  <Eye className="h-8 w-8 text-yellow-600 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
                ),
                bg: "bg-yellow-100",
              },
              {
                title: "Our Process",
                text: "We start with a detailed assessment of your energy needs and end with a fully customized solar installation tailored to your requirements.",
                icon: (
                  <Cog className="h-8 w-8 text-green-600 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />
                ),
                bg: "bg-green-100",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`
                  bg-white shadow-lg border border-gray-100
                  transform transition-all duration-500
                  opacity-100 group-hover:opacity-50 hover:opacity-100
                  hover:scale-105 hover:shadow-2xl
                  relative overflow-hidden
                `}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 ${item.bg} opacity-0 hover:opacity-20 blur-3xl transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <div
                    className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 group-hover:scale-90 hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
