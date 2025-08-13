import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calculator, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

const GetQuotation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get a Free Solar Quotation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to make the switch to solar energy? Fill out our quick form below and our experts 
              will provide you with a customized quotation tailored to your energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calculator className="h-6 w-6 mr-3 text-blue-600" />
                    Solar Quotation Request Form
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Please provide your details and energy requirements for an accurate quotation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Google Form Embed */}
                  <div className="w-full">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLScYKXjnbm1IpBToF0JP-FleKjU99_WjDL7faNU3hKTPjetizw/viewform?embedded=true" 
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
              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Need Help?
                  </CardTitle>
                  <CardDescription>
                    Our solar experts are ready to assist you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-gray-600">+92 51 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">info@cielelectric.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Visit Us</p>
                      <p className="text-gray-600">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Form Review</p>
                      <p className="text-gray-600 text-sm">We review your requirements within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Site Assessment</p>
                      <p className="text-gray-600 text-sm">Our experts visit your location for evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Custom Quotation</p>
                      <p className="text-gray-600 text-sm">Receive detailed pricing and system design</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="shadow-lg bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Why Choose Ciel Electric?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">Free consultation and quotation</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">30+ years of industry experience</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">Comprehensive warranty coverage</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">Professional installation team</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">Ongoing maintenance support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-3xl font-bold">Quick Response Guarantee</h2>
          </div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We understand that time is valuable. Our team commits to responding to all quotation 
            requests within 24 hours during business days.
          </p>
        </div>
      </section>
    </div>
  )
}

export default GetQuotation

