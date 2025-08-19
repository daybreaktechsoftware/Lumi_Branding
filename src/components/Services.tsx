import {
  Coffee,
  Headphones,
  Mail,
  Move,
  NotebookText,
  Package,
  Palette,
  PenTool,
  Ruler,
  Shirt,
  Tag,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "notebook",
    icon: NotebookText,
    name: "Branded Notebook",
    image:
      "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional notebooks with custom branding options",
    details:
      "Available in A5 or A4, with custom branding (debossed, printed, or embossed).",
    sizes: ["A5", "A4"],
    colors: ["Black", "Navy", "Brown", "White", "Gray"],
    brandingOptions: ["Debossed", "Printed", "Embossed"],
    placementOptions: ["Front Cover", "Back Cover", "Bottom Right", "Center"],
    price: "From R45",
  },
  {
    id: "hoodie",
    icon: Shirt,
    name: "Branded Hoodie",
    image:
      "https://images.pexels.com/photos/30095394/pexels-photo-30095394.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium quality hoodies with custom logo placement",
    details:
      "Available in sizes S–XL. Logo options: print, embroidery. Color selection available.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "White", "Red", "Green"],
    brandingOptions: ["Print", "Embroidery"],
    placementOptions: ["Front", "Back", "Sleeve", "Chest"],
    price: "From R280",
  },
  {
    id: "mug",
    icon: Coffee,
    name: "Branded Coffee Mug",
    image:
      "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ceramic mugs perfect for office branding",
    details:
      "One size. Custom logo placement (front, center, etc). Full color or single color printing.",
    sizes: ["Standard (330ml)"],
    colors: ["White", "Black", "Blue", "Red", "Green"],
    brandingOptions: ["Full Color Print", "Single Color Print"],
    placementOptions: ["Front", "Back", "Wrap Around", "Handle"],
    price: "From R65",
  },
  {
    id: "pen",
    icon: PenTool,
    name: "Branded Pen",
    image:
      "https://images.pexels.com/photos/6001378/pexels-photo-6001378.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional writing instruments with custom branding",
    details:
      "One size. Smooth finish with screen-printed or laser-engraved logos.",
    sizes: ["Standard"],
    colors: ["Black", "Blue", "Silver", "White", "Red"],
    brandingOptions: ["Screen Print", "Laser Engraving"],
    placementOptions: ["Barrel", "Clip", "Cap"],
    price: "From R25",
  },
  {
    id: "mousepad",
    icon: Ruler,
    name: "Mousepad / Gamepad",
    image:
      "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Custom-sized mousepads for office and gaming",
    details:
      "Custom size available. Please send preferred dimensions via email. Branding available.",
    sizes: ["Custom Size (Email Required)"],
    colors: ["Black", "Blue", "Gray", "White"],
    brandingOptions: ["Full Color Print", "Single Color Print"],
    placementOptions: ["Center", "Corner", "Edge", "Full Surface"],
    price: "From R45",
  },
  {
    id: "headphones",
    icon: Headphones,
    name: "Headphones",
    image:
      "https://www.dropbox.com/scl/fi/kibvozes2jo92x2gtupc5/PHOTO-2025-08-14-07-02-07.jpg?rlkey=txu57cyfp0n49txsuv52bwp7o&st=bkrexu5p&raw=1",
    description: "Branded headphones for corporate gifting",
    details:
      "Custom size available. Please send preferred dimensions via email. Branding available.",
    sizes: ["Custom Size (Email Required)"],
    colors: ["Black", "Blue", "Gray", "White"],
    brandingOptions: ["Full Color Print", "Single Color Print"],
    placementOptions: ["Center", "Corner", "Edge", "Full Surface"],
    price: "From R45",
  },
];

