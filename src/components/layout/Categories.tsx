import Data from '../../assets/categoriesData.json';
import CategoryCard from '../core/CategoryCard';

const Categories: React.FC = () => {
  return (
    <div className=" m-auto w-full mt-32 mb-10 overflow-x-hidden">
      <h2 className=" m-auto w-2/3 font-bold text-3xl text-black text-shadow-title">
        <span className="text-blue-700">Explore</span> By Category
      </h2>
      <div className="flex flex-row max-w-full gap-5 mt-12 overflow-x-scroll scrollbar-none">
        {Data.map((item) => {
          console.log(item);
          return (
            <div className={``} key={item.id} /*onClick={() => handleOnClick(item.id)}*/>
              <CategoryCard
                id={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                rounded={item.id === Data.length-1 ? 'rounded-r-none' : item.id === 0 ? 'rounded-l-none' : ''}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
