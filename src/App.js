// import React from "react";
// import { motion } from "framer-motion";
// import Header from "./Components/header";
// import Footer from "./Components/footer";
// import FlavorCarousel from "./Components/flavorcarousel";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// const PageContent = () => {
//     const getCategoryColor = (category) => {
//     const colors = {
//       'Signature': 'bg-[#d64972] text-white',
//       'Classic': 'bg-black text-white',
//       'Coffee': 'bg-amber-900 text-white',
//       'Fruity': 'bg-pink-600 text-white',
//       'Chocolate': 'bg-yellow-800 text-white',
//       'Seasonal': 'bg-green-800 text-white',
//       'Mint': 'bg-emerald-600 text-white'
//     };
//     return colors[category] || 'bg-gray-800 text-white';
//   };

//     const heroImages = [
//     `${process.env.PUBLIC_URL}/Images/Hero_Images/image3.jpg`,
//     `${process.env.PUBLIC_URL}/Images/Hero_Images/image1.jpg`, 
//     `${process.env.PUBLIC_URL}/Images/Hero_Images/image2.jpg`
//   ];
//   const flavorGroups = 
//     // First carousel - 7 flavors
//     [
//       {
//         name: "Vanilla Bourbon Brownie",
//         description:
//           "Kentucky bourbon-fueled vanilla —with notes of butterscotch and honey—laden with chewy brownie bits.",
//         price: "$12.00",
//         category: "Signature",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Vanilla Bourbon Brownie.png`
//       },
//       {
//         name: "Mint & Fudge Crunch",
//         description:
//           "Classic mint gelato loaded with chocolate chunks and luscious fudge swirls.",
//         price: "$12.00",
//         category: "Classic",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Fudge Crunch.png`
//       },
//       {
//         name: "Coffee Chocolate Chunk",
//         description:
//           "Bold cold brewed coffee studded with hunks of bittersweet chocolate chunks.",
//         price: "$12.00",
//         category: "Coffee",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Coffee Chocolate Chunk.png`
//       },
//       {
//         name: "Raspberry Ripple Cookie Fudge",
//         description:
//           "Raspberry-infused vanilla with chocolate cookies and rich fudge swirls—a pink, indulgent delight.",
//         price: "$12.00",
//         category: "Fruity",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/black raspberry.png`
//       },
//       {
//         name: "Chocolate Peanut Butter Brownie",
//         description:
//           "Rich chocolate swirled with creamy peanut butter and chunks of vegan brownie bliss.",
//         price: "$12.00",
//         category: "Chocolate",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate Peanut Butter Brownie.png`
//       },
//       // {
//       //   name: "Cinnamon Toast Crunch",
//       //   description:
//       //     "Warm cinnamon-spiced vanilla with crunchy vanilla cookie pieces—like your favorite cozy breakfast in a scoop.",
//       //   price: "$12.00",
//       //   category: "Seasonal",
//       //   image: "/images/cinnamon-toast.jpg"
//       // },
//       {
//         name: "Cookies & Cream",
//         description:
//           "Rich vanilla cream and dark chocolate cookies. Nothing will make you happier.",
//         price: "$12.00",
//         category: "Classic",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/cookies and cream.png`
//       },
//       {
//         name: "Mango Coconut",
//         description:
//           "Creamy coconut milk meets tangy sweet mango in this tango of flavors.",
//         price: "$12.00",
//         category: "Seasonal",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Mango Coconut.png`
//       },
//       {
//         name: "Coffee Affogato Caramel Swirl",
//         description:
//           "Velvety coffee cream intertwined with soft caramel ribbons— a café classic reimagined.",
//         price: "$12.00",
//         category: "Coffee",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Coffee Affogato Caramel Swirl.png`
//       },
//       {
//         name: "Chocolate, Chocolate Chunk",
//         description: "A classic and indulgent double chocolate threat.",
//         price: "$12.00",
//         category: "Chocolate",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate, Chocolate Chunk.png`
//       },
//       {
//         name: "Cinnamon Cookie Crunch",
//         description:
//           "Velvety vanilla cream with cinnamon spice and crisp vanilla cookie chunks.",
//         price: "$12.00",
//         category: "Seasonal",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Cinnamon Cookie Crunch.png`
//       },
//       {
//         name: "Raspberry & Fudge Crunch",
//         description:
//           "Bright raspberry-kissed vanilla with chewy gluten-free chocolate cookies and decadent fudge ribbons.",
//         price: "$12.00",
//         category: "Fruity",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Fudge Crunch.png`
//       },
//       {
//         name: "Mango Cream",
//         description:
//           "Just as it sounds. A whole mango and a glass of oat milk.",
//         price: "$12.00",
//         category: "Seasonal",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/mango cream.png`
//       },
//       {
//         name: "Chocolate Caramel Cookie Crunch",
//         description:
//           "Chocolate cream with ribbons of caramel and chunks of vanilla cookies.",
//         price: "$12.00",
//         category: "Chocolate",
//         image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate Caramel Cookie Crunch.png`
//       },
//     ];

