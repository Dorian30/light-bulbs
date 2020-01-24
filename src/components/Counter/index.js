import React from 'react';

import styles from './styles.module.scss';

function Counter({ bulbs }) {
  const lightsTurned = bulbs.filter(bulb => bulb).length;
  return(
    <div className={styles.counter}>
      {lightsTurned}
    </div>
  );
}

export default Counter; 
