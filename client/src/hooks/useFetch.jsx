import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function useFetch() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)


  const API_URL = "http://localhost:3333/";
  const getAllTasks = () => {
    axios
      .get(API_URL)
      .then((res) => setTasks(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTasks(API_URL, setLoading);
  }, [loading]);
  return { tasks };
}
