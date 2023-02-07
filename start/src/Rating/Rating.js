import { useState } from "react";
const Rating = ({rank}) => {

  const [note, setNote] = useState(rank);

  const onUpdateNote = (newNote)=>{
    setNote(newNote);
  }

  const ratingStyle = {
    fontSize : "30px",
    color: "orange",
    cursor: "pointer"
  }

  const stars=[];

  for(let j=0; j<5; j++){

    let star = (j<note) ? <span>&#9733;</span> : <span>&#9734;</span>;
    stars.push(<a key={j} onClick={()=>onUpdateNote(j+1)}>{star}</a>);
  }

  return ( <div style={ratingStyle}>{stars}</div> );
}
 
export default Rating;