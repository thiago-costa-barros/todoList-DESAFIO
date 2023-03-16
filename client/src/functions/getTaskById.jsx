import api from "../services/API";

export const getTaskByID = async (_id, setLoading, alert) => {
    setLoading(true)

    try {
        const response = await api.get(`/getId/${_id}`)
        setLoading(false)
        return response.data
    } catch (e) {
        setLoading(false)
        alert.error("Não foi possível carregar a tarefa !")
    }
}