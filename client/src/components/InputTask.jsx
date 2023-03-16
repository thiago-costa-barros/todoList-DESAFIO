import { Button, Input } from "antd"
import { Container } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { FormButton } from "./assets/FormButton"
import { FormInput } from "./assets/FormInput"
import { useState } from "react"
import { createTask } from "../functions/createTask"
import { ErrorMessage } from "./assets/ErrorMessage"
import { useAlert } from "react-alert"

export const InputTask = () => {
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(false)
    const navigate = useNavigate();
    const alert = useAlert()

    const schema = yup.object({
        task: yup.string().required("Campo Obrigatório")
    })

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors }, } = useForm({
            resolver: yupResolver(schema)
        })

    const save = (data) => {
        createTask(data, setLoading, setSucess)
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <Container
                style={{
                    display: 'flex',
                    marginTop: '72px'
                }}>
                <Controller
                    name="task"
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                        <FormInput
                            value={value}
                            onChange={onChange}
                            ref={ref}
                            placeholder="Adicione sua tarefa..."
                        />
                    )}
                />
                <FormButton />
            </Container>
            <Container>
                {errors?.task && (
                    <ErrorMessage>{errors?.task?.message}</ErrorMessage>
                )}
            </Container>
        </form>
    )
}