import batman from "../assets/icons/batman.png";
import deadpool from "../assets/icons/deadpool.png";
import superman from "../assets/icons/superman.png";

const Navbar = () => {
    return(
        <diV className="flex justify-between items-center">
            <img src={batman} alt="logo" width={50} className="cursor=pointer" />
            <ul className="flex">
                <li className="px-2">
                    <a href="https://www.youtube.com/watch?v=usNx1_d0HbQ" target=" blank">
                      <img src={superman} alt="superman"width={100}/>
                    </a>
                </li>
                <li className="px-2">
                 <a href="https://www.youtube.com/watch?v=usNx1_d0HbQ" target="_blank">
                  <img src={batman} alt="batman"width={100}/> 
                 </a>
                </li>
                <li className="px-2">
                  <a href="https://www.youtube.com/watch?v=usNx1_d0HbQ" target="_blank">
                    <img src={deadpool} alt="deadpool"width={100}/> 
                  </a>
                </li>
               </ul>
             </diV>
    )
}

export default Navbar