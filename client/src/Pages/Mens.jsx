import React from "react";
import ProductCard from "../UI/ProductCard";
import { AnimatePresence, motion } from "framer-motion";

const products = [
	{
		id: 1,
		image: "/product-1.jpg",
		title: "Gold Necklace",
		price: 249.99,
		rating: 5,
		badgeText: "New",
		badgeClass: "bg-pink-600",
	},
	{
		id: 2,
		image: "/product-2.jpg",
		title: "Diamond Ring",
		price: 999.99,
		rating: 4,
		badgeText: "Best",
		badgeClass: "bg-yellow-600",
	},
	{
		id: 3,
		image: "/product-3.jpg",
		title: "Silver Bracelet",
		price: 149.99,
		rating: 4,
		badgeText: "Trending",
		badgeClass: "bg-purple-700",
	},
	{
		id: 4,
		image: "/product-4.jpg",
		title: "Emerald Earrings",
		price: 199.99,
		rating: 5,
		badgeText: "Limited",
		badgeClass: "bg-green-700",
	},
	{ id: 5, image: "/product-5.jpg", title: "Pearl Pendant", price: 129.99, rating: 3 },
	{
		id: 6,
		image: "/product-6.jpg",
		title: "Sapphire Ring",
		price: 399.99,
		rating: 5,
		badgeText: "New",
		badgeClass: "bg-pink-600",
	},
	{ id: 7, image: "/product-7.jpg", title: "Rose Gold Watch", price: 499.99, rating: 4 },
	{ id: 8, image: "/product-8.jpg", title: "Citrine Earrings", price: 159.99, rating: 3 },
	{
		id: 9,
		image: "/product-9.jpg",
		title: "Amethyst Necklace",
		price: 199.99,
		rating: 4,
		badgeText: "Sale",
		badgeClass: "bg-red-600",
	},
	{ id: 10, image: "/product-10.jpg", title: "Platinum Band", price: 1099.99, rating: 5 },
	{ id: 11, image: "/product-11.jpg", title: "Turquoise Bracelet", price: 139.99, rating: 3 },
	{
		id: 12,
		image: "/product-12.jpg",
		title: "Opal Ring",
		price: 299.99,
		rating: 4,
		badgeText: "New",
		badgeClass: "bg-pink-600",
	},
	{ id: 13, image: "/product-13.jpg", title: "Gold Hoop Earrings", price: 179.99, rating: 4 },
	{
		id: 14,
		image: "/product-14.jpg",
		title: "Diamond Studs",
		price: 599.99,
		rating: 5,
		badgeText: "Best",
		badgeClass: "bg-yellow-600",
	},
	{ id: 15, image: "/product-15.jpg", title: "Silver Anklet", price: 89.99, rating: 3 },
	{ id: 16, image: "/product-16.jpg", title: "Ruby Pendant", price: 349.99, rating: 5 },
];

const Mens = () => {
	const handleAddToCart = (product) => {
		alert(`Added "${product.title}" to cart!`);
	};

	return (
		<section className="py-0 bg-white">
			<div className="relative w-full">
				<img
					src="/men.jpg"
					alt="Description of my image"
					className="w-full h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] object-cover object-center shadow-md"
				/>
				<div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-center text-white font-medium drop-shadow-lg"
						style={{ fontFamily: "'Italiana', serif" }}
					>
						Shop Our Men's Collection
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="text-center text-sm sm:text-base text-gray-200 italic mb-2 sm:mb-4 drop-shadow"
					>
						Bold Designs for the Modern Man.
					</motion.p>

					{/* Decorative Line */}
					<img
						src="./title-line.png"
						alt="Decorative underline"
						className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain mb-2"
					/>
				</div>
			</div>
			<div className="container mx-auto px-4">
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
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

export default Mens;
