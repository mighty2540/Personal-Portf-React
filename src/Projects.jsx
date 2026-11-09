import ProjectsCard from "./ProjectsCard"

function Projects(){

    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "Personal website with HTML & CSS",
            image: "./portfolio.png",
            link: "https://mighty2540.github.io/portfolio-mine/",

            technologies:[ "Css", "HTML", "Bootstrap"]
        },

        {
            id: 2,
            title:"Aquire Logos",
            description:"Single web Application that uses dictionary Api to fetch data",
             image: "./aquire.png",
          
            
            technologies: [ "ryruiene", "hddkjd", "jddkkd"],
            link: "https://mighty2540.github.io/SPAProject/",

        },

        {
            id: 3,
            title: "Ngumzo",
            description:"Social Media Application",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2FH934Ti74x7MxtMSPEQTSNo7JcI05Cn2W6j6pvy7A&s=10",
            technologies: [ "ryruiene", "hddkjd", "jddkkd"],

            link:"https://github.com/mighty2540/Chat-chatBox/settings"
        }

    ];

    return (
        <section className="projects" id="projects">

            <h2>My Projects</h2>

            <div className="projects__container">

                {projects.map((project)=>
                (
                    <ProjectsCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    link={project.link}

                    />
                ))}

            </div>

        </section>
    )
}

export default Projects;