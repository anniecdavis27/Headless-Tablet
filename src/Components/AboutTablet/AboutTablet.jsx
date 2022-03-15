import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent";
import "./abouttablet.scss";
import "../../scss/style.scss";

function AboutTablet() {
  //hooks
  const [data, setData] = useState();

  // function to pull page data
  useEffect(() => {
    const dataUrl =
      "https://magazine.tablethotels.com/en/wp-json/wp/v2/pages/83340";
    const makeApiCall = async () => {
      try {
        const response = await axios(dataUrl);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);

  console.log(data);

  return (
    <div className="AboutTablet">
      <Sidebar />
      {data ? <MainContent data={data} /> : "loading"}
    </div>
  );
}

export default AboutTablet;
