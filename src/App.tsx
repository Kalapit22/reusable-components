import MaskImage from './components/MaskImage';
import { useState } from 'react';
import truck from './assets/truck.png'
import Input from './components/inputs/Input';
import {useForm} from 'react-hook-form';

function App() {
 
  const [percentage,setPercentage] = useState(0);

  const { register,handleSubmit } = useForm();

  const onSubmit = () => {
    
    
  }

  



  const Inputs = [{
      type: 'email',
      name: 'username',
      required: true,
      placeholder: 'Enter your email',
      withLabel: true,
      labelTxt: 'Email'
    },
    {
      type: 'password',
      name: 'password',
      required: true,
      placeholder: 'Enter your password',
      withLabel: true,
      labelTxt: 'Password'
    },
    {
      type: 'submit',
      name: 'submit',
      required: true,
      placeholder: 'Submit',
      withLabel: false,
    }
  }
  
    

  


  return (
    <>
      {/* <div style={{width:'30%', height:'200px'}}>
      <MaskImage maskSource={truck} percentage={percentage} fillColor='skyblue' siluetheColor='#e0e0e0' />
      </div> */}

      <div style={{width:'30%', height:'200px'}}>
        


      <form onSubmit={handleSubmit(onSubmit)}></form>
      <Input className='w-100 bg-or-gray p-2 b rounded-xl' name='username'  register={register} type='email' required    />
        </div>      


    </>
  )
}

export default App
