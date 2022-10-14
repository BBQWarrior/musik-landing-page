import Button from "../core/Button";
import SponsorsImg from "../../assets/sponsors/Logos.png";

const Sponsors: React.FC = () => {
    return(
        <div className="flex flex-col items-center justify-center w-full gap-16 m-auto mb-20">
            <h2 className=" font-bold font-montserrat text-4xl">Our Sponsors</h2>
            <img src={SponsorsImg} className=" w-1/2" alt="sponsors" />
            <Button textFont="bold" variant="rounded" padding="big" custom="bg-blue-700 text-white">Become a Sponsor</Button>
        </div>
    );
}

export default Sponsors;