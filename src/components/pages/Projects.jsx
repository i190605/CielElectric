import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Zap,
  Instagram,
} from "lucide-react";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Large Scale Solar Farm Installation",
      location: "Islamabad, Pakistan",
      capacity: "500 kW",
      year: "2024",
      description:
        "A comprehensive solar farm installation providing clean energy to multiple commercial facilities. This project demonstrates our capability in large-scale renewable energy solutions.",
      image: project1,
      category: "Commercial",
    },
    {
      id: 2,
      title: "Government Building Solar System",
      location: "Rawalpindi, Pakistan",
      capacity: "200 kW",
      year: "2023",
      description:
        "Solar panel installation on government building rooftop, reducing operational costs and promoting sustainable energy practices in public sector.",
      image: project2,
      category: "Government",
    },
    {
      id: 3,
      title: "Commercial Rooftop Installation",
      location: "Lahore, Pakistan",
      capacity: "150 kW",
      year: "2024",
      description:
        "Modern commercial building equipped with high-efficiency solar panels, significantly reducing electricity costs and carbon footprint.",
      image: project3,
      category: "Commercial",
    },
    {
      id: 4,
      title: "Residential Solar Solutions",
      location: "Karachi, Pakistan",
      capacity: "25 kW",
      year: "2023",
      description:
        "Premium residential solar installation providing clean energy for modern homes. Features advanced monitoring and battery backup systems.",
      image: project4,
      category: "Residential",
    },
    {
      id: 5,
      title: "Industrial Solar Complex",
      location: "Faisalabad, Pakistan",
      capacity: "300 kW",
      year: "2024",
      description:
        "Large-scale industrial solar installation designed to meet high energy demands while maintaining cost efficiency and environmental sustainability.",
      image: project5,
      category: "Industrial",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-12 sm:py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across
            Pakistan. From residential homes to large commercial complexes, we
            deliver excellence in every project.
          </p>
        </motion.div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Project Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-10"
          >
            <Card className="overflow-hidden shadow-2xl bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 sm:h-96 lg:h-auto">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {currentProject.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h2>

                  <div className="space-y-3 mb-6 text-sm sm:text-base">
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

                  <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                    {currentProject.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm text-gray-500">
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
          </motion.div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card
                  className={`cursor-pointer overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-blue-600 shadow-lg"
                      : ""
                  }`}
                  onClick={() => goToProject(index)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-20 sm:h-24 object-cover"
                  />
                  <div className="p-2 sm:p-3">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
                      {project.capacity}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://www.instagram.com/stories/highlights/18036438976961057/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold px-6 py-3 hover:bg-gray-200"
            >
              See Our More Projects
            </Button>
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

export default Projects;
