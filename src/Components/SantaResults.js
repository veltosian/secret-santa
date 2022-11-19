import React from 'react';

const SantaResults = (props) => {
  return (
    <React.Fragment>
      {props.results.map((result) => {
        return (
          <div key={result.santa.id}>
            <p>
              Santa {result.santa.name} --{'>'} {result.recipient.name}
            </p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SantaResults;
