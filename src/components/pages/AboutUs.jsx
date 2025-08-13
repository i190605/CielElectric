import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Building, Target, Eye, Cog } from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Our Mission */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Empowering our people with sustainable and cost-effective
                  energy solutions.
                </p>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  At Ciel, our people are the center of the business. We deliver
                  innovative, sustainable, and cost-effective energy solutions
                  to empower communities and improve everyday life.
                </p>
              </CardContent>
            </Card>

            {/* Our Process */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  We start with a detailed assessment of your energy needs and
                  end with a fully customized solar installation tailored to
                  your requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Headquarters Card */}
          <div className="max-w-xl mx-auto">
            <Card className="bg-white shadow-xl border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Headquartered in Islamabad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600">
                  CIEL Electric provides cutting-edge platform solutions
                  supported by personal customer care and the most extensive
                  warranty in the sector. We help businesses and homes embrace
                  solar — your gateway to sustainable energy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
