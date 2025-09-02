import { useRef } from 'react';
import HowCard from './how-card';

const cardData = [
  {
    title: "Upload Assignment",
    description: "Simply upload your handwritten assignments through our intuitive interface. Our AI instantly recognizes and processes your documents.",
    gradient: "from-[#48dbfb] to-[#0abde3]"
  },
  {
    title: "AI Analysis",
    description: "Our advanced AI analyzes handwriting, identifies answers, and applies consistent grading criteria across all submissions.",
    gradient: "from-[#a55eea] to-[#8b5cf6]"
  },
  {
    title: "Instant Results",
    description: "Get immediate feedback and detailed analytics. Track student progress and identify areas for improvement in real-time.",
    gradient: "from-[#2ed573] to-[#1e90ff]"
  },
  {
    title: "Export & Share",
    description: "Export grades, generate reports, and seamlessly integrate with your existing learning management systems.",
    gradient: "from-[#ff6b6b] to-[#ee5a24]"
  }
];

interface HowCardsProps {
  cardsRef: React.RefObject<HTMLDivElement | null>;
}

const HowCards = ({ cardsRef }: HowCardsProps) => {
  return (
    <div className="container">
      <div className="cards relative min-h-[280vh] pb-32" ref={cardsRef}>
        {cardData.map((card, index) => (
          <HowCard 
            key={index}
            title={card.title}
            description={card.description}
            gradient={card.gradient}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HowCards;
