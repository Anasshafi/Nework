import axios from "axios";
import useAPI from "../api";

const useMedia = () => {
  const { POST } = useAPI();
  async function upload(file) {
    const fd = new FormData();
    console.log(file);
    fd.append("file", file);
    const { data } = await axios.post("http://127.0.0.1:3300/api/upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.url;
  }

  return { upload };
};

export default useMedia;
