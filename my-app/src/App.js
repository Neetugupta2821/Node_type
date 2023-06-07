
import './App.css';
// import FirstForm from './component/FirstForm';
// import Table from './component/Table';
import Note from './component/Note';
// import Mycomponent from './component/Mycomponent';
// import ThemeContex from './context/ThemeContex';
// import UseReducerType from './component/UseReducerType';
// import IndexType from './component/IndexType';



function App() {
  // const [mode, setMode] = useState('lightmode');
   
const sum=()=>{
  alert(2+5)
}

  return (
    <div className="App">
      <>
        
          <Note />
          {/* <Mycomponent /> */}
          {/* <UseReducerType/>
          <IndexType count={sum}/> */}
         
      </>
    </div>
  );
}

export default App;
