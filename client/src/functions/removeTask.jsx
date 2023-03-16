import api from "../services/API";

export const removeTask = async (_id, setLoading, setSucess, setError) => {
    setLoading(true)
    try {
        await api.delete(`/${_id}`);
        setSucess(true);
        setLoading(false);
    } catch (e) {
        setLoading(false);
        setError(true);
    }
}