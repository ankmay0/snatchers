import React, { useState } from "react";
import ProductCard from "../UI/ProductCard";
import { AnimatePresence, motion } from "framer-motion";

const DateNight = () => {
  const [activeTab, setActiveTab] = useState("Date night");

  const productData = {
    "Date night": [
      { id: 1, image: "/product-1.jpg", title: "Romantic Red Roses Bouquet", price: "$29.99", rating: 5 },
      { id: 2, image: "/product-2.jpg", title: "Scented Candle Set", price: "$19.99", rating: 4 },
      { id: 3, image: "/product-3.jpg", title: "Luxury Chocolate Box", price: "$24.99", rating: 4 },
      { id: 4, image: "/product-4.jpg", title: "Elegant Wine Glass Set", price: "$39.99", rating: 4 },
    ],
    Occasions: [
      { id: 5, image: "/product-5.jpg", title: "Festival Diyas Pack", price: "$14.99", rating: 4 },
      { id: 6, image: "/product-6.jpg", title: "Traditional Sweets Box", price: "$19.99", rating: 5 },
      { id: 7, image: "/product-7.jpg", title: "Decorative Lantern", price: "$17.99", rating: 3 },
      { id: 8, image: "/product-8.jpg", title: "Ethnic Table Runner", price: "$12.99", rating: 4 },
    ],
    Wedding: [
      { id: 9, image: "/product-9.jpg", title: "Couple Photo Frame", price: "$34.99", rating: 5 },
      { id: 10, image: "/product-10.jpg", title: "Wedding Gift Hamper", price: "$44.99", rating: 4 },
      { id: 11, image: "/product-11.jpg", title: "Gold Plated Bowl Set", price: "$54.99", rating: 4 },
      { id: 12, image: "/product-12.jpg", title: "Custom Wedding Card", price: "$9.99", rating: 3 },
    ],
    Gift: [
      { id: 13, image: "/product-13.jpg", title: "Personalized Mug", price: "$11.99", rating: 4 },
      { id: 14, image: "/product-14.jpg", title: "Gift Voucher Pack", price: "$29.99", rating: 5 },
      { id: 15, image: "/product-15.jpg", title: "Premium Pen Set", price: "$19.99", rating: 4 },
      { id: 16, image: "/product-16.jpg", title: "Custom Puzzle", price: "$15.99", rating: 3 },
    ],
  };

  const descriptions = {
    "Date night": "Curated picks to make your evening unforgettable.",
    Occasions: "Celebrate every festival with something thoughtful.",
    Wedding: "Elegant gifts to mark the beginning of forever.",
    Gift: "Handpicked surprises for every kind of love.",
  };

  const handleAddToCart = (product) => alert(`Added "${product.title}" to cart!`);
  const handleQuickView = (product) => alert(`Quick view for "${product.title}"`);
  const handleWishlist = (product) => alert(`Added "${product.title}" to wishlist!`);
  const handleCompare = (product) => alert(`Added "${product.title}" to compare!`);

  return (
<div className="date-night-products max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  {/* Title */}
  <motion.h1
    key={activeTab + "-title"}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-center text-gray-800 font-medium"
    style={{ fontFamily: "'Italiana', serif" }}
  >
    {activeTab} Specials
  </motion.h1>

  {/* Description */}
  <motion.p
    key={activeTab + "-desc"}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="text-center text-sm sm:text-base text-gray-500 italic mb-6 sm:mb-8"
  >
    {descriptions[activeTab]}
  </motion.p>

  {/* Decorative Line */}
<div className="flex justify-center items-center mb-4 sm:mb-6">
  <img
    src="./title-line.png"
    alt="Decorative underline"
    className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
  />
</div>


  {/* Tabs */}
  <div className="flex flex-wrap justify-center items-center gap-3 mb-6 px-2">
    {["Date night", "Occasions", "Wedding", "Gift"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-3 py-1 border-b-2 transition text-sm font-medium ${
          activeTab === tab
            ? "border-red-600 text-red-600"
            : "border-transparent text-gray-500 hover:text-red-600"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Products */}
  <AnimatePresence mode="wait">
    <motion.div
      key={activeTab + "-products"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      {(productData[activeTab] || []).map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating}
          onAddToCart={() => handleAddToCart(product)}
          onQuickView={() => handleQuickView(product)}
          onWishlist={() => handleWishlist(product)}
          onCompare={() => handleCompare(product)}
        />
      ))}
    </motion.div>
  </AnimatePresence>
</div>

  );
};

export default DateNight;
