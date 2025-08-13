import React from "react";
import { Card } from "@/components/ui/card.jsx";
import { Users } from "lucide-react";
import khalidImage from "../../assets/khalid_masood_ceo.jpeg";

const ManagementProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="management-profile" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Management Profile
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our leadership team driving innovation in sustainable energy
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* CEO Image */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={khalidImage}
                      alt="Khalid Masood - CEO of Ciel Electric"
                      className="w-64 h-64 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Khalid Masood
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      Chief Executive Officer
                    </p>
                    <p className="text-gray-600">Ciel Electric</p>
                  </div>
                </div>

                {/* CEO Bio */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        About the CEO
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Khalid Masood, the CEO of Ciel Electric, brings over{" "}
                      <strong>30 years of experience</strong> in Pakistan's
                      power sector, combining a deep understanding of energy
                      systems with a commitment to sustainable energy solutions.
                    </p>
                    <p className="leading-relaxed">
                      Before founding Ciel Electric, Khalid's leadership at{" "}
                      <strong>Islamabad Electric Supply Company (IESCO)</strong>
                      was pivotal in shaping Pakistan's energy landscape,
                      especially in tariff design and submissions to the
                      National Electric Power Regulatory Authority (NEPRA).
                    </p>
                    <p className="leading-relaxed">
                      His career includes international training in the{" "}
                      <strong>
                        United States, United Kingdom, Netherlands, Norway,
                        Spain, Turkey, and Singapore
                      </strong>{" "}
                      — enhancing his expertise in advanced metering systems,
                      energy distribution, and solar integration.
                    </p>
                    <p className="leading-relaxed">
                      Under his leadership, Ciel Electric is transforming the
                      future of energy in Pakistan with innovative, reliable,
                      and cost-effective solar solutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementProfile;
