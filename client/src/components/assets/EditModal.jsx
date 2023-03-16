import { Input, Modal } from "antd";

const EditModal = ({ editHandler, open, value, editTask }) => {
  return (
    <Modal
      title={"Editar tarefa "}
      open={open}
      okType={"dashed"}
      onCancel={editHandler}
      onOk={editTask}
    >
      <Input defaultValue={value} />
    </Modal>
  );
};

export default EditModal;
