
import React from 'react';
import { useForm } from "react-hook-form";


function AgendaInput(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };


    return (
        <div>
  


<div class="hero  bg-base-200">
  <div class="hero-content ">
   
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
            maxLength: 200,
        
          })}
          class="textarea textarea-bordered" placeholder="Description" ></textarea>
          {errors?.Description?.type === "required" && <p className='text-red-500 mt-3 text-left'>This field is required</p>}
      {errors?.Description?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
        )}
      
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Save</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>




        </div>
    );
}

export default AgendaInput;