//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       {/* Hero Section */}
//       {/* <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
//         <div className="absolute inset-0 bg-black/40"></div>
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
//             className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-gray-200"
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
//             <button className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
//               Discover Our Flavors
//             </button>
//           </motion.div>
//         </div>
//       </section> */}

//       <section className="relative h-screen flex items-center justify-center">
//         {/* Swiper Background Carousel - Images Only */}
//         <div className="absolute inset-0 z-0">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             effect="fade"
//             speed={2000}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="h-full w-full"
//           >
//             {heroImages.map((imageUrl, index) => (
//               <SwiperSlide key={index}>
//                 <div 
//                   className="w-full h-full bg-cover bg-center bg-no-repeat"
//                   style={{ 
//                     backgroundImage: `url(${imageUrl})`,
//                   }}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/50 z-10"></div>
//         </div>

//         {/* Content */}
//         <div className="relative text-center text-white px-6 max-w-4xl z-20">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             THE CREAM OF THE DAIRY-FREE CROP
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-gray-200"
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
//             <button className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
//               Discover Our Flavors
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold text-black mb-8"
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
//               className="mt-12 p-6 bg-black text-white rounded-2xl border-2 border-[#d64972]"
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
//       <section id="flavors" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold text-black mb-4"
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

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
//                           {flavorGroups.map((flavor, index) => (
//                             <motion.div
//                               key={`${index}`}
//                               className="flavor-card bg-white rounded-xl shadow-lg border-2 border-black p-4 md:p-6 h-[450px] xl:h-[500px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//                               whileHover={{ scale: 1.02 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             >
//                               {/* Image Section */}
//                               <div className="relative h-56 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                                 {/* Placeholder for actual image - replace with <img> tag when you have images */}
//                                 {/* <div className="text-4xl text-gray-500">
//                                   {flavor.category === 'Chocolate' ? '🍫' : 
//                                    flavor.category === 'Coffee' ? '☕' :
//                                    flavor.category === 'Fruity' ? '🍓' :
//                                    flavor.category === 'Mint' ? '🌿' :
//                                    flavor.category === 'Seasonal' ? '🎄' : '🍦'}
//                                 </div> */}
//                                 {/* Uncomment below when you have actual images */}
//                                 <img 
//                                   src={flavor.image} 
//                                   alt={flavor.name}
//                                   className="w-full h-full object-cober"
//                                 />
//                               </div>
            
//                               {/* Category Badge */}
//                               <div className="flex justify-between items-start mb-3">
//                                 <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(flavor.category)}`}>
//                                   {flavor.category}
//                                 </span>
//                               </div>
            
//                               {/* Flavor Name */}
//                               <h4 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-tight">
//                                 {flavor.name}
//                               </h4>
            
