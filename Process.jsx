import axios from "axios";
import { useEffect, useState } from "react";

const Process = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:5000/process");

    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Process
      <div>{data.num_clusters}</div>
    </div>
  );
};

export default Process;
