import Logo from "../../assets/Logo.svg"
import Button from "../core/Button";

const Footer: React.FC = () => {
    return (
        <footer className=" w-full bg-zinc-900 text-white">
            <div className=" w-4/5 m-auto flex flex-col xl:flex-row item-start justify-around">
                <div className="  flex flex-col items-start justify-start">
                    <img className=" w-32 py-10 " src={Logo} alt="logo" />
                    <ul className=" flex flex-row justify-between flex-wrap">
                        <Button textFont="semibold" custom="pl-0">HOME</Button>
                        <Button textFont="semibold">COMPANY</Button>   
                        <Button textFont="semibold">BLOG</Button>
                        <Button textFont="semibold">CONTACT US</Button>
                        <Button textFont="semibold">SITEMAP</Button>
                    </ul>
                </div>
                <div className=" flex flex-row justify-start xl:items-end">
                    <Button custom="pl-0">FB</Button>
                    <Button>TW</Button>
                    <Button>LN</Button>
                    <Button>IG</Button>
                </div>
                <div className=" self-start xl:self-end ">
                    <p className=" text-xs opacity-30 py-3">&copy; musik.com, 2021</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;