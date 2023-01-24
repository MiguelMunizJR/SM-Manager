import { useState } from "react";
import Form from "../components/Form";

const ButtonNewUser = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <>
      {isShowForm ? <Form setIsShowForm={setIsShowForm} /> : null}
      <button
        onClick={() => setIsShowForm(true)}
        className="py-2 px-6 bg-navBarBA text-gray-300 font-default font-medium text-md rounded"
      >
        + Create User
      </button>
    </>
  );
};

export default ButtonNewUser;
