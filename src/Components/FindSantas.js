import React, { useState } from 'react';
import { determineSantas } from '../utilities/santaOrdering';
import SantaResults from './SantaResults';

const FindSantas = (props) => {
  const [santas, setSantas] = useState([]);
  const [errorGettingSantas, setErrorGettingSantas] = useState(false);

  const getSantas = () => {
    try {
      setSantas(determineSantas(props.players, props.rules));
      setErrorGettingSantas(false);
    } catch (e) {
      setErrorGettingSantas(true);
    }
  };

  return (
    <React.Fragment>
      <button onClick={getSantas}>Find Santas</button>
      {!errorGettingSantas && <SantaResults results={santas} />}
      {errorGettingSantas && (
        <p>We couldn't find a set of santas that satisfies all the rules.</p>
      )}
    </React.Fragment>
  );
};

export default FindSantas;
