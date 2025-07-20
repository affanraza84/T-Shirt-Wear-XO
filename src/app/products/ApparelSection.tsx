"use client";

import React from "react";

const apparelData = [
  {
    heading: "Screen Printed Apparel",
    content: `Screen printed apparel with your own text/logo or design is perfect for your group, event, team or company. We offer internationally approved non-PVC screen prints which are retail quality, long lasting screen prints. We offer quantity based pricing, so the more number of custom apparel you order, the cheaper the cost gets. We offer custom T-Shirts, custom baby onesies, kids t-shirts, aprons, hoodies, hoodies with zipper, performance wear and several other products which can be screen printed. Before processing your apparel for screen printing, digital mock ups are provided for approval.`,
  },
  {
    heading: "Embroidered Apparel",
    content: `Custom embroidered apparel is a classy and long lasting solution for company uniform. Embroidered apparel with your logo makes team stand out and look smart at the same time. We do machine embroidery and all designs are first approved by you before production is undertaken. We provide custom embroidery on T-Shirts, Polos/collared T-Shirts, hoodies, hoodies with zipper, aprons, performance wear, corporate shirts and several other products.`,
  },
  {
    heading: "Direct to Garment(DTG) Printed Apparel",
    content: `Personalized apparel with your photo or unique design are becoming extremely popular. At iLogo, we provide the latest technology in printing, Direct to Garment printing. This allows high quality prints of even just 1. Designs with even gradients can be printed to created personalized T-Shirts, collared t-shirts, hoodies, hoodies with zipper, aprons and many more products.`,
  },
  {
    heading: "Sublimation Printed Apparel",
    content: `Sublimation printed apparel is ideal for all-over printing and vibrant colors. These prints are long lasting, do not fade easily, and allow for high-detail artwork. Perfect for sportswear, event uniforms, and fashion apparel.`,
  },
];

const ApparelSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-white text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
        Custom Apparel
      </h1>

      <div className="space-y-10">
        {apparelData.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {item.heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApparelSection;
