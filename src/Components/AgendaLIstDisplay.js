const AgendaListDisplay =({agenda,DeleteBtn })=>{
const {Title,Description,selectedDay,_id} = agenda
    return(
        <>
        
        <tr>
<td>{Title}</td>
<td>{Description}</td>
<td>{selectedDay}</td>

<td><button 
onClick={() => DeleteBtn(agenda._id)}
class="btn btn-error">Delete</button></td>
       </tr>
        
        </>
    )
}

export default AgendaListDisplay;