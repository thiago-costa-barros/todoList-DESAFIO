import { Button } from 'antd';
import { useNavigate } from 'react-router';

export const FormButton = () => {
    return (
        <Button
            className='bg-black-700 font-bold text-sm text-center ml-2 '
            type="primary"
            htmlType='submit'
            onSubmit={useNavigate("/")}
        >
            Criar tarefa
        </Button>
    )
}