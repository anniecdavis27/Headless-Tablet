import parse from "html-react-parser";

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
