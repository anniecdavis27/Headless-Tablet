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
  const [accordionData, setAccordionData] = useState();

  // function to pull page data
  useEffect(() => {
    const dataUrl =
      "https://magazine.tablethotels.com/en/wp-json/wp/v2/pages/83457";
    const makeApiCall = async () => {
      try {
        const response = await axios(dataUrl);
        setData(response.data);
        setAccordionData(response.data.acf.accordion_panels);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);

  let staffImages = [
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-1.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-2.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-2.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-6.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-5.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-4.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-7b.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-12.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-9.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-10.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-8b.jpg",
    "https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/assets/cs/ill-11b.jpg",
  ];

  return (
    <div className="ContactUs">
      {data ? <MainContent data={data} /> : "loading"}
      <div className='contact-flex'>
        <AboutImageModule images={staffImages} />
        <TripleContactMod />
      </div>
      {accordionData ? (
        <Accordion accordionData={accordionData} title="Popular Questions" />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default ContactUs;
