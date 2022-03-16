//Component that recieves and distributes wp-title and wp-content properties fromt he WP Rest API

//This component does not have its own stylesheet since it's styles are largely inherited from the individual pages. For styling of a specific section, see the scss sheet that corresponds to the page.

import parse from "html-react-parser";
//html-react-parser takes the raw html content from the api and parses it.

function MainContent(props) {
  let data = props.data;

  return (
    <div className="MainContent">
      <h1>{data ? data.title.rendered : "loading"}</h1>
      {data ? parse(data.content.rendered) : "loading"}
    </div>
  );
}

export default MainContent;
