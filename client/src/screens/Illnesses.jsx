import React from 'react';
import {Link} from 'react-router-dom'

function Illnesses(props) {
  const {illnesses} = props
  return (
    <div>
      <h3>
        Illnesses
      </h3>
      {illnesses.map((illness) => (
        <React.Fragment key={illness.id}>
          <Link to={`/illnesses/${illness.id}`}><p>{illness.name}</p></Link>
          <Link to={`/illnesses/${illness.id}`}>
            <img src={illness.image} alt={illness.name}></img>
            </Link>
         
        </React.Fragment>
      ))}
    </div>
  )
}

export default Illnesses
