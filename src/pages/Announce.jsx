import {React,useState} from 'react'
import {Close} from  '@material-ui/icons';
function Announce() {
    const[announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
    const handleClose = () => {
        setAnnounceStyle(announceStyle+ " hidden")
    }
  return (
    <div className='bg-[#8a4af3] font-bold text-white flex items-center justify-center'>

        <h2>Hurry up 40% Discount</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce