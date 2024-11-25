import { ibm } from "@/constant/fontFamily";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";

const roles = [
  "Front-End Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Next.js Developer",
];

const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(role.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <div className="flex flex-col justify-start items-start">
      <div className="space-y-2">
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
        <h1 className={`text-3xl md:text-6xl text-white pl-4`}>
          Hey <br />
          {"I'm"} <span className="text-brand1">Meraj</span>, <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-brand1"
          >
            {currentText}
            <span className="text-brand1">|</span> {/* Blinking cursor */}
          </motion.span>
        </h1>
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
      </div>
      <div className="mt-8 space-y-2">
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
        <p className={`text-base pl-4 text-white`}>
          I help business grow by crafting amazing web experiences. If you’re <br />
          looking for a developer that likes to get stuff done,
        </p>
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
      </div>
      <div className="flex items-center gap-6 mt-4">
        <h1 className={`text-3xl text-brand1 pl-4 ${ibm.className}`}>{"Let's"} Talk</h1>
        <MdOutlineEmail className="text-2xl text-brand1 " />
      </div>
    </div>
  );
};

export default HeroContent;




// import { ibm } from "@/constant/fontFamily";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdOutlineEmail } from "react-icons/md";

// const roles = [
//   "Front-End Developer",
//   "Backend Developer",
//   "Full Stack Developer",
//   "MERN Developer",
//   "Next.js Developer",
// ];

// const HeroContent = () => {
//   const [roleIndex, setRoleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col justify-start items-start">
//       <div className="space-y-2">
//         <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
//         <h1 className={`text-3xl md:text-6xl text-white pl-4`}>
//           Hey <br />
//           {"I'm"} <span className="text-brand1">Meraj</span>, <br />
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={roles[roleIndex]}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className=""
//             >
//               {roles[roleIndex]}
//             </motion.span>
//           </AnimatePresence>
//         </h1>
//         <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
//       </div>
//       <div className="mt-8 space-y-2">
//         <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
//         <p className={`text-base pl-4 text-white`}>
//           I help business grow by crafting amazing web experiences. If you’re <br />
//           looking for a developer that likes to get stuff done,
//         </p>
//         <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
//       </div>
//       <div className="flex items-center gap-6 mt-4">
//         <h1 className={`text-3xl text-brand1 pl-4 ${ibm.className}`}>{"Let's"} Talk</h1>
//         <MdOutlineEmail className="text-2xl text-brand1 " />
//       </div>
//     </div>
//   );
// };

// export default HeroContent;
