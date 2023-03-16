import { Input} from 'antd';

export const FormInput = ({placeholder, value, ...props}, ref) => {
    return(
        <Input 
        ref={ref} {...props}
        className='bg-gray-400'
        placeholder={placeholder}
    />
    )
}