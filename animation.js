// ProtorenoUIAnimation.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ProtorenoUIAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Étape 1 : Page Protoreno → survol bouton
      await controls.start('hoverButton');
      // Étape 2 : Transition vers formulaire
      await controls.start('scrollForm');
      // Étape 3 : Remplissage
      await controls.start('fillForm');
      // Étape 4 : Clic Envoyer
      await controls.start('clickSubmit');
      // Étape 5 : Confetti & confirmation
      await controls.start('showConfirmation');
    }
    sequence();
  }, [controls]);

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const variants = {
    hoverButton: {
      x: [0, 100], // Simulé déplacement vers le bouton
      transition: { duration: 1, ease: 'easeInOut' }
    },
    scrollForm: {
      opacity: [0, 1],
      y: [0, -20],
      transition: { duration: 1, ease: 'easeInOut' }
    },
    fillForm: {
      scale: [1, 1.02, 1],
      transition: { duration: 1.5, ease: 'easeInOut' }
    },
    clickSubmit: {
      scale: [1, 0.95, 1],
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    showConfirmation: {
      opacity: [0, 1],
      transition: { duration: 1, ease: 'easeInOut' }
    }
  };

  return (
    <div className="relative w-full h-96 bg-gray-50 overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/4"
        initial={{ x: 0, opacity: 1 }}
        animate={controls}
        variants={variants.hoverButton}
      >
        {/* Curseur */}
        <div className="w-6 h-6 bg-blue-500 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={variants.scrollForm}
      >
        {/* Simule la page Tally */}
        <div className="p-8 space-y-4">
          <div className="h-6 bg-white rounded shadow" />
          <div className="h-6 bg-white rounded shadow w-3/4" />
          <div className="h-6 bg-white rounded shadow w-1/2" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={controls}
        variants={variants.fillForm}
      >
        {/* Champs remplis */}
      </motion.div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded shadow"
        initial={{ scale: 1 }}
        animate={controls}
        variants={variants.clickSubmit}
      >
        Envoyer
      </motion.button>

      <motion.img
        src="https://protoreno.com/capture1.png"
        alt="Confirmation"
        className="absolute inset-0 m-auto w-1/2 h-auto"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={variants.showConfirmation}
      />

      {/* Confetti simple */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{ showConfirmation: { opacity: [0, 1, 0], transition: { duration: 1 } } }}
      >
        {/* Ici, on intégrerait une librairie confetti ou un SVG animé */}
      </motion.div>
    </div>
  );
}