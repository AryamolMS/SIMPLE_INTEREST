import { TextField } from '@mui/material';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

  const getValidate = (e)=>{
    const {name,value}=e.target
   /*  console.log(name,value); */
   
    if(!!value.match(/^[0-9]+$/)){
      if(name==="principle"){
         setPrinciple(value)
         setIsPrinciple(true)
        }
        else if(name=="rate"){
          setRate(value)
          setIsRate(true)
        }
        else {
          setYear(value)
          setIsYear(true)
        }
    }
    else{
      if(name==="principle")
       {setPrinciple(value)
       setIsPrinciple(false)}
       else if(name==="rate"){
        setRate(value)
        setIsRate(false)
       }
       else {
        setYear(value)
        setIsYear(false)
       }
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!principle || !rate  ||!year){
      alert('please fill this form')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset =(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-dark ' style={{height:'100vh'}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate simple interest easily</p>
        <div className='bg-warning p-3 d-flex justify-content-center align-items-center flex-column w-100 rounded'>
          <h1>₹ { ' '} {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleSubmit}>

          <div className='mt-5'>
              <TextField value={principle || ""} name='principle' onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
         { !isPrinciple &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>}

          <div className='mt-5'>
              <TextField name="rate" value={rate || ""} className='w-100' id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" onChange={(e)=>getValidate(e)}/>
          </div>
          { !isRate &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>}

          <div className='mt-5'>
              <TextField name='year' value={year || ""} className='w-100' id="outlined-basic" label="Year" variant="outlined" onChange={(e)=>getValidate(e)} />
          </div>
          { !isYear &&
          <div>
            <p className='text-danger'>Invalid Input</p>
          </div>}
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrinciple && isRate && isYear?false:true} className='bg-success mt-3' style={{width:'150px',height:'50px'}} variant="contained" type='submit'>Calculate</Button>

            <Button onClick={handleReset} className=' mt-3 text-success' style={{width:'150px',height:'50px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
        </div>
    </div>
  );
}

export default App;
