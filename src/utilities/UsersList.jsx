import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  

  const getAllUsers = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users";

    axios.get(URL) 
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  console.log(users);
  return ( 
    <>
      {
        users.data?.map((user) => (
          <article key={user.id} className="w-5/6 flex justify-evenly text-center">
            <h4>{user.firstName + " " + user.lastName}</h4>
            <h4>{user.email}</h4>
            <h4>{user.firstName}</h4>
            <h4>{user.lastName}</h4>
            <h4>{user.birthday}</h4>
          </article>
        ))
      }
    </>
  );
};

export default UsersList;
