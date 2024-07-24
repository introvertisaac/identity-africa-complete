import { FaMobileAlt, FaUniversity, FaShoppingCart, FaLeaf } from 'react-icons/fa';

const Card = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Icon className="text--[#E76C21] text-4xl mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <button className="mt-4 text--[#E76C21] text-xl">+</button>
  </div>
);

export default Card;
