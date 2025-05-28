import React from "react";
import ProductCard from "../UI/ProductCard";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  { id: 1, image: "/product-1.jpg", title: "Gold Necklace", price: 249.99, rating: 5, badgeText: "New", badgeClass: "bg-pink-600" },
  { id: 2, image: "/product-2.jpg", title: "Diamond Ring", price: 999.99, rating: 4, badgeText: "Best", badgeClass: "bg-yellow-600" },
  { id: 3, image: "/product-3.jpg", title: "Silver Bracelet", price: 149.99, rating: 4, badgeText: "Trending", badgeClass: "bg-purple-700" },
  { id: 4, image: "/product-4.jpg", title: "Emerald Earrings", price: 199.99, rating: 5, badgeText: "Limited", badgeClass: "bg-green-700" },
  { id: 5, image: "/product-5.jpg", title: "Pearl Pendant", price: 129.99, rating: 3 },
  { id: 6, image: "/product-6.jpg", title: "Sapphire Ring", price: 399.99, rating: 5, badgeText: "New", badgeClass: "bg-pink-600" },
  { id: 7, image: "/product-7.jpg", title: "Rose Gold Watch", price: 499.99, rating: 4 },
  { id: 8, image: "/product-8.jpg", title: "Citrine Earrings", price: 159.99, rating: 3 },
  { id: 9, image: "/product-9.jpg", title: "Amethyst Necklace", price: 199.99, rating: 4, badgeText: "Sale", badgeClass: "bg-red-600" },
  { id: 10, image: "/product-10.jpg", title: "Platinum Band", price: 1099.99, rating: 5 },
  { id: 11, image: "/product-11.jpg", title: "Turquoise Bracelet", price: 139.99, rating: 3 },
  { id: 12, image: "/product-12.jpg", title: "Opal Ring", price: 299.99, rating: 4, badgeText: "New", badgeClass: "bg-pink-600" },
  { id: 13, image: "/product-13.jpg", title: "Gold Hoop Earrings", price: 179.99, rating: 4 },
  { id: 14, image: "/product-14.jpg", title: "Diamond Studs", price: 599.99, rating: 5, badgeText: "Best", badgeClass: "bg-yellow-600" },
  { id: 15, image: "/product-15.jpg", title: "Silver Anklet", price: 89.99, rating: 3 },
  { id: 16, image: "/product-16.jpg", title: "Ruby Pendant", price: 349.99, rating: 5 },
];

const Shop = () => {
  const handleAddToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-center text-gray-800 font-medium"
                style={{ fontFamily: "'Italiana', serif" }}
            >
                Explore Our Jewelry Collection
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center text-sm sm:text-base text-gray-500 italic mb-6 sm:mb-8"
            >
                Discover a World of Styles, From Timeless Classics to Modern Trends.
            </motion.p>

            {/* Decorative Line */}
            <div className="flex justify-center items-centern lg:mb-16 sm:mb-6">
            <img
                src="./title-line.png"
                alt="Decorative underline"
                className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
            />
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              badgeText={product.badgeText}
              badgeClass={product.badgeClass}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
