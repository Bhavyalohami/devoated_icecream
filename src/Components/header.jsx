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
          ? 'bg-white py-4 shadow-lg border-b border-gray-100' 
          : 'bg-transparent py-6'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-8 w-full justify-center"
            variants={containerVariants}
          >
            {[ 'Flavors', 'Locations'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? 'bg-[#d64972]' : 'bg-white'
                }`} />
              </motion.a>
            ))}
          </motion.nav>

          {/* Centered Logo */}
          <motion.div 
            className="flex items-center justify-center lg:w-full"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/logo.jpg`} 
              alt='DEVOTED' 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-12 w-12' : 'h-16 w-16'
              } rounded-lg object-cover shadow-xl`}
            />
            {/* {!isScrolled && (
              <span className="ml-3 text-white font-bold text-xl tracking-wider">
                DEVOTED
              </span>
            )} */}
          </motion.div>

          {/* Right Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8 w-full justify-center"
            variants={containerVariants}
          >
            {['About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                variants={itemVariants}
                whileHover={{ 
                  scale: item === 'Order Online' ? 1.1 : 1.05 
                }}
              >
                {item}
                {/* {item !== 'Order Online' && (
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#d64972]' : 'bg-white'
                  }`} />
                )} */}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden text-2xl p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#d64972]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-xl"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="py-6 space-y-4">
            {[ 'Flavors', 'Locations', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-800 font-medium py-3 px-6 hover:bg-[#d64972] hover:text-white transition-all duration-300 text-center"
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