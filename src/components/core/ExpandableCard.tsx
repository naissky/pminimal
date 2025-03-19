import { useState, useEffect } from "react";

interface ExpandableCardProps {
  image: string;
  title: string;
  description: string;
}

export const ExpandableCard = ({ image, title, description }: ExpandableCardProps) => {
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
          onClick={handleExpand}
          className="cursor-zoom-in w-full h-auto rounded-2xl border border-zinc-200"
        />
        <h3 className="font-medium text-lg text-black">{title}</h3>
        <p className="text-zinc-600 text-lg">{description}</p>
      </div>

      {expanded && (
        <div
          className={`min-h-screen max-w-screen bg-black/85 backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ease-in-out ${
            modalOpacity === 1 ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleExpand}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={image} alt={title} className="max-w-lg rounded-2xl" />
          </div>
          <div className="relative -left-8 -top-8 -rotate-6 hover:scale-105 transition-all duration-300 min-h-40 bg-white/90 rounded-2xl px-5 py-4">
            <h3 className="font-medium text-lg text-black">{title}</h3>
            <p className="text-zinc-600 text-lg">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};