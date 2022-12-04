import React from 'react';

const SantaResults = (props) => {
  return (
    <React.Fragment>
      {props.results
        .sort((a, b) =>
          a.santa.name.toLowerCase().localeCompare(b.santa.name.toLowerCase())
        )
        .map((result) => {
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
