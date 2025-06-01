import { Link } from "react-router"
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed font-bold z-1 text-center bg-gradient-to-b from-[#2E2E2E] to-[rgba(42, 123, 155, 0)] w-dvw p-8">
      <nav className="grid grid-cols-3 place-items-center max-sm:grid-cols-1 max-sm:place-items-end">
        
        <div>
          <ul className="flex">
            <li className="hover:scale-125 transition-all"><Link to={"/universo"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Universo</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/campeoes"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Campeões</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/mapa"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Mapa</Link></li>
          </ul>
        </div>
        <Link to={"/Varrain"} className="font-eleanora text-white m-4 text-4xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Varrain</Link>
        <div>
          <ul className="flex">
            <li className="hover:scale-125 transition-all"><Link to={"/galeria"} className="font-eleanora text-white m-4 text-3xl cursor-pointer max-sm:hidden">Galeria</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/timeline"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Timeline</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/regioes"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Regiões</Link></li>
          </ul>
        </div>
        
        <IoIosMenu className="h-[2.5rem] w-[2.5rem] text-white cursor-pointer md:hidden xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      </nav>

      <div className={`absolute z-1 xl:hidden md:hidden bg-[#2E2E2E] h-dvh w-dvw transform transition-transform ${isMenuOpen ? "opacity-85" : "opacity-0"}`}>
          <ul className="flex flex-col justify-center items-center gap-4 m-10">
            <li><Link to={"/Varrain"} className="font-eleanora text-white text-4xl cursor-pointer ">Varrain</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/universo"} className="font-eleanora text-white text-3xl cursor-pointer  ">Universo</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/campeoes"} className="font-eleanora text-white  text-3xl cursor-pointer  ">Campeões</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/mapa"} className="font-eleanora text-white text-3xl cursor-pointer  ">Mapa</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/galeria"} className="font-eleanora text-white  text-3xl cursor-pointer ">Galeria</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/timeline"} className="font-eleanora text-white text-3xl cursor-pointer  ">Timeline</Link></li>
            <li className="hover:scale-125 transition-all"><Link to={"/regioes"} className="font-eleanora text-white  text-3xl cursor-pointer  ">Regiões</Link></li>
          </ul>
      </div>
    </header>
  )
}

export default Navbar