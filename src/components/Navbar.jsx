import { Link } from "react-router"

const Navbar = () => {
  return (
    <header className="fixed font-bold z-1 text-center bg-gradient-to-b from-[#2E2E2E] to-[rgba(42, 123, 155, 0)] w-dvw p-8">
      <nav className="grid grid-cols-3 place-items-center">
        <div className="flex">
          <Link to={"/universo"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Universo</Link>
          <Link to={"/campeoes"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Campeões</Link>
          <Link to={"/mapa"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Mapa</Link>
        </div>
        <Link to={"/"} className="font-eleanora text-white m-4 text-4xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Varrain</Link>
        <div className="flex">
          <Link to={"/galeria"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Galeria</Link>
          <Link to={"/timeline"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Timeline</Link>
          <Link to={"/regioes"} className="font-eleanora text-white m-4 text-3xl cursor-pointer hover:scale-125 transition-all max-sm:hidden">Regiões</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar