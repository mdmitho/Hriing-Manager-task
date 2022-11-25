
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import AgendaList from './AgendaList';



 const AgendaInput=()=> {

    const [selectedDay, setSelectedDay] = useState(new Date());
 
    const footer = selectedDay ? (
      <p>{format(selectedDay, 'PP')}</p>
    ) : (
      <></>
    );
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();



      const onSubmit = (data,e) => {
        const allData ={
            Title:data.Title,
            Description:data.Description,
            selectedDay:footer.props.children,
        }
        
        // setAddedAgenda(data,selectedDay)
        const url = `https://nameless-lake-27327.herokuapp.com/AddAgendaList`;
        console.log(url);
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(allData),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
       
          e.target.reset();
          setTimeout("location.reload(true);", 500)
      };


     

    return (
        <>
  


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">

<AgendaList/>
    
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
      onSelect={setSelectedDay}
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