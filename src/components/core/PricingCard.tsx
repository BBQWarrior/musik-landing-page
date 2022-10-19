import Button from "./Button";

interface Props{
    id: number;
    title: string;
    price: string;
    seatNr: number;
    accessWifi: boolean;
    accessFoodWater: boolean;
}

const PricingCard: React.FC<Props> = ({
    id,
    title,
    price,
    seatNr,
    accessWifi,
    accessFoodWater,
}) => {
    const colors = [["border-black-700", "text-black-700"], ["border-blue-700", "text-blue-700"], ["border-red-700", "text-red-700"]];
    const color = colors[id];
    const colorBorderClass = color[0];
    const colorTextClass = color[1];
    
    const accessWifiClass = accessWifi === true  ? "" : "opacity-50" ;
    const accessFoodWaterClass = accessFoodWater === true ? "" : "opacity-50";
    const seatNrText = seatNr === 1 ? " Seat Available" : " Seats Availavle";

    return(
        <div className={` w-fit px-20 py-6 flex flex-col gap-4 items-center justify-around shadow-lg shadow-black rounded-3xl border-t-4  ${colorBorderClass}`} >
            <h3 className={` font-extrabold text-2xl ${colorTextClass}`}>{title}</h3>
            <h4 className={` font-bold text-6xl ${colorTextClass}`}>${price}</h4>
            <p className=" font-normal">{seatNr}{seatNrText}</p>
            <p className={` font-normal text-base ${accessWifiClass}`}>Access to Wifi Router</p>
            <p className={` font-normal text-base ${accessFoodWaterClass}`}>Free food & coffee</p>
            <Button textFont="bold" variant="rounded" padding="big" custom="border-blue-700 border bg-white text-blue-700 hover:bg-blue-700 hover:text-white">Get Tickets</Button>
        </div>
    );
}

export default PricingCard