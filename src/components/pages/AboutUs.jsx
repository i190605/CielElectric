import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Building, Users, Target, Eye, Cog } from 'lucide-react'
import khalidImage from '../../assets/khalid_masood_ceo.jpeg'

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
              Learn about our mission, vision, and commitment to sustainable energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Empowering our people with sustainable and cost-effective energy solutions
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Ciel, our people are the center of the business, we provide cost-effective, sustainable, 
                  and innovative energy solutions within this vast market. Together we can grow and build a 
                  better community with the help of our employees and customers to have better and inexpensive 
                  energy solutions and make their lives easier.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Cog className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We take a personalized approach to every project we take on. Our process starts with a 
                  thorough assessment of your energy needs and ends with a fully customized solar installation 
                  that meets your unique requirements.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="bg-white shadow-xl">
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
                    CIEL Electric provides cutting-edge platform solutions that are supported by personal 
                    customer care and the most extensive warranty in the sector. Our service will enable 
                    businesses to flourish and homes to adopt solar, and it is your gateway to sustainable energy.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Management Profile Section */}
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
            <Card className="bg-white shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* CEO Image */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src={khalidImage} 
                      alt="Khalid Masood - CEO of Ciel Electric" 
                      className="w-64 h-64 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Khalid Masood</h3>
                    <p className="text-lg text-blue-600 font-semibold">Chief Executive Officer</p>
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
                      <h2 className="text-2xl font-bold text-gray-900">About the CEO</h2>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Khalid Masood, the CEO of Ciel Electric, brings over <strong>30 years of experience</strong> in 
                      Pakistan's power sector, combining a deep understanding of energy systems with a commitment 
                      to sustainable energy solutions. His extensive career in the field has earned him a reputation 
                      as one of the foremost experts in energy management, regulatory frameworks, and tariff structuring.
                    </p>

                    <p className="leading-relaxed">
                      Before founding Ciel Electric, Khalid's leadership at <strong>Islamabad Electric Supply Company (IESCO)</strong> 
                      was pivotal in shaping Pakistan's energy landscape. He played a critical role in tariff design 
                      and submissions to the National Electric Power Regulatory Authority (NEPRA), as well as in 
                      managing cost-of-service studies that were essential in optimizing electricity pricing across the region.
                    </p>

                    <p className="leading-relaxed">
                      Khalid's extensive experience is further enriched by his work with global energy experts and 
                      technologies. His international exposure—including training in the <strong>United States, United Kingdom, 
                      Netherlands, Norway, Spain, Turkey, and Singapore</strong>—has broadened his understanding of advanced 
                      metering systems, energy distribution, and solar energy integration.
                    </p>

                    <p className="leading-relaxed">
                      Under his leadership, Ciel Electric is transforming the future of energy in Pakistan. Khalid's 
                      passion for solar energy and commitment to the country's energy independence ensures that 
                      Ciel Electric remains at the forefront of providing innovative, reliable, and cost-effective 
                      solar energy solutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

