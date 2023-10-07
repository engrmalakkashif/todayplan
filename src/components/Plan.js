import { Button } from 'antd';
import React from 'react';

const Plan = (props) => {
  return (
    <>
    <li className="shadow p-1 rounded mx-1 my-1 col-sm-4">{props.value}</li>
    <Button onClick={()=> {props.sendData(props.id)}} className='btn btn-danger p-1 my-1 mx-3 col-sm-3'>X</Button>
    </>
  )
}

export default Plan;