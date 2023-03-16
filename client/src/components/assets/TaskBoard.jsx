import { Container } from "react-bootstrap"

export const TaskBoard = ({ selecionados, tasksLength}) => {
    
    return (
        <>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '24px' }}>
                <span className="text-blue-700 font-bold">TAREFAS A FAZER  </span>
                <span style={{ padding: '0 4px' }} className="bg-blue-700 font-bold text-center ml-2 rounded">{tasksLength}</span>
                <span className="text-green-700 font-bold ml-4">CONCLUÍDAS</span>
                <span style={{ padding: '0 4px' }} className="bg-green-700 text-gray-200 font-bold text-center ml-2 rounded">{selecionados} de {tasksLength}</span>
            </Container>
        </>
    )
}