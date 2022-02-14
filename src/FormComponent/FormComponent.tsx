import React from 'react'
import { DummyData } from './Dummydata';
import { Types } from './types';
import "./FormComponentStyles.css"
import BackLink from '../BackLink/BackLink';
import Button from '../ButtonComponent/Button';
import TableContent from '../TableContent/TableContent';

const FormComponent = (props: Types) => {
  const {isOpen,setIsOpen} = props;

    const [data, setData] = React.useState(DummyData);
    const submitFunction = () =>{
        console.log("Console submit")
    }
    const clickOutFunction = (e:any,str:String)=>{

      if(e.target.classList.contains(str)){
        setIsOpen()
      }
      return;
    }
    return (
    <div className={`${isOpen ? "shadow-wrapper" : "hide"}`} onClick={(e)=> clickOutFunction(e,'shadow-wrapper')}>
      <div className="wrapper-container">
        <div className="heading-wrapper">
          <div className="heading">{props.heading}</div>
        </div>
        <div className="subheading-wrapper">
          <div className="subheading">
            Please confirm which event categories this content should be added to.
          </div>
        </div>
        <div className="table-container">
          <div className="table-heading">
            <div className="heading-left">Event Category</div>
            <div className="heading-right">Add to Category</div>
          </div>
          <div className="table-contents">
            {data.map((value, index) => {
              return (
                <TableContent key={index} id={value.id} title={value.title} />
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <BackLink name={"Back"} onClick={setIsOpen}/>
          <Button name={"submit"} onClick={submitFunction} color={'purple'}/>
        </div>
      </div>
    </div>
    );
  };

  export default FormComponent