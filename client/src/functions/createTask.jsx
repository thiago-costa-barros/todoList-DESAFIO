import api from "../services/API";

export const createTask = async (data, setLoading, setSucess) => {
    setLoading(true);
    try {
        await api.post("/create", data);
        setSucess(true)
    } catch (e) {
        setLoading(false);
        
    }
}