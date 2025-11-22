import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#FF29A3] pt-4 lg:py-4 shadow-lg border-b-2 border-white' 
          : 'bg-transparent py-6'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">

            <motion.div 
            className="flex items-center justify-start lg:w-full"
            variants={itemVariants}
            // whileHover={{ scale: 1.05 }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/logo.png`} 
              alt='DEVOTED' 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-20 w-20' : 'h-32 w-32'
              }`}
            />
          </motion.div>
          {/* Left Navigation */}
          <motion.nav 
            className={`hidden lg:flex items-center w-full justify-end ${isScrolled ? 'space-x-8' : 'space-x-4'}`}
            variants={containerVariants}
          >
            {[ 'Hard Pack Gelato', 'Sorbet', 'Soft Serve', 'Açaí', 'Ingredients', 'About Us' ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-white' : 'text-white bg-[#FF29A3] hover:bg-black px-3 py-1.5 rounded-full'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                {isScrolled && (
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? 'bg-[#c8d34a]' : 'bg-[#FF29A3]'
                }`} />
                )}
              </motion.a>
            ))}
          </motion.nav>

          {/* Centered Logo */}
        

          {/* Right Navigation */}
          {/* <motion.div 
            className="hidden lg:flex items-center space-x-8 w-full justify-center"
            variants={containerVariants}
          >
            {['About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? 'bg-[#FF29A3]' : 'bg-[#c8d34a]'
                }`} />
              </motion.a>
            ))}
          </motion.div> */}

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden text-2xl p-2 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-xl border-2 border-black"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="py-6 space-y-4">
            {[ 'Hard Pack Gelato', 'Sorbet', 'Soft Serve', 'Açaí', 'Ingredients', 'About Us' ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-black font-medium py-3 px-6 hover:bg-black hover:text-white transition-all duration-300 text-center"
                whileHover={{ x: 5 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;