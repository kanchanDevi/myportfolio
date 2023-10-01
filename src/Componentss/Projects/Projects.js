import Card from '../Card/Card';
import { ProjectDetails } from "/Contest";
import './index.css';


const Projects =()=>{
    return(
        <>
        <h3 className="project-heading">Projects</h3>
        <div className='card-container'>
        {
            ProjectDetails.map((project)=>{
              return  <Card {...project} key={project.id}/>
            })
        }
        </div>
      
        </>
    )

}
export default Projects