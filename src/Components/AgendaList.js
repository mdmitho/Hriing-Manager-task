import { useEffect, useState } from "react";
import AgendaListDisplay from "./AgendaLIstDisplay";

const AgendaList =()=>{

const [agendaList, setAgendaList]= useState()


useEffect(() => {
    fetch("https://nameless-lake-27327.herokuapp.com/AddAgendaList")
      .then((res) => res.json())
      .then((data) => setAgendaList(data));
  }, []);




// deleted api

const DeleteBtn = (id) => {

  console.log(id)
  const proceed = window.confirm("Are you sure you want to delete");
  if (proceed) {
    const url = `https://nameless-lake-27327.herokuapp.com/agenda/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sucess", data);
        const remaing = agendaList.filter((item) => item._id !== id) ;

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
    
   <AgendaListDisplay DeleteBtn={DeleteBtn} key={agenda._id} agenda={agenda}></AgendaListDisplay>
        
    ))
}
   </tbody>
  </table>


        </>
        )
       
    
}

export default AgendaList;