//                               {/* Description */}
//                               <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-3 md:mb-4">
//                                 {flavor.description}
//                               </p>
            
//                               {/* Price */}
//                               {/* <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-300">
//                                 <span className="text-base md:text-lg font-bold text-[#d64972]">
//                                   {flavor.price}
//                                 </span>
//                               </div> */}
//                             </motion.div>
// //                             <motion.div
// //   key={`${index}`}
// //   className="flavor-card relative bg-white rounded-xl shadow-lg border-2 border-black overflow-hidden transition-all duration-300 group h-64"
// //   whileHover={{ scale: 1.02 }}
// //   transition={{ type: "spring", stiffness: 300 }}
// // >
// //   {/* Image Section */}
// //   <div className="relative h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
// //     <div className="text-4xl text-gray-500 transition-all duration-300 group-hover:opacity-0">
// //       {flavor.category === 'Chocolate' ? '🍫' : 
// //        flavor.category === 'Coffee' ? '☕' :
// //        flavor.category === 'Fruity' ? '🍓' :
// //        flavor.category === 'Mint' ? '🌿' :
// //        flavor.category === 'Seasonal' ? '🎄' : '🍦'}
// //     </div>
// //   </div>

// //   {/* Gradient Overlay */}
// //   <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#d64972]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6">
// //     <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(flavor.category)} mb-3`}>
// //       {flavor.category}
// //     </span>
// //     <h4 className="text-xl font-bold text-white text-center mb-3">{flavor.name}</h4>
// //     <p className="text-gray-200 text-sm text-center line-clamp-3">{flavor.description}</p>
// //   </div>
// // </motion.div>
//                           ))}
//           </div>

//           {/* First Carousel - Left to Right */}
//           {/* <motion.div
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
//           </motion.div> */}

//           {/* Second Carousel - Right to Left */}
//           {/* <motion.div
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
//           </motion.div> */}
//         </div>
//       </section>

//       {/* Soft Serve Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <motion.h2
//                 className="text-4xl md:text-5xl font-bold text-black mb-6"
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
//             </div>

//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gradient-to-br from-black to-gray-800 h-96 rounded-2xl transform -rotate-3"></div>
//               <div className="absolute inset-0 bg-gradient-to-br from-[#c8d34a] to-[#d64972] rounded-2xl transform rotate-3 shadow-xl flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <div className="text-6xl mb-4">🍦</div>
//                   <p className="text-lg font-semibold">
//                     Vanilla, Dark Chocolate & Swirled Soft Serve
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Wholesale CTA Section */}
//       <section  className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
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
//             className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Why say no to more fans—and more sales? Our dairy-free lineup keeps
//             flavor first, fun intact, and profits sweet.
//           </motion.p>
//           <motion.p
//             className="text-lg mb-8 max-w-2xl mx-auto italic text-[#c8d34a]"
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
//             <a
//               href="mailto:dan@getdevoated.com"
//               className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d64972] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
//             >
//               dan@getdevoated.com
//             </a>
//           </motion.div>
//         </div>
//       </section>

  

