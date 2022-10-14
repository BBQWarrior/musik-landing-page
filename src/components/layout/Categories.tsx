import Data from '../../assets/categoriesData.json';
import CategoryCard from '../core/CategoryCard';

const Categories: React.FC = () => {
    return (
        <div className=" m-auto w-full mt-32 mb-10 overflow-x-hidden">
            <h2 className=" m-auto w-2/3 font-bold text-3xl text-black text-shadow-title"><span className="text-blue-700">Explore</span> By Category</h2>
            <div className=" flex flex-row w-max flex-wrap gap-5 mt-12">
                {
                    Data.map( data =>{
                        return(
                            <div className={``} key={data.id}>
                                <CategoryCard id={data.id} icon={data.icon} title={data.title} description={data.description} colorActive={data.colorActive} colorBasic={data.colorBasic} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )   
}

export default Categories;