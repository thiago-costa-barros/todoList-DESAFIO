import api from "../services/API";

export const getTasks = async (setLoading, setData, setError) => {
    setLoading(true);

    try {
        const response = await api.get("/");
        setData(response.data);
        setLoading(false);
        setError(false);
    } catch (e) {
        setLoading(false);
    }
}