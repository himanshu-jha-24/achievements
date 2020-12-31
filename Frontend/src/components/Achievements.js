
import React, {useEffect, useState} from 'react';
// import '../../App.css';

export default function Achievements() {

  const [achievements, setAchievements] = useState([{
    
    name: '', 
    month: '',
    year: '', 
    description: ''
    


  }])

  useEffect(() => {
    fetch('http://localhost:8080/achievements')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setAchievements(jsonRes))
  })

  return (
    <div className="container">
      {achievements.map(achievement => (
      <div>
        <h1>{achievement.name}</h1>
        {/* whatever accordingly */}
      </div>
      ))}
    </div>
  )
}
