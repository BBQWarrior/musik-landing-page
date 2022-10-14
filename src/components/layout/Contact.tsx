import Button from "../core/Button";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-row w-full m-auto">
            <div className=" flex flex-col bg-blue-700 w-3/4 text-white justify-center items-start pb-20 font-montserrat">
                <div className=" mx-14 mt-10 mb-20">
                    <h2 className=" font-bold text-4xl mb-4">Contact us</h2>
                    <p className=" font-thin text-2xl opacity-75">Have an inquiry? We'll be happy to assist you</p>
                </div>
                <div className=" mx-14 my-2 flex flex-row gap-2">
                    <h3>Tel</h3>
                    <p>+92 333 6527366</p>
                </div>
                <div className=" mx-14 my-2 flex flex-row gap-2">
                    <h3>Mail</h3>
                    <p>abuzer@greelogix.com</p>
                </div>
                <div className=" mx-14 my-2 flex flex-row gap-2">
                    <h3>Loc</h3>
                    <p>Plot 252, Block L Phase 2 Johar Town, Lahore, PK</p>
                </div>
            </div>
            <div className="w-full bg-neutral-300 flex flex-col justify-around items-start font-montserrat pl-32">
                <h2 className=" font-extrabold mt-20 mb-10 text-2xl">Fill in your details</h2>
                <div className="w-3/5 mb-5 border-b-2 hover:text-violet-400 border-neutral-400 border-opacity-20 hover:border-violet-400">
                    <p>Name</p>
                    <input type="text" className=" w-full bg-inherit py-1 text-black" placeholder="Your name..."/>
                </div>
                <div className="w-3/5 mb-5 hover:text-violet-400 border-b-2 border-neutral-400 border-opacity-20 hover:border-violet-400">
                    <p>Email</p>
                    <input type="email" className=" w-full bg-inherit py-1 text-black" placeholder="Your email..."/>
                </div>
                <div className="w-3/5 mb-5 hover:text-violet-400 border-b-2 border-neutral-400 border-opacity-20 hover:border-violet-400">
                    <p>Message</p>
                    <textarea className=" w-full h-32 bg-inherit py-1 text-black" placeholder="Your message..."></textarea>
                </div> 
                <Button textFont="semibold" variant="rounded" custom="bg-blue-700 text-white w-3/5 justify-center mb-10" padding="big">Submit</Button>
            </div>
        </div>
    );
}

export default Contact;