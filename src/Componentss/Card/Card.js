import "./index.css";

const Card = ({ id, name, desciption, link, image }) => {
  return (
    <>
      {/* <div className="projects-card"> */}
        <div className="project-details-sections">
          <div className="projects-details">
            <h3 className="project-name">{name}</h3>
            <p className="paragraph">{desciption}</p>
            <button type="button" className="view-project-button">
              <a href={link}  target="_blank" className="view-link">View Project</a>
            </button>
          </div>

          <div className="image-section">
            <img src={image} className="project-image" height="200px" width="280px" />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
export default Card;
