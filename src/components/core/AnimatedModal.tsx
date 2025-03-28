"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AnimatedModalProps {
  image: string;
  title: string;
  description: string;
}

export default function AnimatedModal({
  image,
  title,
  description,
}: AnimatedModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div className="max-w-xs flex flex-col space-y-5">
        <img
          onClick={toggleModal}
          src={image}
          alt={title}
          className="cursor-zoom-in w-full min-h-52 object-cover max-w-lg rounded-2xl hover:scale-105 transition-all duration-300"
        />
        <h3 className="font-medium text-lg text-black">{title}</h3>
        <p className="text-zinc-600 text-lg">{description}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
          >
            <motion.div
              className="rounded-lg w-full max-w-md p-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-6 right-4 text-black bg-white/90 rounded-full p-2"
                onClick={toggleModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <article className="flex flex-col space-y-5 items-center justify-center">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto max-w-lg rounded-2xl"
                  />
                  <div className="space-y-2 bg-white/90 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="mb-6">{description}</p>
                  </div>
                </article>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
