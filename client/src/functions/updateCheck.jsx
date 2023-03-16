import api from "../services/API";

export const updateCheck = async (_id, setSucess, setLoading, setError) => {
    setLoading(true)
    try {
        await api.put(`/update/${_id}`, data);
        setLoading(false);
        setSucess(true)
    } catch (e) {
        setLoading(false);
        setError(true)
    }

}