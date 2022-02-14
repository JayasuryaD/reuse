import React from 'react';
import './App.css';
import Button from './ButtonComponent/Button';
import FormComponent from './FormComponent/FormComponent'

function App() {
  const [isOpen,setIsOpen] = React.useState(false)
  const DummyFunction = () =>{
    setIsOpen((value)=>{
      return !value
    })
  }
  const hideModel = () =>{
    setIsOpen(false)
  }
  return (
    <div className="App">
      <Button name={"🖉click"} onClick={DummyFunction}/>
      <FormComponent isOpen={isOpen} heading={"Please confirm category details"} setIsOpen={hideModel}/>
    </div>
  );
}

export default App;
