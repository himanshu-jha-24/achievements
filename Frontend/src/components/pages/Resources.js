
import React, {useEffect, useState} from 'react';
import '../../App.css';

export default function Resources() {

  const [resources, setResources] = useState([{
    
    name: '', 
    type: '',
    drive_link: '',
    youtube_link: ''
    

    // type- aerial,swarm,sae,aerobatics,general,blog


  }])

  useEffect(() => {
    fetch('http://localhost:8080/resources')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setResources(jsonRes))
  })


  //On clicking Resources(navbar) we should get a dropdown menu with options as-
  // Swarm Robotics
  // Aerial Robotics
  // SAE Aero
  // Aerobatics
  // General
  // Blogs

  //On clicking any of these we need to render(after filtering according to type data) resources page.

  return (
    <div className="container">
      {resources.map(resource => (
      <div>
        <h1>{resource.name}</h1>
        {/* whatever accordingly */}
      </div>
      ))}
    </div>
  )
}