//       {/* Final Mission Statement */}
//       <section className="py-16 bg-black text-white border-t-4 border-[#c8d34a]">
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const PageContent = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Signature': 'bg-[#d64972] text-white',
      'Classic': 'bg-black text-white',
      'Coffee': 'bg-amber-900 text-white',
      'Fruity': 'bg-pink-600 text-white',
      'Chocolate': 'bg-yellow-800 text-white',
      'Seasonal': 'bg-green-800 text-white',
      'Mint': 'bg-emerald-600 text-white',
      'Sorbet': 'bg-purple-600 text-white'
    };
    return colors[category] || 'bg-gray-800 text-white';
  };

  const heroImages = [
    `${process.env.PUBLIC_URL}/Images/Hero_Images/image3.jpg`,
    `${process.env.PUBLIC_URL}/Images/Hero_Images/image1.jpg`, 
    `${process.env.PUBLIC_URL}/Images/Hero_Images/image2.jpg`
  ];

  const flavorGroups = [
    {
      name: "Vanilla Bourbon Brownie",
      description: "Kentucky bourbon-fueled vanilla —with notes of butterscotch and honey—laden with chewy brownie bits.",
      price: "$12.00",
      category: "Signature",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Vanilla Bourbon Brownie.png`
    },
    {
      name: "Mint & Fudge Crunch",
      description: "Classic mint gelato loaded with chocolate chunks and luscious fudge swirls.",
      price: "$12.00",
      category: "Classic",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Fudge Crunch.png`
    },
    {
      name: "Coffee Chocolate Chunk",
      description: "Bold cold brewed coffee studded with hunks of bittersweet chocolate chunks.",
      price: "$12.00",
      category: "Coffee",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Coffee Chocolate Chunk.png`
    },
    {
      name: "Raspberry Ripple Cookie Fudge",
      description: "Raspberry-infused vanilla with chocolate cookies and rich fudge swirls—a pink, indulgent delight.",
      price: "$12.00",
      category: "Fruity",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/black raspberry.png`
    },
    {
      name: "Chocolate Peanut Butter Brownie",
      description: "Rich chocolate swirled with creamy peanut butter and chunks of vegan brownie bliss.",
      price: "$12.00",
      category: "Chocolate",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate Peanut Butter Brownie.png`
    },
    {
      name: "Cookies & Cream",
      description: "Rich vanilla cream and dark chocolate cookies. Nothing will make you happier.",
      price: "$12.00",
      category: "Classic",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/cookies and cream.png`
    },
    {
      name: "Mango Coconut",
      description: "Creamy coconut milk meets tangy sweet mango in this tango of flavors.",
      price: "$12.00",
      category: "Seasonal",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Mango Coconut.png`
    },
    {
      name: "Coffee Affogato Caramel Swirl",
      description: "Velvety coffee cream intertwined with soft caramel ribbons— a café classic reimagined.",
      price: "$12.00",
      category: "Coffee",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Coffee Affogato Caramel Swirl.png`
    },
    {
      name: "Chocolate, Chocolate Chunk",
      description: "A classic and indulgent double chocolate threat.",
      price: "$12.00",
      category: "Chocolate",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate, Chocolate Chunk.png`
    },
    {
      name: "Cinnamon Cookie Crunch",
      description: "Velvety vanilla cream with cinnamon spice and crisp vanilla cookie chunks.",
      price: "$12.00",
      category: "Seasonal",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Cinnamon Cookie Crunch.png`
    },
    {
      name: "Raspberry & Fudge Crunch",
      description: "Bright raspberry-kissed vanilla with chewy gluten-free chocolate cookies and decadent fudge ribbons.",
      price: "$12.00",
      category: "Fruity",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Fudge Crunch.png`
    },
    {
      name: "Mango Cream",
      description: "Just as it sounds. A whole mango and a glass of oat milk.",
      price: "$12.00",
      category: "Seasonal",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/mango cream.png`
    },
    {
      name: "Chocolate Caramel Cookie Crunch",
      description: "Chocolate cream with ribbons of caramel and chunks of vanilla cookies.",
      price: "$12.00",
      category: "Chocolate",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/Chocolate Caramel Cookie Crunch.png`
    },
  ];

  const sorbetFlavors = [
    {
      name: "Punchy Lemon",
      description: "Bright lemon with a zesty kick that awakens the palate.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Golden Mango",
      description: "Juicy mango with a smooth, tropical sweetness.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Creamy Coconut",
      description: "Ultra rich coconut with a creamy texture.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Juicy Peach",
      description: "Ripe peach with soft, velvety sweetness.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Berry Fusion",
      description: "A far-out mix of strawberries, blueberries, and raspberries - tart and sweet.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Raspberry",
      description: "Bold raspberry with a tangy, vibrant flavor.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Strawberry",
      description: "Juicy strawberry with fresh, naturally sweet notes.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Pineapple",
      description: "Pineapple with tangy, tropical brightness.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Orange",
      description: "Vibrant orange with a zesty, refreshing taste.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Acai",
      description: "Rich, berry-forward açaí with subtle earthy undertones.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Blood Orange",
      description: "Blood orange with bold tang and lightly floral hints.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    },
    {
      name: "Honeydew",
      description: "Mellow honeydew with gentle sweetness and a clean finish.",
      price: "$10.00",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/dummy1.jpeg`
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {heroImages.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative text-center text-white px-6 max-w-4xl z-20">
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

      {/* Flavors Section */}
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
              Discover our complete collection of handcrafted dairy-free creations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {flavorGroups.map((flavor, index) => (
              <motion.div
                key={`flavor-${index}`}
                className="flavor-card bg-white rounded-xl shadow-lg border-2 border-black p-4 md:p-6 h-[450px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-56 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(flavor.category)}`}>
                    {flavor.category}
                  </span>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-tight">
                  {flavor.name}
                </h4>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-3 md:mb-4">
                  {flavor.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sorbets Section */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Refreshing Sorbets
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pure fruit, vibrant flavors, and refreshing sweetness in every scoop
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sorbetFlavors.map((sorbet, index) => (
              <motion.div
                key={`sorbet-${index}`}
                className="sorbet-card bg-white rounded-xl shadow-lg border-2 border-purple-500 p-4 md:p-6 h-[400px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <img 
                    src={sorbet.image} 
                    alt={sorbet.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(sorbet.category)}`}>
                    {sorbet.category}
                  </span>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-tight">
                  {sorbet.name}
                </h4>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow">
                  {sorbet.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smoothie & Bowl Base Mixes Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Smoothie & Bowl Base Mixes
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Your go-to base for smoothies, bowls, and blended treats.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                We start with the purest, most vibrant açaí we can find—harvested at peak ripeness and
                carefully blended to protect its bold color, deep berry flavor, and natural antioxidants.
                The result? A base that's silky, scoopable, and made to elevate every smoothie or bowl.
              </p>
              <p className="text-lg mb-8 leading-relaxed font-semibold">
                Unlike most açaí bases on the market, ours isn't diluted or overly sweetened—it's the
                real thing, crafted to taste like fresh fruit, not filler. When quality matters, this is where
                your creations begin.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span>Perfect for smoothie bowls and blended drinks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span>Rich in antioxidants and natural flavor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#c8d34a] rounded-full"></div>
                  <span>No artificial sweeteners or fillers</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-black to-purple-900 h-96 rounded-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8d34a] to-purple-600 rounded-2xl transform rotate-3 shadow-xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🥣</div>
                  <p className="text-lg font-semibold">
                    Açaí Base Mixes for Smoothies & Bowls
                  </p>
                  <p className="text-sm mt-4 opacity-90">
                    Pure fruit, perfect texture, endless possibilities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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


          </div>
        </div>
      </section>

      {/* Business Math Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The New Math of Dessert
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#c8d34a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The dairy-free crowd isn't niche anymore—it's your roommate, your best friend, your next customer.
              They want real scoops, not sad substitutions.
            </p>
            
            <div className="text-3xl md:text-4xl font-bold text-[#d64972] mb-6">
              Devoted² = More fans + More sales – Dairy
            </div>
            
            <p className="text-2xl text-[#c8d34a] font-bold italic">
              Now that's the kind of math we like.
            </p>
            
            <p className="text-lg text-gray-600 mt-8">
              We make dairy-free ice cream that ends dessert FOMO for good. Never with dairy,
              gluten, artificial flavors or seed oils.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wholesale CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
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
            just want something amazing. Give them a reason to fall in love (again)."
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