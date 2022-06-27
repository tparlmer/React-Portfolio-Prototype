import React from 'react';
import './ProjectItem.scss'

function ProjectItem({ image, name, link, repo }) {
    return(
        <div className="projectItem">
            <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
            <h1> {name} </h1>
            <h1> {link} </h1>
            <h1> {repo} </h1>
        </div>
    )
}

export default ProjectItem;