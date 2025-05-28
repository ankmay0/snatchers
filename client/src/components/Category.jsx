import React from "react";
import { motion } from "framer-motion";

const categoriesLarge = [
  { img: "/women-cat.jpg", alt: "Women Category", label: "Shop For Women", link: "#" },
  { img: "/men-cat.jpg", alt: "Men Category", label: "Shop For Men", link: "#" },
];

const categoriesSmall = [
  { img: "/jewellery-cat.jpg", alt: "Gen Z", label: "Gen Z", link: "#" },
  { img: "/women-cat2.jpg", alt: "Minimalist", label: "Minimalist", link: "#" },
  { img: "/watch-cat.jpg", alt: "Vintage", label: "Vintage", link: "#" },
  { img: "/suit-cat.jpg", alt: "Heritage", label: "Heritage", link: "#" },
];

const CategoryItem = ({ img, alt, label, link }) => (
  <div className="single-cat-item">
    <figure className="category-thumb">
      <a href={link}>
        <img src={img} alt={alt} className="w-full h-auto object-cover" />
        <figcaption className="category-name">
          <a href={link}>{label}</a>
        </figcaption>
      </a>
    </figure>
  </div>
);

export default function Category() {
  return (
    <>
      <div
        id="product-categories-area"
        className="ruby-container mt-8 mx-auto px-4 max-w-screen-xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-8xl mb-2 text-center text-gray-800 font-medium"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          Find Your Vibe
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-sm sm:text-base text-gray-500 italic mb-6 sm:mb-8"
        >
          Reflect Personal Expression and Current Trends
        </motion.p>

        {/* Decorative Line */}
        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <img
            src="./title-line.png"
            alt="Decorative underline"
            className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
          />
        </div>

        <div className="row flex flex-wrap -mx-3">
          {/* Left Large Categories */}
          <div className="col-lg-6 w-full lg:w-1/2 mt-4 px-3 mb-6 lg:mb-0">
            <div className="large-size-cate">
              <div className="row flex flex-wrap -mx-3">
                {categoriesLarge.map(({ img, alt, label, link }, i) => (
                  <div
                    key={i}
                    className={`col-sm-6 w-1/2 px-3 ${i === 0 ? "mb-4 lg:mb-0" : ""}`}
                  >
                    <CategoryItem img={img} alt={alt} label={label} link={link} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Small Categories */}
          <div className="col-lg-6 w-full lg:w-1/2 px-3">
            <div className="small-size-cate mt-0 lg:mt-0">
              <div className="row flex flex-wrap -mx-3">
                {categoriesSmall.map(({ img, alt, label, link }, i) => (
                  <div key={i} className="col-sm-6 w-1/2 px-3 mt-0">
                    <CategoryItem img={img} alt={alt} label={label} link={link} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
