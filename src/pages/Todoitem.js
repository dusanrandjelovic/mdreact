import React from 'react'

function Todoitem(props){

const stilZaIspunjen = {
  color: "grey",
  textDecoration: "line-through",
  fontStyle: "italic"
}

    return(
      <div className="todoitem">
          <input type="checkbox" 
          checked={props.objekat.completed} 
          onChange={() => props.handleChange(props.objekat.broj)}></input>
          <p style={props.objekat.completed ? stilZaIspunjen : null}>{props.objekat.zadatak}</p>
        
      </div>
    )
}
// moze i ovako style={props.objekat.completed && stilZaIspunjen}
// 
export default Todoitem