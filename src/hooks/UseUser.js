import { useState } from "react";
import useAPI from "../api";

const UseUser = () => {
  const [user, setUser] = useState(null);
  const { POST, PATCH, GET } = useAPI();
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

  const updateUserProfile = async (user) => {
    try {
      const { data } = await PATCH("user/profile", user);
      setUser(data);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getUserProfile = async () => {
    try {
      const { data } = await GET("user/profile");
      const preUser = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data, token: preUser.token })
      );
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    createUser,
    loginUser,
    user,
    setUser,
    updateUserProfile,
    getUserProfile,
  };
};

export default UseUser;
