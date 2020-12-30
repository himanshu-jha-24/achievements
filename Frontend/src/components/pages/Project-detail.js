import React, {useEffect, useState} from 'react';
import { useParams} from "react-router";
import '../../App.css';

export default function Project() {
  const {id} = useParams();
  console.log({id});
  const [project, setProject] = useState([{
    
    title: '', 
    type: '',
    imageUrl: '',
    description: '',
    longDescription: '',
    userId: '',
    sanitizedHtml: ''
  }])

  useEffect(() => {
    fetch('http://localhost:8080/'+ {id})
    .then(res => {
        console.log(res);
      if(res.ok) {
          
        return (
            res.json())
      }
    }).then(jsonRes => setProject(jsonRes))
  })

  return (

   
    <div className="container">
    {project.map(proj => (
    <div>
      <h1>{proj.title}</h1>

      {/* id for detail page  */}
      <h1>{proj._id}</h1> 
      
      <img src={proj.imageUrl} alt="" />
      <h2>{proj.description}</h2>
      {/* <div dangerouslySetInnerHTML={{__html:project.sanitizedHtml}}> */}

        
        
      {/* </div> */}
    </div>
    ))}
  </div>
)
}



