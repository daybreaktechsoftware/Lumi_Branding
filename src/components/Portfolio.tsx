import { ExternalLink, Play, X } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "videography", name: "Videography" },
    { id: "marketing", name: "Marketing Campaigns" },
    { id: "content", name: "Content Creation" },
    { id: "advertising", name: "Advertisements" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Campaign",
      category: "marketing",
      type: "image",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Complete brand transformation and digital campaign for luxury fashion brand.",
      client: "Elegance Fashion",
      results: "+250% brand awareness, +180% sales increase",
    },
    {
      id: 2,
      title: "Tech Startup Video",
      category: "videography",
      type: "video",
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Cinematic brand story video showcasing innovative technology solutions.",
      client: "InnovateTech",
      results: "2M+ views, 45% conversion rate increase",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      category: "content",
      type: "image",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Comprehensive social media content strategy and execution.",
      client: "Urban Lifestyle",
      results: "+400% engagement, 50K new followers",
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      category: "advertising",
      type: "image",
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Multi-platform advertising campaign for revolutionary product launch.",
      client: "FutureTech",
      results: "R2M revenue in first month",
    },
    {
      id: 5,
      title: "Corporate Documentary",
      category: "videography",
      type: "video",
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Behind-the-scenes documentary showcasing company culture and values.",
      client: "Global Enterprises",
      results: "Featured in 15+ industry publications",
    },
    {
      id: 6,
      title: "E-commerce Campaign",
      category: "marketing",
      type: "image",
      src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Complete e-commerce marketing strategy and visual identity redesign.",
      client: "StyleHub",
      results: "+320% online sales, 85% customer retention",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Award-Winning
            <span className="block text-light-green">Creative Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our collection of transformative campaigns and creative
            projects that have helped brands achieve extraordinary results and
            industry recognition.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-light-green text-white shadow-lg"
                    : "bg-beige-1 text-gray-600 hover:bg-light-green hover:text-white shadow-md border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up bg-beige-1 border border-gray-100 hover:border-light-green/20"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {project.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-beige-1/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-light-green px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <button className="bg-light-green hover:bg-dark-green text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full bg-beige-1 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-beige-1/80 backdrop-blur-sm p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-beige-1/20 backdrop-blur-sm p-6 rounded-full border border-white/30">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="bg-light-green/10 text-light-green px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-text-dark mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-dark mb-2">
                      Client
                    </h4>
                    <p className="text-gray-600">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-2">
                      Results
                    </h4>
                    <p className="text-gray-600">{selectedProject.results}</p>
                  </div>
                </div>

                <button className="mt-8 bg-light-green hover:bg-dark-green text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
