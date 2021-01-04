import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [empName, setEmpName] = useState("");
  const [empDept, setEmpDept] = useState("");
  useEffect(() => {
    console.log("Use Effect Called");
  })
  
  return (
    <div className="App">      
      <div>
        <h1>Employee Name : {empName}</h1>
        <h1>Employee Dept. : {empDept}</h1>
      </div>
      <div>
        <input type="text" placeholder="Emplyee Name" name='empName' value={empName} onChange={e => setEmpName(e.target.value)} />
        <input type="text" placeholder="Emplyee Detp." name= 'empDept' value={empDept}  onChange={e => setEmpDept(e.target.value)}/>         
      </div>
    </div> 
  );
}

export default App;

/*
import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DigiClock from './components/DigiClock';
function App() {
  const [obj, changeCnt] = useState({counter:0, mFlag:true});
  //const [mFlag, setFlag] = useState(true);
  const inRef= useRef(null);
   
  const clickHandler =()=>{ 
    obj.counter = obj.counter + 1;
    changeCnt({...obj, counter : obj.counter});    
    //setFlag(!mFlag);
  }
  return (
    <div className="App">
      {<h1>cnt : {obj.counter} : {obj.mFlag+''}</h1>
      <input type="text" ref={inRef} />
      <button onClick={clickHandler}>Change Cnt</button>
      <button onClick={()=>changeCnt({...obj, mFlag : !obj.mFlag})}>Toggle</button>
      <h1>{JSON.stringify(obj)}</h1>
      <Counter />}
      <DigiClock />
    </div>
  );
}
export default App;*/
