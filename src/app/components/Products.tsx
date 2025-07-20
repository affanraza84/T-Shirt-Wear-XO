import React from "react";

const ProductsPage = () => {
  const CustomTees = [
    {
      title: "Custom T-Shirts",
      description:
        "Unite your group with custom t-shirts perfect for events, team-building and more",
      image: "/images/tee1.webp",
    },
    {
      title: "Custom Polo Shirts",
      description:
        "Elevate your company image with custom polo shirts-professional and stylish",
      image: "/images/tee2.webp",
    },
    {
      title: "Custom Hoodies",
      description:
        "Stay cozy and united with custom hoodies,designed for your group, team or event",
      image: "/images/tee3.webp",
    },
    {
      title: "Tailormade Custom T-Shirts",
      description:
        "Create a perfect match for your brand with tailormade t-shirts-customized in every detail",
      image: "/images/tee4.webp",
    },
    {
      title: "Buy Just 1(DTF Printing)",
      description:
        "Make a statement with just one t-shirt-custom printed to perfection",
      image: "/images/tee5.webp",
    },
    {
      title: "Embroidered Corporate Shirts",
      description:
        "Unite your team with custom corporate embroidered shirts-professional and personalized",
      image: "/images/tee6.webp",
    },
    {
      title: "Custom Dry-fit T-Shirts",
      description:
        "Push your performance to the limit with custom dry-fit t-shirts-designed for athletes",
      image: "/images/tee7.webp",
    },
    {
      title: "Custom Kid's T-Shirts",
      description:
        "Let your little ones stand out with custom printed kids t-shirts-made just for them",
      image: "/images/tee8.webp",
    },
    {
      title: "Custom Caps",
      description:
        "Top your look with custom tailored caps-design your perfect fit and color combination",
      image: "/images/tee9.webp",
    },
  ];

  return (
    <section className="px-6 sm:px-10 py-12 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-700 mb-12 font-roboto">
          Custom T-Shirts for Your Team
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {CustomTees.map((tee, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full pt-[100%] bg-gray-100">
                <img
                  src={tee.image}
                  alt={tee.title}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>

              <div className="relative px-6 py-5 bg-white group-hover:bg-orange-400 transition-colors duration-300">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-white mb-1 transition-colors duration-300">
                  {tee.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors duration-300">
                  {tee.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
