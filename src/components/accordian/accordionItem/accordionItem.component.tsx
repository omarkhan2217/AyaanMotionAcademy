import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './accordionItem.module.scss';

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  data: AccordionItemData;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={classes.AccordionItem}>
      <motion.header
        onClick={toggleOpen}
        initial={false}
        animate={{ rotate: isOpen ? 0 : 0 }}
        className={classes.accordionHeader}
      >
        <span>{data.question}</span>
        <motion.span
          className={classes.icon}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {/* Replace with your icon. Here I'm using a simple text as an example */}
          {isOpen ? "-" : "+"}
        </motion.span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            {data.answer}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
