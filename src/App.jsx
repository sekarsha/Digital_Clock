import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [currenttime, setcuremtime] = useState(new Date());

  useEffect(() => {

    const time = setInterval(() => { setcuremtime(new Date()) }, 1000)
    return () => clearInterval(time)

  }, [])

  const formathour = (hour) => {

    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  }

   
  const timezero=(num)=>{

    return num<10?`0${num}`:num
  }


  const formatdate = (date)=>{

    const option={weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,option)}

  return (


    <div className=' bg-info vh-100 d-flex justify-content-center align-items-center main'>


      <div>

        <div className='show bg-white   align-content-center rounded-4 ' style={{ width: "300px", height: "350px" }} >

          <div className=' justify-content-center d-flex'><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Alarm_Clock_GIF_Animation_High_Res.gif" alt=""  width={100}  /></div>

          <div className=' text-center text-danger  fw-bold p-1' > <h3 className='fw-bold'>Digital clock</h3></div>
          <div className=' text-center p-1'> <h1 className='fw-bold'>{timezero(formathour(currenttime.getHours()))}:{timezero(currenttime.getMinutes())}:{timezero(currenttime.getSeconds())} {currenttime.getHours()>=12?"PM":"AM"}</h1></div>
          <div className=' text-center text-muted'> <p>{formatdate(currenttime)}  </p></div>
          <div ><p className=' text-center' style={{ fontSize: 10}}  >Disinged by <a href="" className=' nav-item'>@Sekar K</a></p></div>
   
        </div>
      </div>
 


    </div>

     

  )
}

export default App
