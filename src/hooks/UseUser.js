import { useState } from "react";
import useAPI from "../api";

const UseUser = () => {
  const [user, setUser] = useState(null);
  const { POST } = useAPI();
  const createUser = async (user) => {
    try {
      const { data } = await POST("user", user);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  const loginUser = async (user) => {
    try {
      const { data } = await POST("user/login", user);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { createUser, loginUser, user, setUser };
};

export default UseUser;
