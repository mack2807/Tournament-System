import React from 'react';
import { useState } from 'react';


function App() {
 
 

  const [formData, setFormData] = useState({ 
    tournamentname:"", Startdate:"", Enddate:"", Status:"Upcoming", participantData:""
 });
console.log(formData);
  function changeHandler(event) {
    setFormData(prevformData =>{
      return{
        ...prevformData,
        [event.target.name]: event.target.value
      }
    });
   
   
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  function deletedata(){
    setFormData([]);
  }
  return (
    <div className="app	">
      <h1>Tournament System</h1>
      <div>
      <h2>Tournaments</h2>
      </div>
      <form onSubmit={submitHandler}>
      <br/>

      <label htmlFor=" tournamentname">Tournament Name</label>
      <input
      type="text"
      id="tournamentname"
      name="tournamentname"
      placeholder="Tournament Name"
      value={formData.tournamentname}
      onChange={changeHandler}
      className="outline"
    />
      <br/>
      
      <label htmlFor="Startdate">start date</label>
      <input
      type="date"
      id="Startdate"
      name="Startdate"
      placeholder="start date"
      value={formData.Startdate}
      onChange={changeHandler}
      className="outline"
    />
      <br/>

      <label htmlFor="Enddate">End date</label>
      <input
      type="date"
      id="Enddate"
      name="Enddate"
      placeholder="End date"
      value={formData.Enddate}
      onChange={changeHandler}
      className="outline"
    />
      <br/>

      <label htmlFor="Status">status</label>
      <input
      type="text"
      id="Status"
      name="Status"
      placeholder=""
      value={formData.Status}
      onChange={changeHandler}
      className="outline"
    />
      <br/>

      <label htmlFor="participantData">Participant Names</label>
      <input
      type="text"
      id="participantData"
      placeholder=""
      name="participantData"
      value={formData.participantData}
      onChange={changeHandler}
      className="outline"
    />
      <br/>
      <br/><br/>

    <div className='button'>
    <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>

   <br/>
   <button onClick={deletedata}>
    Delete Data
   </button>
    </div>


      </form>
       </div>
  );
}

export default App;
