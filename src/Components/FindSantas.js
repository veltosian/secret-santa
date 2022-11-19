import React, { useState } from 'react';
import { determineSantas } from '../utilities/santaOrdering';
import SantaResults from './SantaResults';

const FindSantas = (props) => {
  const [santas, setSantas] = useState([]);

  const getSantas = () => {
    setSantas(determineSantas(props.players));
  };

  return (
    <React.Fragment>
      <button onClick={getSantas}>Find Santas</button>
      <SantaResults results={santas} />
    </React.Fragment>
  );
};

export default FindSantas;
