import "./contactus.scss";

function AboutImageModule({ images }) {
  console.log(images);

  return (
    <div className="AboutImageModule">
      {images.map((i) => {
        return <div className="image-slot">
          <img src={i} alt="staff image" />
        </div>;
      })}
    </div>
  );
}

export default AboutImageModule;
