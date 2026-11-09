function ProjectsCard({title, description, image, technologies, link}){

    return(
        <article className="project-card">

            <img src={image} alt={title} />

            <div className="project-card__content">
                <h3>{title}</h3>
                <p>{description}</p>


            <div className="project-card__technologies">
                {technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                ))}
            </div>

            <a href={link} target="blank" rel="noopener noreferrer">View Project</a>

             </div>


        </article>
    )
    
}

export default ProjectsCard;