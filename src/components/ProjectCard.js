
export default function ProjectCard({title, image, liveUrl, repoUrl, technology}){
   
    return (
        <div className="ProjectCard">
            <h5>{title}</h5>
            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt="Application Image"/>
            <div>
                <a href={liveUrl}>Visit Live Website</a>
                <br></br>
                <a href={repoUrl}>Visit Repositorie</a>
                <h5>technology used</h5>
                <ul>{technology}</ul>
            </div>
        </div>
    )
}