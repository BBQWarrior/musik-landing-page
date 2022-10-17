type ActiveType = true | false;

interface Props {
  id: number;
  icon: React.ReactNode;
  active?: ActiveType;
  title: string;
  description: string;
  colorActive: string;
  colorBasic: string;
}

const CategoryCard: React.FC<Props> = ({
  id,
  icon,
  active = true,
  title,
  description,
  colorActive,
  colorBasic,
}) => {
  const activeClass =
    active === true ? `text-white ${colorActive}` : `text-black ${colorBasic}`;

  return (
    <div
      className={`w-72 h-72 shadow-md shadow-black rounded-3xl mb-8 flex flex-col justify-center items-start pt-14 pl-6 pb-10 ${activeClass}`}
    >
      <h1 className="mb-5"> {id} </h1>
      <h3 className=" font-extrabold text-2xl mb-5"> {title} </h3>
      <p className=" font-normal text-xs"> {description}</p>
    </div>
  );
};

export default CategoryCard;
