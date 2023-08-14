import React,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios';
const App = () => {

    const [qoute,setQoute]=useState('');

    useEffect(()=>{
           fetchAdivce();
    },[]);
    const fetchAdivce=()=>{
        axios.get('https://api.adviceslip.com/advice').then((respnse)=>{
            const {advice}=respnse.data.slip
            setQoute(advice)
         
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='app'>
         <div className="card">
            <h1 className='heading'>{qoute}</h1>
            <button onClick={fetchAdivce}>
                <span>Give Me Advice</span>
            </button>
         </div>
    </div>
  )
}

export default App
