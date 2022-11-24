
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import AgendaList from './AgendaList';



 const AgendaInput=()=> {
  
const [agendaList, setAgendaList]= useState()
console.log(agendaList)
const [addedAgenda, setAddedAgenda] = useState([]);

    const [selectedDay, setSelectedDay] = useState(new Date());

    useEffect(() => {
        fetch("http://localhost:5000/AgendaList")
          .then((res) => res.json())
          .then((data) => setAgendaList(data));
      }, []);





    const footer = selectedDay ? (
      <p>You selected {format(selectedDay, 'PP')}.</p>
    ) : (
      <p>Please pick a day.</p>
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        setAgendaList(data,)
        
      };


     

    return (
        <>
  


<div class="hero  bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">



  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
   <tbody>
   {
    agendaList?.map((agenda,index)=>(
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

  




 
   



    
    </div>
    <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
      <div class="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Title</span>
          </label>
          <input 
            {...register("Title", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })}
          type="text" placeholder="Title" class="input input-bordered" />
          {errors?.Title?.type === "required" && <p className='text-left text-red-500 mt-3'>This field is required</p>}
      {errors?.Title?.type === "maxLength" && (
        <p>Title cannot exceed 20 characters</p>
        )}
      {errors?.Title?.type === "pattern" && (
        <p >Alphabetical characters only</p>
      )}
        </div>



        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
           {...register("Description", {
            required: true,
       
        
          })}
          class="textarea textarea-bordered" placeholder="Description" ></textarea>
          {errors?.Description?.type === "required" && <p className='text-red-500 mt-3 text-left'>This field is required</p>}     
        </div>
<div class="w-96">
<DayPicker

      mode="single"
      selected={selectedDay}
      onSelect={setAgendaList}
      footer={footer}
    />
</div>


        <div class="form-control mt-6">
          <button class="btn btn-primary">Save</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>




        </>
    );
}

export default AgendaInput;