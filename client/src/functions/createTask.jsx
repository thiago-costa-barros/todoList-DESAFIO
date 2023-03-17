import api from "../services/API";

export const createTask = async (data, setLoading, setSucess, navigate) => {
    setLoading(true);
    try {
        await api.post("/create", data);
        setSucess(true)
        navigate("/")
    } catch (e) {
        setLoading(false);

    }
}