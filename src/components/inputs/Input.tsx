import { InputProps } from "../types/types";
import {FaUser,FaCheck} from 'react-icons/fa6';


const Input = ({type, name, register, placeholder, required, disabled, defaultValue, className, onChange,withLabel,labelTxt,ref} : InputProps) => {



return(
    <>
    {withLabel 
        ? 
        <>
            <label>{labelTxt}</label>
            <input type={type}
                   className={className}
                   placeholder={placeholder}
                   required={required}
                   disabled={disabled} 
                   defaultValue={defaultValue} 
                   ref={ref}
                   {...(register ? register(name) : {})}
                   onChange={onChange}
                   />
        </>
        :   
        <>
            <input type={type}
            className={className}
            placeholder={placeholder}
            required={required}
            disabled={disabled} 
            defaultValue={defaultValue} 
            ref={ref}
            {...register(name)}
            onChange={onChange}
            />
        </>
     }

    
    </>
)


}





export default Input;