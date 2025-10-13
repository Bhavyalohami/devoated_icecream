// import React from "react";
// import { motion } from "framer-motion";
// import Header from "./Components/header";
// import Footer from "./Components/footer";
// import FlavorCarousel from "./Components/flavorcarousel";

// const PageContent = () => {
//   const flavorGroups = [
//     // First carousel - 7 flavors
//     [
//       {
//         name: "Whisky Vanilla Brownie",
//         description:
//           "Kentucky bourbon-fueled vanilla —with notes of butterscotch and honey—laden with chewy brownie bits.",
//         price: "$12.00",
//         category: "Signature",
//       },
//       {
//         name: "Mint & Fudge Crunch",
//         description:
//           "Classic mint gelato loaded with chocolate chunks and luscious fudge swirls.",
//         price: "$12.00",
//         category: "Classic",
//       },
//       {
//         name: "Coffee Chocolate Chunk",
//         description:
//           "Bold cold brewed coffee studded with hunks of bittersweet chocolate chunks.",
//         price: "$12.00",
//         category: "Coffee",
//       },
//       {
//         name: "Raspberry Ripple Cookie Fudge",
//         description:
//           "Raspberry-infused vanilla with chocolate cookies and rich fudge swirls—a pink, indulgent delight.",
//         price: "$12.00",
//         category: "Fruity",
//       },
//       {
//         name: "Chocolate Peanut Butter Brownie",
//         description:
//           "Rich chocolate swirled with creamy peanut butter and chunks of vegan brownie bliss.",
//         price: "$12.00",
//         category: "Chocolate",
//       },
//       {
//         name: "Cinnamon Toast Crunch",
//         description:
//           "Warm cinnamon-spiced vanilla with crunchy vanilla cookie pieces—like your favorite cozy breakfast in a scoop.",
//         price: "$12.00",
//         category: "Seasonal",
//       },
//       {
//         name: "Cookies & Cream",
//         description:
//           "Rich vanilla cream and dark chocolate cookies. Nothing will make you happier.",
//         price: "$12.00",
//         category: "Classic",
//       },
//     ],
//     // Second carousel - 7 flavors
//     [
//       {
//         name: "Peppermint Fudge Chunk",
//         description:
//           "Bright, creamy green mint with dark chocolate chunks and decadent fudge ribbons—classic and irresistible.",
//         price: "$12.00",
//         category: "Mint",
//       },
//       {
//         name: "Coffee Affogato Caramel Swirl",
//         description:
//           "Velvety coffee cream intertwined with soft caramel ribbons— a café classic reimagined.",
//         price: "$12.00",
//         category: "Coffee",
//       },
//       {
//         name: "Chocolate, Chocolate Chunk",
//         description: "A classic and indulgent double chocolate threat.",
//         price: "$12.00",
//         category: "Chocolate",
//       },
//       {
//         name: "Cinnamon Cookie Crunch",
//         description:
//           "Velvety vanilla cream with cinnamon spice and crisp vanilla cookie chunks.",
//         price: "$12.00",
//         category: "Seasonal",
//       },
//       {
//         name: "Raspberry & Fudge Crunch",
//         description:
//           "Bright raspberry-kissed vanilla with chewy gluten-free chocolate cookies and decadent fudge ribbons.",
//         price: "$12.00",
//         category: "Fruity",
//       },
//       {
//         name: "Brownie Batter & Peanut Butter Swirl",
//         description:
//           "Lush chocolate with peanut butter ribbons and bites of fudgy brownie.",
//         price: "$12.00",
//         category: "Chocolate",
//       },
//       {
//         name: "Chocolate Caramel Cookie Crunch",
//         description:
//           "Chocolate cream with ribbons of caramel and chunks of vanilla cookies.",
//         price: "$12.00",
//         category: "Chocolate",
//       },
//     ],
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#d64972] to-pink-500">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative text-center text-white px-6 max-w-4xl">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             THE CREAM OF THE DAIRY-FREE CROP
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 leading-relaxed font-light"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             We didn't just copy ice cream—we reinvented it.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             <button className="bg-[#c8d34a] text-[#d64972] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
//               Discover Our Flavors
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold text-[#d64972] mb-8"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               Beyond Alternative
//             </motion.h2>

//             <motion.p
//               className="text-lg text-gray-700 mb-6 leading-relaxed"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               Using a proprietary plant-fiber blend perfected by our team of ice
//               cream experts, we've created a silky, creamy texture that rivals
//               real cream—without allergens, aftertaste, or compromise.
//             </motion.p>

//             <motion.p
//               className="text-xl text-[#d64972] font-semibold mb-8 italic"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               This isn't coconut, almond, soy, or oat ice cream. It's rich,
//               clean, and indulgent— Nothing else even comes close.
//             </motion.p>

//             <motion.div
//               className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#c8d34a]"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-gray-600 text-lg">
//                 "Today's ice cream lovers grew up with oat milk—and they love
//                 it. Dairy-free isn't just a diet choice anymore, it's mainstream
//                 taste. Give them the flavor, fun, and creaminess they
//                 expect—without compromise."
//               </p>
//             </motion.div>

//             {/* Allergen Notice */}
//             <motion.div
//               className="mt-12 p-6 bg-[#d64972] text-white rounded-2xl"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-sm font-semibold">
//                 *Does not contain 10 priority food allergens: milk, egg, peanut,
//                 soy, wheat, tree nut, shellfish, fish, sesame, mustard
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Flavors Section with Carousels */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold text-[#d64972] mb-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               Scoop Shop Flavors
//             </motion.h2>
//             <motion.p
//               className="text-xl text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               Discover our complete collection of handcrafted dairy-free
//               creations
//             </motion.p>
//           </div>

//           {/* First Carousel - Left to Right */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <FlavorCarousel
//               flavors={flavorGroups[0]}
//               direction="ltr"
//               title="Classic Favorites"
//             />
//           </motion.div>

//           {/* Second Carousel - Right to Left */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <FlavorCarousel
//               flavors={flavorGroups[1]}
//               direction="rtl"
//               title="Signature Creations"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Soft Serve Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <motion.h2
//                 className="text-4xl md:text-5xl font-bold text-[#d64972] mb-6"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 Professional Soft Serve
//               </motion.h2>
//               <motion.p
//                 className="text-lg text-gray-700 mb-6 leading-relaxed"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 Our Soft Serve Base scoops, swirls, and melts just like real
//                 dairy—rich, creamy, and totally craveable. Even dairy-lovers
//                 will do a double-take.
//               </motion.p>

//               <motion.div
//                 className="space-y-4 mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
//                   <span className="text-gray-700">
//                     <strong>Packed:</strong> 2 / 2.5 GAL
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
//                   <span className="text-gray-700">
//                     <strong>Perfect for:</strong> soft serve, hard-pack and
//                     milkshakes
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
//                   <span className="text-gray-700">
//                     <strong>Machine Compatible:</strong> Taylor, Stoelting,
//                     ElectroFreeze
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
//                   <span className="text-gray-700">
//                     <strong>Shelf Life:</strong> 365 days frozen; use within 14
//                     days after thawing
//                   </span>
//                 </div>
//               </motion.div>

//               {/* <motion.button 
//                 className="bg-[#c8d34a] text-[#d64972] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 Download Technical Specs
//               </motion.button> */}
//             </div>

//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gradient-to-br from-[#c8d34a] to-[#d64972] h-96 rounded-2xl transform -rotate-3"></div>
//               <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-3 shadow-xl flex items-center justify-center">
//                 <div className="text-center text-gray-500">
//                   <div className="text-6xl mb-4">🍦</div>
//                   <p className="text-lg">
//                     Vanilla, Dark Chocolate & Swirled Soft Serve
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Wholesale CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-[#d64972] to-[#c8d34a] text-white">
//         <div className="container mx-auto px-6 text-center">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Ready to Serve DEVOTED?
//           </motion.h2>
//           <motion.p
//             className="text-xl mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Why say no to more fans—and more sales? Our dairy-free lineup keeps
//             flavor first, fun intact, and profits sweet.
//           </motion.p>
//           <motion.p
//             className="text-lg mb-8 max-w-2xl mx-auto italic"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             "The new scoop generation doesn't care about 'alternatives'—they
//             just want something amazing. Give them a reason to fall in love
//             (again)."
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* <button className="bg-white text-[#d64972] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
//               Contact Wholesale
//             </button> */}
//             <a
//               href="mailto:dan@getdevoated.com"
//               className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#d64972] transition-all duration-300 transform hover:scale-105"
//             >
//               dan@getdevoated.com
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Where You Can Find Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-[#d64972] mb-4">
//               Where You Can Find Us
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Visit our scoop shops and experience the future of dairy-free ice
//               cream
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Locations Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {/* New York Location */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-[#d64972] rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-xl">📍</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                       New York Flagship
//                     </h3>
//                     <p className="text-gray-600 mb-3">
//                       123 Ice Cream Avenue
//                       <br />
//                       New York, NY 10001
//                     </p>
//                     <div className="space-y-2">
//                       <p className="flex items-center text-gray-700">
//                         <span className="w-6">📞</span>
//                         <span>(555) 123-4567</span>
//                       </p>
//                       <p className="flex items-center text-gray-700">
//                         <span className="w-6">🕒</span>
//                         <span>Mon-Sun: 12PM - 10PM</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Brooklyn Location */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-[#c8d34a] rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-[#d64972] text-xl">📍</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                       Brooklyn Artisanal
//                     </h3>
//                     <p className="text-gray-600 mb-3">
//                       456 Cream Street
//                       <br />
//                       Brooklyn, NY 11201
//                     </p>
//                     <div className="space-y-2">
//                       <p className="flex items-center text-gray-700">
//                         <span className="w-6">📞</span>
//                         <span>(555) 987-6543</span>
//                       </p>
//                       <p className="flex items-center text-gray-700">
//                         <span className="w-6">🕒</span>
//                         <span>Mon-Sun: 1PM - 11PM</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Coming Soon */}
//               <div className="bg-gradient-to-r from-[#d64972] to-[#c8d34a] rounded-2xl p-6 text-white">
//                 <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
//                 <p className="mb-4">
//                   We're expanding! New locations opening in:
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
//                     Los Angeles, CA
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
//                     Chicago, IL
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
//                     Miami, FL
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Google Maps */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
//                 <div className="h-96 md:h-[700px]">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.99870992427104!3d40.72875547138939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a99e5871f%3A0x55970483d6478c52!2s123%20Ice%20Cream%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1697234567890!5m2!1sen!2sus"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="DEVOTED Ice Cream Locations"
//                     className="rounded-2xl"
//                   ></iframe>
//                 </div>
//                 {/* <div className="p-6 bg-gray-50">
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button className="bg-[#d64972] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c8d34a] hover:text-[#d64972] transition-all duration-300">
//                 Get Directions
//               </button>
//               <button className="border-2 border-[#d64972] text-[#d64972] px-6 py-3 rounded-full font-semibold hover:bg-[#d64972] hover:text-white transition-all duration-300">
//                 View All Locations
//               </button>
//             </div>
//           </div> */}
//               </div>
//             </motion.div>
//           </div>

//           {/* Additional Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//             className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
//           >
//             <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
//               <div className="text-3xl mb-3">🚚</div>
//               <h4 className="text-lg font-bold text-gray-800 mb-2">
//                 Delivery Available
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Get DEVOTED delivered straight to your door
//               </p>
//             </div>
//             <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
//               <div className="text-3xl mb-3">🎉</div>
//               <h4 className="text-lg font-bold text-gray-800 mb-2">
//                 Events & Catering
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Book us for your next event or celebration
//               </p>
//             </div>
//             <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
//               <div className="text-3xl mb-3">🏢</div>
//               <h4 className="text-lg font-bold text-gray-800 mb-2">
//                 Wholesale Inquiries
//               </h4>
//               <p className="text-gray-600 text-sm">
//                 Want to carry DEVOTED in your store?
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final Mission Statement */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <motion.p
//             className="text-2xl md:text-3xl font-bold text-[#c8d34a]"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Never with dairy, gluten, artificial flavors or seed oils.
//           </motion.p>
//         </div>
//       </section>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Header />
//       <PageContent />
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from "react";
import { motion } from "framer-motion";
import Header from "./Components/header";
import Footer from "./Components/footer";
import FlavorCarousel from "./Components/flavorcarousel";

const PageContent = () => {
  const flavorGroups = [
    // First carousel - 7 flavors
    [
      {
        name: "Whisky Vanilla Brownie",
        description:
          "Kentucky bourbon-fueled vanilla —with notes of butterscotch and honey—laden with chewy brownie bits.",
        price: "$12.00",
        category: "Signature",
        image: "/images/whisky-vanilla.jpg"
      },
      {
        name: "Mint & Fudge Crunch",
        description:
          "Classic mint gelato loaded with chocolate chunks and luscious fudge swirls.",
        price: "$12.00",
        category: "Classic",
        image: "/images/mint-fudge.jpg"
      },
      {
        name: "Coffee Chocolate Chunk",
        description:
          "Bold cold brewed coffee studded with hunks of bittersweet chocolate chunks.",
        price: "$12.00",
        category: "Coffee",
        image: "/images/coffee-chocolate.jpg"
      },
      {
        name: "Raspberry Ripple Cookie Fudge",
        description:
          "Raspberry-infused vanilla with chocolate cookies and rich fudge swirls—a pink, indulgent delight.",
        price: "$12.00",
        category: "Fruity",
        image: "/images/raspberry-ripple.jpg"
      },
      {
        name: "Chocolate Peanut Butter Brownie",
        description:
          "Rich chocolate swirled with creamy peanut butter and chunks of vegan brownie bliss.",
        price: "$12.00",
        category: "Chocolate",
        image: "/images/chocolate-pb.jpg"
      },
      {
        name: "Cinnamon Toast Crunch",
        description:
          "Warm cinnamon-spiced vanilla with crunchy vanilla cookie pieces—like your favorite cozy breakfast in a scoop.",
        price: "$12.00",
        category: "Seasonal",
        image: "/images/cinnamon-toast.jpg"
      },
      {
        name: "Cookies & Cream",
        description:
          "Rich vanilla cream and dark chocolate cookies. Nothing will make you happier.",
        price: "$12.00",
        category: "Classic",
        image: "/images/cookies-cream.jpg"
      },
    ],
    // Second carousel - 7 flavors
    [
      {
        name: "Peppermint Fudge Chunk",
        description:
          "Bright, creamy green mint with dark chocolate chunks and decadent fudge ribbons—classic and irresistible.",
        price: "$12.00",
        category: "Mint",
        image: "/images/peppermint-fudge.jpg"
      },
      {
        name: "Coffee Affogato Caramel Swirl",
        description:
          "Velvety coffee cream intertwined with soft caramel ribbons— a café classic reimagined.",
        price: "$12.00",
        category: "Coffee",
        image: "/images/coffee-affogato.jpg"
      },
      {
        name: "Chocolate, Chocolate Chunk",
        description: "A classic and indulgent double chocolate threat.",
        price: "$12.00",
        category: "Chocolate",
        image: "/images/double-chocolate.jpg"
      },
      {
        name: "Cinnamon Cookie Crunch",
        description:
          "Velvety vanilla cream with cinnamon spice and crisp vanilla cookie chunks.",
        price: "$12.00",
        category: "Seasonal",
        image: "/images/cinnamon-cookie.jpg"
      },
      {
        name: "Raspberry & Fudge Crunch",
        description:
          "Bright raspberry-kissed vanilla with chewy gluten-free chocolate cookies and decadent fudge ribbons.",
        price: "$12.00",
        category: "Fruity",
        image: "/images/raspberry-fudge.jpg"
      },
      {
        name: "Brownie Batter & Peanut Butter Swirl",
        description:
          "Lush chocolate with peanut butter ribbons and bites of fudgy brownie.",
        price: "$12.00",
        category: "Chocolate",
        image: "/images/brownie-batter.jpg"
      },
      {
        name: "Chocolate Caramel Cookie Crunch",
        description:
          "Chocolate cream with ribbons of caramel and chunks of vanilla cookies.",
        price: "$12.00",
        category: "Chocolate",
        image: "/images/caramel-cookie.jpg"
      },
    ],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            THE CREAM OF THE DAIRY-FREE CROP
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We didn't just copy ice cream—we reinvented it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
              Discover Our Flavors
            </button>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Beyond Alternative
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Using a proprietary plant-fiber blend perfected by our team of ice
              cream experts, we've created a silky, creamy texture that rivals
              real cream—without allergens, aftertaste, or compromise.
            </motion.p>

            <motion.p
              className="text-xl text-[#d64972] font-semibold mb-8 italic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              This isn't coconut, almond, soy, or oat ice cream. It's rich,
              clean, and indulgent— Nothing else even comes close.
            </motion.p>

            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#c8d34a]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg">
                "Today's ice cream lovers grew up with oat milk—and they love
                it. Dairy-free isn't just a diet choice anymore, it's mainstream
                taste. Give them the flavor, fun, and creaminess they
                expect—without compromise."
              </p>
            </motion.div>

            {/* Allergen Notice */}
            <motion.div
              className="mt-12 p-6 bg-black text-white rounded-2xl border-2 border-[#d64972]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold">
                *Does not contain 10 priority food allergens: milk, egg, peanut,
                soy, wheat, tree nut, shellfish, fish, sesame, mustard
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors Section with Carousels */}
      <section id="flavors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Scoop Shop Flavors
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our complete collection of handcrafted dairy-free
              creations
            </motion.p>
          </div>

          {/* First Carousel - Left to Right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <FlavorCarousel
              flavors={flavorGroups[0]}
              direction="ltr"
              title="Classic Favorites"
            />
          </motion.div>

          {/* Second Carousel - Right to Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FlavorCarousel
              flavors={flavorGroups[1]}
              direction="rtl"
              title="Signature Creations"
            />
          </motion.div>
        </div>
      </section>

      {/* Soft Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Professional Soft Serve
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Soft Serve Base scoops, swirls, and melts just like real
                dairy—rich, creamy, and totally craveable. Even dairy-lovers
                will do a double-take.
              </motion.p>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Packed:</strong> 2 / 2.5 GAL
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Perfect for:</strong> soft serve, hard-pack and
                    milkshakes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Machine Compatible:</strong> Taylor, Stoelting,
                    ElectroFreeze
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Shelf Life:</strong> 365 days frozen; use within 14
                    days after thawing
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-black to-gray-800 h-96 rounded-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8d34a] to-[#d64972] rounded-2xl transform rotate-3 shadow-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🍦</div>
                  <p className="text-lg font-semibold">
                    Vanilla, Dark Chocolate & Swirled Soft Serve
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wholesale CTA Section */}
      <section  className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Serve DEVOTED?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why say no to more fans—and more sales? Our dairy-free lineup keeps
            flavor first, fun intact, and profits sweet.
          </motion.p>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto italic text-[#c8d34a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "The new scoop generation doesn't care about 'alternatives'—they
            just want something amazing. Give them a reason to fall in love
            (again)."
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:dan@getdevoated.com"
              className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
            >
              dan@getdevoated.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Where You Can Find Us Section */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Where You Can Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our scoop shops and experience the future of dairy-free ice
              cream
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Locations Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* New York Location */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-black">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#d64972]">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      New York Flagship
                    </h3>
                    <p className="text-gray-600 mb-3">
                      123 Ice Cream Avenue
                      <br />
                      New York, NY 10001
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <span className="w-6">📞</span>
                        <span>(555) 123-4567</span>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="w-6">🕒</span>
                        <span>Mon-Sun: 12PM - 10PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brooklyn Location */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-black">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#c8d34a]">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Brooklyn Artisanal
                    </h3>
                    <p className="text-gray-600 mb-3">
                      456 Cream Street
                      <br />
                      Brooklyn, NY 11201
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <span className="w-6">📞</span>
                        <span>(555) 987-6543</span>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="w-6">🕒</span>
                        <span>Mon-Sun: 1PM - 11PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 text-white border-2 border-[#d64972]">
                <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
                <p className="mb-4 text-gray-200">
                  We're expanding! New locations opening in:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c8d34a] rounded-full mr-3"></span>
                    Los Angeles, CA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c8d34a] rounded-full mr-3"></span>
                    Chicago, IL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#c8d34a] rounded-full mr-3"></span>
                    Miami, FL
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-black">
                <div className="h-96 md:h-[700px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.99870992427104!3d40.72875547138939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a99e5871f%3A0x55970483d6478c52!2s123%20Ice%20Cream%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1697234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DEVOTED Ice Cream Locations"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-black">
              <div className="text-3xl mb-3">🚚</div>
              <h4 className="text-lg font-bold text-black mb-2">
                Delivery Available
              </h4>
              <p className="text-gray-600 text-sm">
                Get DEVOTED delivered straight to your door
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-black">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="text-lg font-bold text-black mb-2">
                Events & Catering
              </h4>
              <p className="text-gray-600 text-sm">
                Book us for your next event or celebration
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-black">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="text-lg font-bold text-black mb-2">
                Wholesale Inquiries
              </h4>
              <p className="text-gray-600 text-sm">
                Want to carry DEVOTED in your store?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Mission Statement */}
      <section className="py-16 bg-black text-white border-t-4 border-[#c8d34a]">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-[#c8d34a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Never with dairy, gluten, artificial flavors or seed oils.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;