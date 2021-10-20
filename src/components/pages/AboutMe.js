export default function AboutMe(){
    return (
        <div>
            <h3>About me</h3>
            <img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/profilepicture.png`} alt="Jose Diaz"/>
            <p className='ptag'>Hi, my name is Jose E. Diaz. I am a full stack web-Developer, currently enrolled in University of Washington's code boot camp. with a background in mechanical repair. enthusiastic to start learning more whether its on the job, at home or enrolled in a course/school.</p>
        </div>
    )
}