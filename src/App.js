import logo from './logo.svg';
import './App.css';
import AgendaInput from './Components/AgendaInput';

function App() {
  return (
    <>
    <div className="App">
       <h1 className="text-3xl font-bold  mt-5">
      Hiring Manager Task
    </h1>
      
      <div>
      <AgendaInput></AgendaInput>
      </div>


    </div>
    </>
  );
}

export default App;
