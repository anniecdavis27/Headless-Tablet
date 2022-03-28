import parse from "html-react-parser";
import { useState } from "react";
import Accordion from "./Accordion";

function AccordionPanel( {panelData} ) {
    const [active, setActive] = useState('')

    let togglePanel = () => {
        setActive(active === "" ? "active" : "")
    }


    return (
      <div className="AccordionPanel">
        <button className={`accordion__panel-title ${active}`} onClick={togglePanel}>{panelData.accordion_panel_title}</button>
        <div className={`accordion__panel-content ${active ? "active-content" : ""}`}>{parse(panelData.accordion_panel_content)}</div>
      </div>
    );
  }
  
  export default AccordionPanel;