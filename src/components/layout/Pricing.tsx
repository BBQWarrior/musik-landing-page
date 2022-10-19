import Data from "../../assets/pricingData.json"
import PricingCard from "../core/PricingCard";

const Pricing: React.FC = () => {
    return(
        <div className=" w-full flex flex-col gap-16 m-auto mb-20 ">
            <h2 className="  font-bold font-montserrat text-4xl m-auto">Choose a Tier that's right for you</h2>
            <div className=" flex flex-col lg:flex-row m-auto justify-center gap-5 mt-12">
                {
                    Data.map( data =>{
                        return(
                            <div key={data.id}>
                                <PricingCard id={data.id} title={data.title} price={data.price} seatNr={data.seatNr} accessWifi={data.accessWifi} accessFoodWater={data.accessFoodWater}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing;