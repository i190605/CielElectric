import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, MapPin, Calendar, Zap } from 'lucide-react'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Project data - Easy to copy and modify for new projects
  const projects = [
    {
      id: 1,
      title: "Large Scale Solar Farm Installation",
      location: "Islamabad, Pakistan",
      capacity: "500 kW",
      year: "2024",
      description: "A comprehensive solar farm installation providing clean energy to multiple commercial facilities. This project demonstrates our capability in large-scale renewable energy solutions.",
      image: project1,
      category: "Commercial"
    },
    {
      id: 2,
      title: "Government Building Solar System",
      location: "Rawalpindi, Pakistan", 
      capacity: "200 kW",
      year: "2023",
      description: "Solar panel installation on government building rooftop, reducing operational costs and promoting sustainable energy practices in public sector.",
      image: project2,
      category: "Government"
    },
    {
      id: 3,
      title: "Commercial Rooftop Installation",
      location: "Lahore, Pakistan",
      capacity: "150 kW", 
      year: "2024",
      description: "Modern commercial building equipped with high-efficiency solar panels, significantly reducing electricity costs and carbon footprint.",
      image: project3,
      category: "Commercial"
    },
    {
      id: 4,
      title: "Residential Solar Solutions",
      location: "Karachi, Pakistan",
      capacity: "25 kW",
      year: "2023", 
      description: "Premium residential solar installation providing clean energy for modern homes. Features advanced monitoring and battery backup systems.",
      image: project4,
      category: "Residential"
    },
    {
      id: 5,
      title: "Industrial Solar Complex",
      location: "Faisalabad, Pakistan",
      capacity: "300 kW",
      year: "2024",
      description: "Large-scale industrial solar installation designed to meet high energy demands while maintaining cost efficiency and environmental sustainability.",
      image: project5,
      category: "Industrial"
    }
  ]

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful solar installations across Pakistan. 
              From residential homes to large commercial complexes, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Project Card */}
          <div className="relative mb-12">
            <Card className="overflow-hidden shadow-2xl bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentProject.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Zap className="h-5 w-5 mr-3 text-yellow-600" />
                      <span>{currentProject.capacity} System Capacity</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-green-600" />
                      <span>Completed in {currentProject.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    {currentProject.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Project {currentIndex + 1} of {projects.length}
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={prevProject}
                        className="p-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={nextProject}
                        className="p-2"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-600 shadow-lg' 
                    : 'hover:scale-105'
                }`}
                onClick={() => goToProject(index)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {project.capacity}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied customers who have made the switch to clean, 
            renewable energy. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* 
        EASY COPY-PASTE TEMPLATE FOR NEW PROJECTS:
        
        To add a new project, copy this object and add it to the projects array above:
        
        {
          id: 6, // Increment the ID
          title: "Your Project Title",
          location: "City, Pakistan",
          capacity: "XXX kW",
          year: "2024",
          description: "Your project description here...",
          image: projectX, // Import your image at the top: import projectX from '../../assets/projectX.jpg'
          category: "Residential/Commercial/Industrial/Government"
        }
        
        Then add the image import at the top of the file:
        import projectX from '../../assets/projectX.jpg'
      */}
    </div>
  )
}

export default Projects

