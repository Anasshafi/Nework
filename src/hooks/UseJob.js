import useAPI from "../api";

const UseJob = () => {
  const { POST, GET } = useAPI();
  const createJob = async (job) => {
    try {
      const { data } = await POST("job-posting", job);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getJobs = async () => {
    try {
      const { data } = await GET("job-posting");
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { createJob, getJobs };
};

export default UseJob;
