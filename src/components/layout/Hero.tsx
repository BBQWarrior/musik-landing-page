import Logo from "../../assets/Logo.svg";
import Button from "../core/Button";
import VectorDown from "../../assets/icons.svg";

const Hero: React.FC = () => {
    return (
        <div className=" flex items-center flex-col justify-between bg-hero-pattern xl:h-screen">
            <nav className=" m-auto w-full flex items-center justify-around flex-wrap xl:h-32">
                <img src={ Logo } alt="Logo" />
                <ul className=" text-white flex flex-row flex-wrap items-center gap-4 xl:gap-12">
                    <Button textFont="semibold" custom="m-auto">HOME</Button>
                    <Button textFont="semibold" custom="m-auto">SPEAKERS <img src={VectorDown} alt="icon"/></Button>   
                    <Button textFont="semibold" custom="m-auto">SCHEDULE <img src={VectorDown} alt="icon"/></Button>
                    <Button textFont="semibold" custom="m-auto">CONTACT US</Button>
                    <Button textFont="bold" variant="rounded" custom="m-auto mb-8 bg-white text-blue-700 xl:m-auto" padding="big">GET TICKETS</Button>
                </ul>
            </nav>  
            <div className=" flex flex-col w-4/5 xl:w-3/5 m-auto gap-10">
                <h1 className="  font-bold text-5xl xl:text-7xl text-center text-white leading-tight">The Best Experience Of <span className=" text-red-400">Music</span> In 2021</h1>
                <p className="  text-white text-xl xl:text-2xl text-center leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</p>
                <div>
                    <ul className=" flex items-center text-4xl text-white gap-10 justify-center">
                        <Button textFont="bold" variant="rounded" custom="bg-red-500 text-white" padding="big" >Get Started</Button>
                        <Button padding="big" custom="font-extrabold text-xl">Watch Video</Button>
                    </ul>
                </div>
                <p className=" font-montserrat items-end justify-center text-center font-bold not-italic text-6xl xl:text-8xl text-shadow-counter text-black  select-none">22d 13h 46m 18s</p>
            </div>
        </div>
    );
};

export default Hero;