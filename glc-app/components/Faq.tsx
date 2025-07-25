'use client'
import styles from './Faq.module.css';
import { useState } from 'react';
interface FaqProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
}
const Faq = ({ title, content, children, }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq px-12 py-4 mb-4 rounded-3xl transition-all duration-500 ${isOpen ? 'bg-white' : ''}`} >
      <div className={styles.faq__title} onClick={() => { setIsOpen(!isOpen) }}>
        <h3 className="text-2xl md:text-3xl mb-4">{title}</h3>
      </div>
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } ${styles.faq__content}`} >
        <p className="text-lg">{content}{children}</p>
        
      </div>

    </div >
  );
}
export default Faq;