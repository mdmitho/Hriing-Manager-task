import { useEffect, useState } from "react";

const AgendaList =()=>{

const [agendaList, setAgendaList]= useState()



useEffect(() => {
    fetch("http://localhost:5000/AgendaList")
      .then((res) => res.json())
      .then((data) => setAgendaList(data));
  }, []);

    return( <>
        
        
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
       
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
    </thead>
   <tbody>
   {
    agendaList?.map((agenda)=>(
       <tr>
{/* <th>{index + 1}</th> */}
<td>{agenda.Title}</td>
<td>{agenda.Description}</td>
<td>{agenda.Description}</td>
       </tr>
        
    ))
}
   </tbody>
  </table>


        </>
        )
       
    
}

export default AgendaList;