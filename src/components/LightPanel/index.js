import React, { Component } from 'react';

import styles from './styles.module.scss';

class LightPanel extends Component {
  state = {
    bulbs: [true, true, false, true, false, false, true, false, true, true, false, true]
  }

  handleClick = index => {
    const bulbs = [...this.state.bulbs];
    bulbs[index] = !bulbs[index];
    this.setState({ bulbs });
  }

  render() {
    return (
      <div className={styles['light-panel']} >
        {this.state.bulbs.map((bulb, index) => 
          <div className={styles['bulb-container']}>
            <div className={bulb ? styles['bulb-on'] : styles['bulb-of']}></div>
            <button className={styles.switch} onClick={() => this.handleClick(index)}>ON/OFF</button>
          </div>
        )}
      </div>
    );
  }
}

export default LightPanel;
