import React, { PropTypes } from 'react';
import styles from './searchbar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input type="text" className={styles.input} onChange={(e) => props.updateText(e.target.value)} />
    <button className={styles.button} onClick={props.fetchSongs}>Get Songs</button>
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
  btnName: PropTypes.string,
};

export default SearchBar;
