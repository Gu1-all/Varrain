import { imgHero } from "../constants"

const Hero = () => {
  return (
    <div>
      <img src={imgHero} className="w-dvw h-dvh max-sm:object-cover max-sm:object-[30%_10%] md:object-cover md:object-[30%_10%]"  alt="" />
    </div>
  )
}

export default Hero