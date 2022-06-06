import React from 'react'


const DisplayBoxes = (props) =>{
    // console.log(props.currBox)
    return (
         <div>

        {
            props.boxes.map((box, i ) =>{
                return (
                    <div key={i} style={{ backgroundColor:box, width:100, height: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} > {box}</div>
                    )
                })
            }
        </div>
    )

}


 export default DisplayBoxes