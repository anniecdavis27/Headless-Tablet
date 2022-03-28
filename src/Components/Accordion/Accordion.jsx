import AccordionPanel from "./AccordionPanel";
import './accordion.scss'

function Accordion( {accordionData, title} ) {

    return (
      <div className="Accordion">
          <h1 className='module-header'>{title}</h1>
        {accordionData.map(item => {
            return <AccordionPanel panelData={item} />
        })}
      </div>
    );
  }
  
  export default Accordion;