import { useState } from "react";
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
            technologies: [ "HTML", "CSS", "Javascript"],
            link: "https://mighty2540.github.io/SPAProject/",

        },

        {
            id: 3,
            title: "Ngumzo",
            description:"Social Media Application",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2FH934Ti74x7MxtMSPEQTSNo7JcI05Cn2W6j6pvy7A&s=10",
            technologies: [ "HTML", "CSS", "Javascript"],
            link:"https://github.com/mighty2540/Chat-chatBox/settings"
        }

    ];

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        link:"",
        technologies: "",
    });

    // Handle form input data changes

    function handleChange(event) {
        const {name, value} = event.target;

        setFormData({
            ...formData, [name]: value
        });
    }

    // project submission handling

    function handleSubmit(event) {
        event.preventDefault();

        const newProject = {
            id: Date.now(),
            title: formData.title,
            description:formData.description,
            image: formData.image,
            link:formData.link,
            technologies:formData.technologies
            .split(",")
            .map(tech => tech.trim())
            .filter(tech => tech !== "")
        };

        setProjects([...projects, newProject]);


        // clear

        setFormData({
            title:"",
            description:"",
            image:"",
            link:"",
            technologies:""
        })
    }

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

            
          <div className="add-project">

            <h2>Add a New Project</h2>

            <p className="add-project__description"> 
                Showcase another project by filling in the details below
            </p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="title">Project Title</label>
                    <input
                       type="text"
                       id="title"
                       name="title"
                       placeholder="Enter Project title"
                       value={formData.title}
                       onChange={handleChange}
                       required
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                      id="description"
                      name="description"
                      placeholder="Describe your Project"
                      value={formData.description}
                      onChange={handleChange}
                      required
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <textarea 
                      type = "url"
                      id="image"
                      name="image"
                      placeholder="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="link">Project Link</label>
                    <textarea 
                      type="url"
                      id="link"
                      name="link"
                      placeholder="git"
                      value={formData.link}
                      onChange={handleChange}
                      required
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="technologies">Technologies</label>
                    <textarea 
                      type="text"
                      id="technologies"
                      name="technologies"
                      placeholder="React, CSS, Javascript"
                      value={formData.technologies}
                      onChange={handleChange}
                      required
                     />

                     <small>Separate tech with commas.</small>
                </div>

                <button type="submit" className="add-project__button">

                    Add Project +

                </button>






            </form>

          </div>


        </section>
    )
}

export default Projects;