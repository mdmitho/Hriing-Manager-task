const AgendaList =({agenda})=>{
const{Title, Description}=agenda

    console.log(agenda)
    return( <>
        
        <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
  
    <tbody className="">
     
      <tr >
       
        <td>{Title}</td>
        <td>{Description}</td>
        <td>Blue</td>
      </tr>
    
    </tbody>
  </table>
</div>


        </>
        )
       
    
}

export default AgendaList;