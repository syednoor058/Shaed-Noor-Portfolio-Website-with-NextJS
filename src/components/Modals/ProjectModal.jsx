"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ isOpen, onClose, projectDemo }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-1100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-1200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div
              className="relative bg-zinc-900 border border-zinc-700 rounded-md shadow-2xl w-[90%] max-w-5xl aspect-9/12 md:aspect-video overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:text-red-400 transition cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Scrollable Image Container */}
              <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                <img
                  key={projectDemo?.image}
                  src={projectDemo?.image}
                  alt={projectDemo?.alt}
                  className="w-full h-auto object-cover"
                  
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
