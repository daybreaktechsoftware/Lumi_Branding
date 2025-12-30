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
  Tag,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "alex-varga-gift-set",
    icon: Package,
    name: "Alex Varga Gift Set",
    image: "/Alex Varga Gift Set PDF.jpeg",
    description:
      "Water bottle, notebook, pen set and keyholder in a branded gift box.",
    details:
      "Material: Stainless Steel, Tex-Luxe PU, Metal, Lacquered Aluminium. Capacity and sizes listed below.",
    sizes: [
      "Water Bottle - 27cm (h)",
      "Notebook - 21.2cm (l) x 14.5cm (w) x 1.8cm (h)",
      "Pen Set - 14.2cm (l)",
      "Keyholder - 5.7cm (h) x 1.7cm (dia)",
      "Gift Box - 44cm (l) x 28.5cm (w) x 9.5cm (h)",
    ],
    colors: ["Black", "White", "Silver"],
    brandingOptions: [
      "Deboss",
      "Digital Print Drinkware",
      "Laser Engraving",
      "Pad Print",
      "Screen Wrap",
    ],
    placementOptions: ["Bottle", "Notebook Cover", "Pen Barrel", "Keyholder"],
    price: "Quote",
  },
  {
    id: "alex-varga-laptop-bag",
    icon: Package,
    name: "Alex Varga Laptop Bag",
    image: "/Alex Varga Laptop Bag PDF.png",
    description: "Luxury PU laptop bag, branded options available.",
    details: "Material: Luxury PU. Size and capacity listed below.",
    sizes: ["40cm (l) x 4cm (w) x 29cm (h)"],
    colors: ["Black", "Brown", "Navy"],
    brandingOptions: ["Laser Engraving", "Pad Print"],
    placementOptions: ["Front Flap", "Back Panel"],
    price: "Quote",
  },
  {
    id: "altitude-pen",
    icon: PenTool,
    name: "Altitude Pen",
    image: "/Altitude Pen PDF.png",
    description: "Aluminium & chrome pen with custom branding.",
    details: "Ink colour: Black or Blue. Setup fees apply.",
    sizes: ["14.2cm (l)"],
    colors: ["Silver", "Black", "Chrome"],
    brandingOptions: ["Laser Engraving", "Pad Print"],
    placementOptions: ["Barrel", "Clip"],
    price: "Quote",
  },
  {
    id: "branded-mousepad",
    icon: Ruler,
    name: "Branded Mousepad",
    image: "/Branded Mouse Pad PDF.png",
    description: "PU & rubber mousepads in a selection of sizes.",
    details: "Material: PU & Rubber. Select size when requesting a quote.",
    sizes: ["Multiple sizes available"],
    colors: ["Black", "Grey", "Navy"],
    brandingOptions: ["Deboss", "Laser Engraving", "Screen Print"],
    placementOptions: ["Center", "Corner", "Full Surface"],
    price: "Quote",
  },
  {
    id: "kooshty-kork-glass-kup",
    icon: Coffee,
    name: "Kooshty Kork Glass Kup",
    image: "/Glass Cup PDF.png",
    description: "Glass cup with cork sleeve and silicone grip.",
    details:
      "Material: Glass, Cork & Silicone. Size and capacity listed below.",
    sizes: ["13.5cm (h)"],
    colors: ["Clear", "Cork Brown", "Black"],
    brandingOptions: ["Screen Print"],
    placementOptions: ["Side", "Wrap Around"],
    price: "Quote",
  },
  {
    id: "kooshty-stainless-steel-vacuum-mug",
    icon: Coffee,
    name: "Kooshty Stainless Steel Vacuum Mug",
    image: "/Kooshty Stainless Steel Vacum Mug PDF2.png",
    description: "Large capacity vacuum mug with multiple branding options.",
    details:
      "Material: Food-Grade Stainless Steel, PP & Silicone. Size and capacity listed below. Use & Care: Ensure lid is pressed in and closed when using. The mug is dishwasher safe but not the lid. Not microwave safe.",
    sizes: ["26cm (h) x 10cm (d)"],
    colors: ["Silver", "Black", "White"],
    brandingOptions: ["Laser Engraving", "Pad Print", "Screen Wrap"],
    placementOptions: ["Body", "Lid"],
    price: "Quote",
    capacity: "1.2L",
  },
  {
    id: "noise-cancelling-headphones",
    icon: Headphones,
    name: "Noise-Cancelling Bluetooth Headphones",
    image: "/Headphones PDF.png",
    description: "Over-ear Bluetooth headphones with branded case.",
    details:
      "Materials: ABS & PU (headphones), EVA (case). Case and headphone sizes listed below.",
    sizes: [
      "Headphones - 17cm (l) x 19cm (w) x 7cm (h)",
      "Case - 19cm (l) x 17.5cm (w) x 7cm (h)",
    ],
    colors: ["Black", "White", "Grey"],
    brandingOptions: ["Screen Print"],
    placementOptions: ["Ear Cup", "Headband", "Case"],
    price: "Quote",
  },
  {
    id: "sturdy-laptop-backpack",
    icon: Move,
    name: "Sturdy Laptop Backpack",
    image: "/Laptop Backpack PDF.png",
    description: "Durable 600D polyester backpack with branding options.",
    details: "Material: 600D Polyester. Size and capacity listed below.",
    sizes: ["35cm (w) x 13cm (d) x 42cm (h)"],
    colors: ["Black", "Navy", "Charcoal"],
    brandingOptions: ["Silk Screen", "Direct to Film"],
    placementOptions: ["Front Pocket", "Top Flap"],
    price: "Quote",
  },
  {
    id: "nanotech-laptop-trolley-backpack",
    icon: Move,
    name: "Nanotech Laptop Trolley Backpack",
    image: "/Nano-Tech-Trolley-Backpack-Handle PDF2.png",
    description: "Melange polyester trolley backpack with laptop compartment.",
    details: "Material: Melange Polyester, PU & Metal. Capacity listed below.",
    sizes: ["30cm (w) x 16cm (d) x 45cm (h)"],
    colors: ["Melange Grey", "Black"],
    brandingOptions: ["Laser Engraving"],
    placementOptions: ["Front Panel", "Side"],
    price: "Quote",
  },
  {
    id: "notebook-a4",
    icon: NotebookText,
    name: "Notebook A4",
    image: "/Notebook A4 PDF.png",
    description: "PU notebook in A4 size with branded cover options.",
    details: "Material: PU. A4. 100 lined pages.",
    sizes: ["20cm x 27.5cm x 1.8cm"],
    colors: ["Black", "Brown", "Navy"],
    brandingOptions: ["Screen Print", "Deboss", "Direct Digital", "CO Laser"],
    placementOptions: ["Front Cover", "Back Cover"],
    price: "Quote",
  },
  {
    id: "notebook-a5",
    icon: NotebookText,
    name: "Notebook A5",
    image: "/Notebook A5 PDF.png",
    description:
      "PU notebook in A5 with 70gsm paper and multiple branding options.",
    details: "Material: PU & 70gsm Paper. A5. 80 sheets / 160 lined pages.",
    sizes: ["14.5cm (w) x 21cm (l) x 1.5cm (d)"],
    colors: ["Black", "Navy", "Gray"],
    brandingOptions: ["Silk Screen", "Foil", "Deboss", "Full Colour Print"],
    placementOptions: ["Front Cover", "Spine"],
    price: "Quote",
  },
  {
    id: "serene-beanbag",
    icon: Package,
    name: "Serene Beanbag",
    image: "/Serene Beanbag PDF.png",
    description: "Large corduroy beanbag for relaxed brand experiences.",
    details:
      "Size: Large. Material: Corduroy. Diameter and height listed below.",
    sizes: ["Diameter: 140cm x 55cm Height"],
    colors: ["Beige", "Grey", "Navy"],
    brandingOptions: ["None"],
    placementOptions: ["None"],
    price: "Quote",
  },
  {
    id: "stainless-steel-water-bottle",
    icon: Coffee,
    name: "Stainless Steel Water Bottle",
    image: "/Stainless Steel Water Bottle PDF.png",
    description: "Stainless steel bottle with multiple branding options.",
    details: "Material: Stainless Steel & PP. Size and capacity listed below.",
    sizes: ["28cm (h)"],
    colors: ["Silver", "Black", "White"],
    brandingOptions: [
      "Digital Print Drinkware",
      "Laser Engraving",
      "Pad Print",
      "Screen Wrap",
    ],
    placementOptions: ["Body", "Lid"],
    price: "Quote",
  },
];

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Open details modal for a product
  const handleOpenQuote = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setShowQuoteModal(true);
  };

  // Close modal
  const handleCloseQuote = () => {
    setShowQuoteModal(false);
    setSelectedProduct(null);
  };

  // Determine which products to display
  const displayedProducts = showAllProducts ? products : products.slice(0, 3);

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
          {/* Mobile: Show limited products based on state */}
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="md:hidden group bg-sand rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-beige overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
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

                <div className="space-y-3">
                  <button
                    onClick={() => handleOpenQuote(product)}
                    className="w-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal py-2 px-6 rounded-xl font-medium transition-all duration-300"
                  >
                    Show Full Details
                  </button>
                  <a
                    href="#contact"
                    className="block w-full bg-gold hover:bg-charcoal text-beige py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Desktop/Tablet: Show all products */}
          {products.map((product, index) => (
            <div
              key={product.id}
              className="hidden md:block group bg-sand rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-beige overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
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

                <div className="space-y-3">
                  <button
                    onClick={() => handleOpenQuote(product)}
                    className="w-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal py-2 px-6 rounded-xl font-medium transition-all duration-300"
                  >
                    Show Full Details
                  </button>
                  <a
                    href="#contact"
                    className="block w-full bg-gold hover:bg-charcoal text-beige py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More / Show Less Button - Only visible on mobile/tablet */}
        <div className="flex justify-center mb-12 md:hidden">
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="bg-gold hover:bg-charcoal text-beige px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            {showAllProducts
              ? "Show Less"
              : `See All ${products.length} Products`}
          </button>
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

      {/* Product Details Modal */}
      {showQuoteModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-beige-1 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-beige-1 border-b border-gray-200 p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <selectedProduct.icon className="h-6 w-6 text-gold mr-3" />
                  <h3 className="text-2xl font-bold text-charcoal">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={handleCloseQuote}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl bg-white">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-charcoal mb-2">
                  Description
                </h4>
                <p className="text-charcoal/70 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Product Details */}
              <div>
                <h4 className="text-lg font-semibold text-charcoal mb-3">
                  Product Details
                </h4>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  {selectedProduct.details}
                </p>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                  Available Sizes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-sand text-charcoal rounded-lg text-sm border border-beige"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                  Available Colors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.colors.map((color) => (
                    <span
                      key={color}
                      className="px-3 py-1 bg-sand text-charcoal rounded-lg text-sm border border-beige"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Branding Options */}
              <div>
                <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                  Branding Options
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.brandingOptions.map((option) => (
                    <span
                      key={option}
                      className="px-3 py-1 bg-sand text-charcoal rounded-lg text-sm border border-beige"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placement Options */}
              <div>
                <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                  Branding Placement Options
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.placementOptions.map((placement) => (
                    <span
                      key={placement}
                      className="px-3 py-1 bg-sand text-charcoal rounded-lg text-sm border border-beige"
                    >
                      {placement}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCloseQuote}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={handleCloseQuote}
                  className="flex-1 bg-gold hover:bg-charcoal text-beige px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
