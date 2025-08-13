import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Users, Award, Lightbulb } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Join Our Team Section */}
      <section id="join-our-team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a forward-thinking company that’s driving innovation in
              sustainable energy solutions.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Collaborative Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Work with passionate professionals committed to making a
                  positive impact in the energy sector.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Innovative Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Get involved in groundbreaking renewable energy projects that
                  shape a sustainable future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Career Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  We invest in your growth with training, mentorship, and
                  opportunities to advance your career.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Google Form Embed */}
          <div className="w-full mb-16">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdWiifuog99Tk9SDZ_p5iQMYQ94uaE2Z0L3Od_WRxC0olT2rA/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg shadow-lg border border-gray-200"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
