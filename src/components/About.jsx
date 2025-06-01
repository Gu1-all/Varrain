import { Link } from "react-router"

const About = () => {
  return (
    <div className="bg-[#3E3E3E] p-8">
      <nav className="w-[65rem] grid grid-cols-4 m-auto place-items-center max-sm:grid-cols-1 max-sm:w-[20rem]">
        <Link className="font-eleanora text-white m-4 text-2xl cursor-pointer hover:scale-125 transition-all" to={"/sobre"}>Sobre Varrain</Link>
        <Link className="font-eleanora text-white m-4 text-2xl cursor-pointer hover:scale-125 transition-all" to={"/ajude"}>Ajude-nos a melhorar</Link>
        <Link className="font-eleanora text-white m-4 text-2xl cursor-pointer hover:scale-125 transition-all" to={"/conte"}>Conte-nos uma história</Link>
        <Link className="font-eleanora text-white m-4 text-2xl cursor-pointer hover:scale-125 transition-all" to={"/suporte"}>Suporte</Link>
      </nav>
    </div>
  )
}

export default About