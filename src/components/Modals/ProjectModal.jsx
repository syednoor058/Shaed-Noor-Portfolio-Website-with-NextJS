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
              className="relative bg-zinc-900 border border-zinc-700 rounded-sm shadow-2xl w-[95%] max-w-6xl aspect-9/14 md:aspect-[16/8] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full bg-neutral-900 flex flex-row gap-5 items-center justify-between px-4 py-2 ">
                <div className="text-white capitalize text-sm md:text-base">
                  {projectDemo.title}
                </div>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="text-white hover:text-red-400 transition cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {projectDemo.url ? (
                // Show iframe if URL exists
                <iframe
                  key={projectDemo.url}
                  src={projectDemo.url}
                  title={projectDemo.title || "Project Preview"}
                  className="w-full h-full border-0"
                  allow="fullscreen"
                  loading="lazy"
                ></iframe>
              ) : (
                // Show image if image is available
                <div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                  <img
                    key={projectDemo?.image}
                    src={projectDemo?.image}
                    alt={projectDemo?.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
