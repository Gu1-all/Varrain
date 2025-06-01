import About from '../components/About'
import Navbar from '../components/Navbar'
import CampeoesList from '../components/CampeoesList'

const Campeoes = () => {
  return (
    <div className='bg-[#2E2E2E]'>
        <Navbar/>
        <div className='flex flex-col items-center'>
          <h1 className='mt-50 mb-10 text-5xl'>Campeões</h1>
        </div>
        <CampeoesList/>
        <About/>
    </div>
  )
}

export default Campeoes