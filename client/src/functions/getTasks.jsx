import api from "../services/API";

export const getTasks = async (setLoading, setData,setSucess, setError) => {
    setLoading(true);

    try {
        const response = await api.get("/");
        setData(response.data);
        
    } catch (e) {
    }
}