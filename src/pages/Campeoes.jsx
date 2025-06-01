import About from '../components/About'
import Navbar from '../components/Navbar'
import CampeoesList from '../components/CampeoesList'

const Campeoes = () => {
  return (
    <div className='bg-[#2E2E2E]'>
        <Navbar/>
        <div className='flex flex-row justify-center items-center gap-10'>
          <div className='mt-50 mb-10 bg-white h-[0.07rem] w-[20rem] max-sm:w-[3rem]'></div>
          <h1 className='text-center mt-50 mb-10 text-5xl text-white font-eleanora'>Campeões</h1>
          <div className='mt-50 mb-10 bg-white h-[0.07rem] w-[20rem] max-sm:w-[3rem]'></div>
        </div>
        <CampeoesList/>
        <About/>
    </div>
  )
}

export default Campeoes