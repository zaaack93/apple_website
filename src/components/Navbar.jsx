import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header className='w-full py-5 px-5 sm:px-10 flex justify-center items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {
                navLists.map((item, index) => (
                        <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={index}>{item}</div>
                    ))
                }
            </div>
            <div className='flex items-baseline max-sm:flex-1 gap-5 max-sm:justify-end'>
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar