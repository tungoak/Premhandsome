import batman from "../assets/icons/batman.png"
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();
    const handleToDetail = ()  => {
        navigate("/details")
    };

    return(
        <div className="text-cemter font-mono">
            <p className="text-2xl font-bold uppercase">About Me</p>
            <div className="flex justify-center">
              <img src={batman}
                   alt="batman"
                   className="w-[20%] my-3 bg-white rounded-full p-6"
              />
        </div>
        <p className="text-md mt-2 font-bold texe-white mx-36">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>("")
           <button className="text-xl text-[#f5f5dc] underline" onClick={handleToDetail}>NEXT</button>
        </div>
    );
}

export default LandingPage;