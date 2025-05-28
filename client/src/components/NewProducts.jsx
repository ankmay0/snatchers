import React from "react";
import ProductCard from "../UI/ProductCard";

const NewProducts = () => {
  const products = [
    {
      id: 1,
      image: "/product-1.jpg",
      title: "Romantic Red Roses Bouquet",
      price: "$29.99",
      rating: 5,
    },
    {
      id: 2,
      image: "/product-2.jpg",
      title: "Scented Candle Set",
      price: "$19.99",
      rating: 4,
    },
    {
      id: 3,
      image: "/product-3.jpg",
      title: "Luxury Chocolate Box",
      price: "$24.99",
      rating: 4,
    },
    {
      id: 4,
      image: "/product-4.jpg",
      title: "Elegant Wine Glass Set",
      price: "$39.99",
      rating: 4,
    },
  ];

  const handleAddToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  const handleQuickView = (product) => {
    alert(`Quick view for "${product.title}"`);
  };

  const handleWishlist = (product) => {
    alert(`Added "${product.title}" to wishlist!`);
  };

  const handleCompare = (product) => {
    alert(`Added "${product.title}" to compare!`);
  };

  return (
    <div className="date-night-products mt-5 max-w-7xl mx-auto px-6 py-10">
      <h1
        className="text-6xl mb-0 text-center text-gray-800 font-medium"
        style={{ fontFamily: "'Italiana', serif" }}
      >
        Just Arrived
      </h1>

      <p className="text-center  text-gray-500 italic mb-10">
        Discover Our Latest Additions.
      </p>

      {/* <div className="flex justify-center mb-10">
        <img
            src="./title-line.png"
            alt="Decorative underline"
            className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
        />
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
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
      </div>
    </div>
  );
};

export default NewProducts;
