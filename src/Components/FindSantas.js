import React, { useState } from 'react';
import { determineSantas } from '../utilities/santaOrdering';
import SantaResults from './SantaResults';
import styles from './FindSantas.module.css';
import Card from './UI/Card';

const FindSantas = (props) => {
  const [santas, setSantas] = useState([]);
  const [errorGettingSantas, setErrorGettingSantas] = useState(false);
  const [foundSantas, setFoundSantas] = useState(false);

  const getSantas = () => {
    setFoundSantas(true);
    try {
      setSantas(determineSantas(props.players, props.rules));
      setErrorGettingSantas(false);
    } catch (e) {
      setErrorGettingSantas(true);
    }
  };

  return (
    <React.Fragment>
      <button className={styles['find-santas-button']} onClick={getSantas}>
        Find Santas
      </button>
      {foundSantas && (
        <Card className={styles['santa-display']}>
          {!errorGettingSantas && <SantaResults results={santas} />}
          {errorGettingSantas && (
            <p>
              We couldn't find a set of santas that satisfies all the rules.
            </p>
          )}
        </Card>
      )}
    </React.Fragment>
  );
};

export default FindSantas;
