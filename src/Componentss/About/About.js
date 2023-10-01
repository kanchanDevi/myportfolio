import { Link } from "react-router-dom";
import './index.css';
import Pic from '/assests/p-photo.png';

const About =()=>{
   
    
    return(
        <>
        <div className="details-container">
            <div className="name-details">
                <p className='role'>Frontend Developer</p>
                <h2 className='full-name'>Hello,  my name is Kanchan Devi</h2>
                <p className='details'>Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Frontend Developer and Backend Development. Now I am looking for more experience in my field.</p>
                <div className='buttons'>
                    <Link to="https://publuu.com/flip-book/254556/601310/page/1" target='_blank' className='button-styles'><button type="button" className='project-button' >Resume</button></Link>
                   
                
                </div>

            </div>
            <div className="image-details">
                <div className='card'><img src={Pic} className='profile-image' /></div>
                

            </div>
        </div>
       
        </>
    )
}

export default About