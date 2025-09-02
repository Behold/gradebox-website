interface HowCardProps {
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const HowCard = ({ title, description, gradient, index }: HowCardProps) => {
  return (
    <div 
      className={`card absolute w-full aspect-[3/4] text-white flex justify-center items-center rounded-2xl shadow-2xl transform-gpu p-6 bg-gradient-to-br ${gradient}`}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-3 text-gray-900">{title}</h1>
        <p className="text-base text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default HowCard;