interface QuoteFormData {
  productId: string;
  productName: string;
  quantity: string;
  colors: string[];
  sizes: string[];
  brandingType: string;
  brandingPlacement: string;
  hasLogo: string;
  additionalNotes: string;
  contactName: string;
  contactEmail: string;
  company: string;
}

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    productId: "",
    productName: "",
    quantity: "",
    colors: [],
    sizes: [],
    brandingType: "",
    brandingPlacement: "",
    hasLogo: "",
    additionalNotes: "",
    contactName: "",
    contactEmail: "",
    company: "",
  });

  return (
    <section
      id="catalog"
      className="py-0 sm:py-20 bg-gradient-to-br bg-beige-1"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/10 text-light-green px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
              Product Catalog
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            Custom-Branded <span className="text-light-green">Merchandise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our premium collection of corporate gifting and branding
            items. All products can be fully customized to match your brand
            identity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-sand rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-beige overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-beige/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gold">
                    {product.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <product.icon className="h-6 w-6 text-gold mr-3" />
                  <h3 className="text-xl font-bold text-charcoal">
                    {product.name}
                  </h3>
                </div>

                <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-charcoal/70">
                    <Move className="h-4 w-4 mr-2 text-gold" />
                    <span>{product.sizes.length} size options</span>
                  </div>
                  <div className="flex items-center text-sm text-charcoal/70">
                    <Palette className="h-4 w-4 mr-2 text-gold" />
                    <span>{product.colors.length} color options</span>
                  </div>
                  <div className="flex items-center text-sm text-charcoal/70">
                    <Tag className="h-4 w-4 mr-2 text-gold" />
                    <span>
                      {product.brandingOptions.length} branding options
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-gold hover:bg-charcoal text-beige py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in px-4">
          <div className="relative rounded-3xl p-12 bg-sand text-charcoal overflow-hidden shadow-xl max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10">
              <Package className="h-16 w-16 mx-auto mb-6 text-gold opacity-90" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Need Something Custom?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                If your product requires custom sizing, special materials, or
                unique branding placement, get in touch and we'll create a
                tailored solution for your brand.
              </p>
              <a
                href="mailto:hello@xysbranding.co.za"
                className="inline-flex items-center bg-gold text-charcoal hover:bg-charcoal hover:text-offWhite px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="h-5 w-5 mr-2 text-charcoal" />
                Email Us Your Brief
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-beige-1 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-beige-1 border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <selectedProduct.icon className="h-6 w-6 text-light-green mr-3" />
                  <h3 className="text-2xl font-bold text-text-dark">
                    Quote Request - {selectedProduct.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-dark border-b border-gray-200 pb-2">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contactName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contactEmail: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-dark border-b border-gray-200 pb-2">
                Product Details
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Needed *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      quantity: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                  placeholder="e.g. 50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Colors *
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => handleColorToggle(color)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        formData.colors.includes(color)
                          ? "bg-light-green text-white border-light-green"
                          : "bg-beige-1 text-gray-700 border-gray-300 hover:border-light-green"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sizes Required *
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSizeToggle(size)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        formData.sizes.includes(size)
                          ? "bg-light-green text-white border-light-green"
                          : "bg-beige-1 text-gray-700 border-gray-300 hover:border-light-green"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Branding Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-dark border-b border-gray-200 pb-2">
                Branding Requirements
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branding Type *
                </label>
                <select
                  required
                  value={formData.brandingType}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      brandingType: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                >
                  <option value="">Select branding type</option>
                  {selectedProduct.brandingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branding Placement *
                </label>
                <select
                  required
                  value={formData.brandingPlacement}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      brandingPlacement: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                >
                  <option value="">Select placement</option>
                  {selectedProduct.placementOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a logo/design file? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasLogo"
                      value="yes"
                      checked={formData.hasLogo === "yes"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          hasLogo: e.target.value,
                        }))
                      }
                      className="mr-2"
                    />
                    Yes, I have a logo/design file (will send via email)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasLogo"
                      value="no"
                      checked={formData.hasLogo === "no"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          hasLogo: e.target.value,
                        }))
                      }
                      className="mr-2"
                    />
                    No, I need design assistance
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes or Special Requests
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    additionalNotes: e.target.value,
                  }))
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent"
                placeholder="Any special requirements, deadlines, or additional information..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Quote Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
