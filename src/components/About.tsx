import {
  Award,
  BadgeCheck,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Zap, number: "50+", label: "Campaigns Launched" },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "40+", label: "Brands Collaborated With" },
    { icon: TrendingUp, number: "100%", label: "Average ROI Increase" },
  ];

  const values = [
    {
      icon: Lightbulb, // Symbolizes creativity, ideas, meaning
      title: "We Create with Meaning",
      description:
        "Every product we design has purpose — it's not just good-looking, it tells your story.",
    },
    {
      icon: BadgeCheck, // Represents verified quality, trust, and excellence
      title: "Quality You Can Feel",
      description:
        "From premium materials to flawless execution, quality is our signature.",
    },
    {
      icon: Sparkles, // Captures the idea of something memorable and magical
      title: "Your Brand, Made Unforgettable",
      description:
        "We turn everyday items into unforgettable brand experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-beige-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-dark-green to-light-green rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Creative Team"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <Zap className="h-10 w-10 text-light-green" />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="animate-slide-in-right">
            <div className="mb-6">
              <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                About Lumi Branding
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
              ✦ Bold & <span className="text-light-green">Confident</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Based in South Africa, we specialize in crafting custom-branded
                corporate gifts, apparel, and stationery that are as
                professional as they are memorable. Our mission is to empower
                businesses with unique, high-quality branded solutions that
                reflect their values and leave a lasting impression.
              </p>

              <p>
                From sleek executive pens and notebooks to stylish corporate
                wear and impactful promotional gifts, we blend creativity,
                precision, and functionality to deliver products that speak your
                brand’s language. Whether you're preparing for a major event,
                onboarding new staff, or elevating your everyday presence, Lumi
                Branding ensures your business stays visible — and
                unforgettable.
              </p>

              <p>
                We're passionate about helping South African brands grow through
                strategic, stand-out merchandise that drives recognition,
                loyalty, and pride. Let us help you bring your brand to life —
                one custom piece at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values shape every product we deliver and every connection
              we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-sand p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#e5dccd] hover:border-gold/30 hover:-translate-y-2 h-full">
                  <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">
                    {value.title}
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
