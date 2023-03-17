import * as yup from "yup"
import { Checkbox } from "@mui/material";
import { Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAlert } from "react-alert"
import { getTasks } from "../functions/getTasks";
import { removeTask } from "../functions/removeTask";
import { updateCheck } from "../functions/updateCheck";
import { TaskBoard } from "./assets/TaskBoard";
import CheckedSVG from "./svg/Checked";
import DeleteSVG from "./svg/Delete";
import EditSVG from "./svg/Edit";
import NoDataSVG from "./svg/NoData";
import NotChekedSVG from "./svg/NotChecked";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate, redirect } from "react-router";
import EditModal from "./assets/EditModal";
import { getTaskByID } from "../functions/getTaskById";
import { useFetch } from "../hooks/useFetch";

export const TableTask = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState([])
  const [loading, setLoading] = useState([])
  const [sucess, setSucess] = useState([])

  const navigate = useNavigate()
  const alert = useAlert();
  const location = useLocation()

  const getTaskId = async () => {
    const taskId = await getTaskByID(location?.state?.id, setLoading, alert)
  }


  //Refresh na página quando houver alterações
  useEffect(() => {
    getTasks(setLoading, setData, setError)
  }, [sucess])

  //Mensagens de alerta

  useEffect(() => {
    if (error) alert.error("Não foi possivel realizar essa operação!")
    if (sucess) alert.show("Operação realizada com sucesso!")
  }, [error, sucess])


  //Checkbox task


  //Edit Modal
  const [openEditModal, setOpenEditModal] = useState(false);

  const editHandler = () => {
    setOpenEditModal(!openEditModal)
  }
  const editTask = () => {
    console.log(location?.state?.task)
  }


  return (
    <>

      <Container ><TaskBoard selecionados={0} tasksLength={data?.length} /></Container>
      <Container
        className="mt-8"
      >{data?.length <= 0 &&
        <Container>
          <NoDataSVG
            style={{
              display: "flex",
              width: "80%",
              margin: "12px auto",
            }} />
        </Container>
        }
        {data?.map((task, key) => (
          <Container
            key={key}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <Container
              style={{
                maxWidth: "96px",
                minHeight: "54px",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="bg-black-700 rounded-tl rounded-bl"
            >
              <form >
                <Checkbox
                  checkedIcon={<CheckedSVG />}
                  icon={<NotChekedSVG onClick={() => (checked++).console.log(checked)} />}
                  style={{ margin: "10px 0" }} />
              </form>
            </Container>
            {task.check == false &&
              <Container
                id="task_name"
                style={{ width: "94%" }}
                className=" bg-black-700 text-gray-200 text-md font-medium mx-1"
              >
                <p className="m-2">{task.task} </p>
              </Container>
            }
            {task.check == true &&
              <Container
                id="task_name"
                style={{ width: "94%" }}
                className=" bg-black-700 text-violet-700 line-through text-md font-medium mx-1"
              >
                <p className="m-2">{task.task} </p>
              </Container>
            }
            <Container >
              <Popconfirm
                placement="right"
                title="Tem certeza que deseja excluir a tarefa?"
                onConfirm={() => removeTask(task?._id, setLoading, setSucess, setError)}
                okType={"danger"}
                okText="Sim"
                cancelText="Não"
              >
                <Container className="mb-1">
                  <DeleteSVG className="hover:opacity-60 cursor-pointer" />
                </Container>
              </Popconfirm>
              <Container
                className="mt-1"
                onClick={() => redirect("/", { state: { _id: task?._id, task: task?.task } })}
              >
                <EditModal
                  open={openEditModal}
                  editHandler={editHandler}
                  editTask={editTask}
                  value={task?.task}
                />
                <EditSVG
                  className="hover:opacity-60 cursor-pointer"
                  onClick={() => setOpenEditModal(true)}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>

    </>
  );
};
