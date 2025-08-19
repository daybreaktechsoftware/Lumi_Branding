import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Thuli Mokoena",
      position: "Marketing Director",
      company: "Woolworths South Africa",
      rating: 5,
      text: "Lumi Branding brought fresh energy to our seasonal campaigns. Their creative direction led to a 200% spike in digital engagement across platforms. A phenomenal team!",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "+200% Digital Engagement",
    },
    {
      name: "Lebo Dlamini",
      position: "Founder",
      company: "MzansiTech",
      rating: 5,
      text: "Their animated explainer video helped us close our seed round. Investors were impressed with the clarity and polish of our pitch. We couldn't have asked for a better partner.",
      image:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "R5M+ Funding Secured",
    },
    {
      name: "Johan van der Merwe",
      position: "Head of Brand",
      company: "Checkers Sixty60",
      rating: 5,
      text: "Lumi Branding helped us craft a launch video that went viral. It reached over 1.8 million South Africans in the first week and drove a record number of app downloads.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "1.8M+ Views on Launch",
    },
    {
      name: "Naledi Khumalo",
      position: "Social Media Manager",
      company: "Nando’s SA",
      rating: 5,
      text: "Their humour-driven content fits right into our brand voice. We saw a 120% increase in post engagement and earned media from major local blogs. Highly recommend!",
      image:
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "+120% Post Engagement",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-grey to-dark-green relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-light-green/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/20 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Trusted by Industry
            <span className="block text-light-green">Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about
            the transformative results we've achieved together.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-beige-1/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-16 animate-slide-up border border-white/20">
            <Quote className="h-16 w-16 text-light-green mb-8 opacity-60" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-light-green/20"
                  />
                  <div>
                    <div className="font-bold text-text-dark text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="bg-gradient-to-r from-light-green to-emerald-400 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold mb-2">
                    {testimonials[currentIndex].results}
                  </div>
                  <div className="text-sm opacity-90">Achieved Results</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-beige-1/20 backdrop-blur-sm hover:bg-beige-1/30 text-white p-3 rounded-full transition-all duration-300 border border-white/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-beige-1/20 backdrop-blur-sm hover:bg-beige-1/30 text-white p-3 rounded-full transition-all duration-300 border border-white/30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 R{
                  index === currentIndex
                    ? "bg-light-green scale-125"
                    : "bg-beige-1/30 hover:bg-beige-1/50"
                }`}
              />
            ))}
          </div>
        </div>
        {/* 
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "20+", label: "Brands Collaborated With" },
            { number: "100%", label: "Average ROI" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
