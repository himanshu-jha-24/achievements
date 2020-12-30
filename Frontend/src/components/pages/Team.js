
import React, {useEffect, useState} from 'react';
import '../../App.css';

export default function Teams() {

  const [teams, setTeams] = useState([{
    
    name: '', 
    department: '',
    degree: '',
    year: '',
    por: '',
    photo: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    portfolio: ''


  }])

  useEffect(() => {
    fetch('http://localhost:8080/teams')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setTeams(jsonRes))
  })

  return (
    <div className="container">
      {teams.map(team => (
      <div>
        <h1>{team.name}</h1>
        {/* whatever accordingly */}
      </div>
      ))}
    </div>
  )
}
