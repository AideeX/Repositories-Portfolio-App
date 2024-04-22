import NavBar from "../components/NavBar";
import profilePic from '../assets/profile-pic.png';

const AboutMe = () => {
        return (
            <>

            <NavBar />
            <main className="about-me-container">
            <img src={profilePic} alt="Idaresit's profile picture" className='profile-pic'/>
                <h1>About Me</h1>
                <p>As a committed professional, my career journey is marked by variety and depth.</p>
                <p>I am a devoted spouse and mother of two, and I have adeptly navigated the demands of family life alongside my academic and professional endeavors. I possess a Bachelor of Arts in English and a Master of Business Administration with a focus on Management.</p>
                <p>My fascination with technology was ignited during my time in the university but it was only recently that I chose to fully embrace this sector.</p>
                <p>My background in UX/UI design, project management, and marketing has endowed me with a versatile skill set and prepared me to excel in whatever paths I choose.</p>
                <p>In 2023, I took a significant step towards fulfilling my technological aspirations by enrolling at AltSchool, with the goal of excelling as a software engineer. This decision is a pivotal point in my career, blending my leadership skills and creative flair with my passion for technology.</p>
                <p>I am committed to nurturing a warm family environment while cultivating a promising career in tech, demonstrating that personal fulfillment and professional advancement can progress together.</p>
                <p>I am keen to apply my extensive abilities to drive innovation in the tech industry.</p>
            </main>
            </>
        );
    };
    
    export default AboutMe;