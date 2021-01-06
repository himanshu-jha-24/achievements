import React, {useEffect, useState} from 'react';


export  function Events() {

  const [events, setEvents] = useState([{
    
    name: '', 
    date: '',
    month: '',
    year: '',
    day: '',
    time: '',
    venue: ''
  }])

  useEffect(() => {
    fetch('http://localhost:8080/events')
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setEvents(jsonRes))
  })



  //Logic - Your UI was great!! We need to show just the upcoming events so for that we will fetch the list of events which satisfy following logic....if event's date - today's date >= 0 then show them else dont. Google for more details. 

  return (
    <div className="container">
      {events.map(event => (
      <div>
        <h1>{event.name}</h1>
        
      </div>
      ))}
    </div>
  )
}
