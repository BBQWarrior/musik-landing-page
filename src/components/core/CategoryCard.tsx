import { useState } from 'react'
 
type ActiveType = true | false;

interface Props {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CategoryCard: React.FC<Props> = ({
  id,
  icon,
  title,
  description
}) => {
  //const activeClass = active === true ? `text-white ${colorActive}` : `text-black ${colorBasic}`;
  const [isHovering, setIsHovering] = useState(false);

  const colors = [['bg-blue-900', 'bg-blue-100'], ['bg-pink-900', 'bg-pink-100'], ['bg-violet-900', 'bg-violet-100'], ['bg-red-900', 'bg-red-100'], ['bg-yellow-900', 'bg-yellow-100'], ['bg-green-900', 'bg-green-100'], ['bg-teal-900', 'bg-teal-100']];
  
  const color = colors[id];
  const basicClass = color[1] + ' text-black';
  const activeClass = color[0] + ' text-white';

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`w-72 h-72 shadow-md shadow-black rounded-3xl mb-8 flex flex-col justify-center items-start pt-14 pl-6 pb-10 text-black hover:text-white ${isHovering ? activeClass : basicClass}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h1 className="mb-5"> {id} </h1>
      <h3 className=" font-extrabold text-2xl mb-5"> {title} </h3>
      <p className=" font-normal text-xs"> {description}</p>
    </div>
  );
};

export default CategoryCard;
