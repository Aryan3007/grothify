import { motion } from 'framer-motion';

const logos = [
  "./company/l3.jpg",
  "./company/l2.jpg",
  "./company/l1.jpg",
  "./company/l4.jpg",
  "./company/l5.jpg",
  "./company/l6.jpg",
  "./company/l16.png",
  "./company/l7.jpg",
  "./company/l8.jpg",
  "./company/l9.jpg",
  "./company/l10.jpg",
  "./company/l11.jpg",
  "./company/l12.png",
  "./company/l13.jpg",
  "./company/l14.png",
  "./company/l15.png",  
  "./company/l3.jpg",
  "./company/l2.jpg",
  "./company/l1.jpg",
  "./company/l4.jpg",
  "./company/l5.jpg",
  "./company/l6.jpg",
  "./company/l7.jpg",
  "./company/l16.png",
  "./company/l8.jpg",
  "./company/l9.jpg",
  "./company/l10.jpg",
  "./company/l11.jpg",
  "./company/l12.png",
  "./company/l13.jpg",
  "./company/l14.png",
  "./company/l15.png",
];

const Logos = () => {
  // Duplicate the logos array to ensure seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
          }
        }}
      >
        {/* Render duplicated logos */}
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 lg:m-0" style={{ width: `${400 / logos.length}%` }}>
            <div className="flex items-center justify-center h-full px-4">
              <img src={logo} alt={`Logo ${index}`} className="max-h-32" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logos;
