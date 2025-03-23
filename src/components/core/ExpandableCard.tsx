import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface ExpandableCardProps {
  image: string;
  title: string;
  description: string;
}

export const ExpandableCard = ({
  image,
  title,
  description,
}: ExpandableCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpacity, setModalOpacity] = useState(0);
  
  const handleExpand = () => {
    setExpanded(!expanded);
    setModalOpacity(expanded ? 0 : 1);
  };

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "auto";
  }, [expanded]);

  return (
    <div>
      <div className="col-span-2 space-y-2">
        <img
          src={image}
          alt={title}
          height={386}
          width={600}
          onClick={handleExpand}
          className="hover:scale-105 transition-all 
                    duration-300 cursor-zoom-in w-full 
                    object-center object-cover min-h-52 
                    h-auto rounded-2xl border border-zinc-200"
        />
        <h3 className="font-medium text-lg text-black">{title}</h3>
        <p className="text-zinc-600 text-lg">{description}</p>
      </div>

      {expanded && (
        <div
          className={`min-h-screen max-w-screen bg-black/85 backdrop-blur-sm 
            flex flex-col justify-center items-center space-y-5 fixed top-0 
            left-0 right-0 z-50 transition-opacity duration-300 ease-in-out ${
            modalOpacity === 1 ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleExpand}
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5, scaleY: 0.2 }}
            animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
            className="flex flex-col justify-center items-center px-5 md:px-0"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-w-lg rounded-2xl"
              height='386'
              width='600'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:relative md:top-4 hover:scale-105 
            transition-all duration-300 max-w-lg min-h-40 bg-white/90 rounded-2xl px-5 py-4"
          >
            <h3 className="font-medium text-lg text-black">{title}</h3>
            <p className="text-zinc-600 text-lg">{description}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};
