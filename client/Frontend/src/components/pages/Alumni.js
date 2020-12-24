
import React, {useEffect, useState} from 'react';
import '../../App.css';

export default function Alumni() {

  const [alumni, setAlumni] = useState([{
    
    name: '', 
    department: '',
    degree: '',
    year: '',
    por: '',
    profession: '',
    photo: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    portfolio: ''

  }])

  useEffect(() => {
    fetch('http://localhost:8080/alumni')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setAlumni(jsonRes))
  })

  return (
    <div className="container">
      {alumni.map(alum => (
      <div>
        <h1>{alum.name}</h1>
        
          
        
      </div>
      ))}
    </div>
  )
}
