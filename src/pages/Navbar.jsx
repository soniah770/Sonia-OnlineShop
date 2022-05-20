import { Search } from '@material-ui/icons'
import React from 'react'
function Navbar() {
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
            {/*left */}
            <div className='left flex flex-1 items-center'> 
            <div className='language cursor-pointer text-[16px]'>En</div>
            <div className='searchInput flex border-[2px] border-solid border-gray-200 rounded-md items-center ml-[10px]  focus-within:border-[#8a4af3] transition-all'>
                <input className='input' type='text' />
                <Search className='' style={{fontSize:'16px'}}/>
            </div>
            {/* logo */}
            <div className='center flex-1 text-center'>
                
                <div className='logo font-bold text-lg'>Summer Kings</div>
            </div>
            <div>Register</div>
            <div> Sign in </div>
         <div>
             
         </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar