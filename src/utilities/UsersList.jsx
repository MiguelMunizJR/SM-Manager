import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users";

    axios
      .get(URL)
      .then((res) => {
        setUsers(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users);
  return (
    <article>
      {users.data?.map((user) => (
        <h4 key={user.id}>{user.firstName}</h4>
      ))}
    </article>
  );
};

export default UsersList;
