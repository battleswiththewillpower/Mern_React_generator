//Child
import React, { useState } from 'react';


export const Box = (props) => {
    //setup a variable to use the state //Usestate = What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. 
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //pass onto newBox
        props.newBox(box);

   

    }  
   
  return (
    
        <form onSubmit={ handleSubmit }>

            <div>
            <label>Color: </label>
            <input type="text" name='box' value={box}
            onChange={e=>setBox(e.target.value)} placeholder="Add color"/>

            <button type='submit'> Add </button> 

            </div>

        </form>


    
  );
}
