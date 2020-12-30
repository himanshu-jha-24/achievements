
import React, {useEffect, useState} from 'react';
import '../../App.css';

export default function Resources() {

  const [resources, setResources] = useState([{
    
    name: '', 
    drive_link: '',
    youtube_link: ''
    


  }])

  useEffect(() => {
    fetch('http://localhost:8080/resources')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setResources(jsonRes))
  })

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
