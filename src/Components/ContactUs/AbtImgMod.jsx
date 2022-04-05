import "./contactus.scss";

function AboutImageModule({ images }) {
  console.log(images);

  return (
    <div className="AboutImageModule">
      {images.map((i, index) => {
        console.log(index)
        return <div className={`image-slot ${index > 3 ? "img-hidden" : ''}`}>
          <img src={i} alt='staff image' />
        </div>;
      })}
    </div>
  );
}

export default AboutImageModule;
