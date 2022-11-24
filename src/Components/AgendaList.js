import { useEffect, useState } from "react";

const AgendaList =()=>{

const [agendaList, setAgendaList]= useState()

console.log(agendaList)

useEffect(() => {
    fetch("http://localhost:5000/AddAgendaList")
      .then((res) => res.json())
      .then((data) => setAgendaList(data));
  }, []);




// deleted api

const DeleteBtn = (id) => {
  const proceed = window.confirm("Are you sure you want to delete");
  if (proceed) {
    const url = `http://localhost:5000/AddAgendaList${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sucess", data);
        const remaing = agendaList.filter((List) => List._id !== id);
        setAgendaList(remaing);
      });
  }
};










    return( <>
        
        
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead className="bg-white">
      <tr >
       
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Deleted</th>
      </tr>
    </thead>
   <tbody>
   {
    agendaList?.map((agenda)=>(
    
       <tr>

{/* <td><p>  console.log(agenda._id)</p></td> */}
<td>{agenda.Title}</td>
<td>{agenda.Description}</td>
<td>{agenda.selectedDay}</td>
<td><button 
onClick={() => DeleteBtn(agenda._id)}
class="btn btn-error">Delete</button></td>
       </tr>
        
    ))
}
   </tbody>
  </table>


        </>
        )
       
    
}

export default AgendaList;