import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Videography",
    "Creative Marketing",
    "Advertisements",
    "Account Management",
    "Content Creation",
    "Photography",
    "Full Service Package",
  ];

  const budgetRanges = [
    "R5,000 - R10,000",
    "R10,000 - R25,000",
    "R25,000 - R50,000",
    "R50,000 - R100,000",
    "R100,000+",
    "Let's Discuss",
  ];

  return (
    <section id="contact" className="py-20 bg-beige-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Make Your Brand Impossible to Ignore
            {/* <span className="block text-light-green">Your Brand?</span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Through intentional design and storytelling, we help your brand
            leave a mark that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="bg-sand rounded-3xl p-8 lg:p-12 text-charcoal h-full shadow-xl">
              <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>

              <div className="space-y-10">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/10 p-3 rounded-2xl">
                    <Phone className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-charcoal/70">012 345 6789</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/10 p-3 rounded-2xl">
                    <Mail className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-charcoal/70">hello@lumibranding.co.za</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/10 p-3 rounded-2xl">
                    <MapPin className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-charcoal/70">Cape Town, South Africa</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/10 p-3 rounded-2xl">
                    <Clock className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Time</h4>
                    <p className="text-charcoal/70">Mon–Sat 08:00 – 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-charcoal/10 p-3 rounded-2xl hover:bg-charcoal hover:text-offWhite transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Embed Panel */}
          <div className="lg:col-span-3 animate-slide-in-right" id="form">
            <div className="w-full h-full shadow-xl rounded-3xl overflow-hidden border border-gray-200">
              <iframe
                src="https://airtable.com/embed/appIoBoZKZQJC0l2U/pagAna9Q5JTMyTGyH/form"
                frameBorder="0"
                width="100%"
                height="733"
                className="rounded-3xl"
                style={{
                  background: "transparent",
                  border: "none",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
