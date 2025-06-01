import About from '../components/About'
import Navbar from '../components/Navbar'
import RegioesList from '../components/RegioesList'

const Regioes = () => {
  return (
    <div className='bg-[#2E2E2E] flex flex-col items-center w-dvw '>
        <Navbar/>
        <div>
          <h1 className='mt-50 mb-10 text-5xl'>Regiões</h1>
        </div>
        <RegioesList/>
        <About/>
    </div>
  )
}

export default Regioes