import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "../Accordion/Accordion";
import AboutImageModule from "./AbtImgMod";
import TripleContactMod from "./TripleContactMod";
import MainContent from "../MainContent";
import "./contactus.scss";

function ContactUs() {
  //hooks
  const [data, setData] = useState();

  // function to pull page data
  useEffect(() => {
    const dataUrl =
      "https://magazine.tablethotels.com/en/wp-json/wp/v2/pages/83457";
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
    <div className="ContactUs">
      {data ? <MainContent data={data} /> : "loading"}
      <AboutImageModule />
      <TripleContactMod />
    </div>
  );
}

export default ContactUs;
