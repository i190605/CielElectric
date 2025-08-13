import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Users, Briefcase, Award, Heart, Target, Zap } from 'lucide-react'

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of Pakistan's leading solar energy company. At Ciel Electric, we're building 
              a sustainable future together, and we want passionate individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ciel Electric?
            </h2>
            <p className="text-lg text-gray-600">
              Join a company that values innovation, sustainability, and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Mission-Driven Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Contribute to Pakistan's sustainable energy future while building a meaningful career 
                  in renewable energy solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Access to continuous learning opportunities, international training programs, 
                  and career advancement paths.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Flexible working arrangements, comprehensive benefits, and a supportive 
                  work environment that values your well-being.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Innovation Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Work with cutting-edge solar technology and be part of innovative projects 
                  that shape the energy sector.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Join a diverse team of experts who collaborate, share knowledge, and 
                  support each other's success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Attractive compensation packages, health benefits, performance bonuses, 
                  and employee development programs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                    Career Application Form
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Ready to join our team? Fill out the application form below and take the first step 
                    towards an exciting career in solar energy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Google Form Embed */}
                  <div className="w-full">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdWiifuog99Tk9SDZ_p5iQMYQ94uaE2Z0L3Od_WRxC0olT2rA/viewform?embedded=true" 
                      width="100%" 
                      height="800" 
                      frameBorder="0" 
                      marginHeight="0" 
                      marginWidth="0"
                      className="rounded-lg"
                    >
                      Loading…
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Current Openings */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Current Openings
                  </CardTitle>
                  <CardDescription>
                    We're actively hiring for these positions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Solar Installation Engineer</p>
                    <p className="text-gray-600 text-sm">Full-time • Islamabad</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Project Manager</p>
                    <p className="text-gray-600 text-sm">Full-time • Lahore</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Sales Representative</p>
                    <p className="text-gray-600 text-sm">Full-time • Karachi</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Technical Support Specialist</p>
                    <p className="text-gray-600 text-sm">Full-time • Rawalpindi</p>
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Submit Application</p>
                      <p className="text-gray-600 text-sm">Complete the form with your details and resume</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Initial Review</p>
                      <p className="text-gray-600 text-sm">HR team reviews your application within 3-5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Interview Process</p>
                      <p className="text-gray-600 text-sm">Phone/video interview followed by in-person meeting</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Welcome Aboard</p>
                      <p className="text-gray-600 text-sm">Onboarding and orientation program</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact HR */}
              <Card className="shadow-lg bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Questions About Careers?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our HR team is here to help with any questions about career opportunities at Ciel Electric.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Email:</strong> careers@cielelectric.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +92 51 123 4567 (Ext. 101)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Career?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Ciel Electric and be part of the renewable energy revolution. Together, we're building 
            a sustainable future for Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#application-form" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="mailto:careers@cielelectric.com" 
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg transition-colors"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career

