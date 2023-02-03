import useAPI from "../api";

const UsePortfolio = () => {
  const { POST, GET } = useAPI();
  const addPortfolio = async (portfolio) => {
    try {
      const { data } = await POST("portfolio", portfolio);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getAllPortfolios = async () => {
    try {
      const { data } = await GET("portfolio");
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getPortfolio = async (id) => {
    try {
      const { data } = await GET("portfolio/" + id);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { addPortfolio, getAllPortfolios, getPortfolio };
};

export default UsePortfolio;
