import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleListOptions.scss';

import {Row, Col} from 'react-flexbox-grid';

class TitleListOptions extends React.Component {
  handleGenres(genre, checked){
    if(checked) {
      console.log('Adding genre', genre);
      // TODO - use action dispatcher from props
      this.props.addGenre(genre);

    } else {
      console.log('Removing genre', genre);
      // TODO - use action dispatcher from props
      this.props.removeGenre(genre);
    }
  }

  handleVolumes(type, value){
    console.log('Changing volumes', type, value);
    // TODO - use action dispatcher from props
    this.props.changeVolumes(type, value);
  }

  handleSearch(phrase){
    this.props.changeSearchPhrase(phrase);
  }

  render(){
    const {genres, filters} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                Volumes from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.volumes.from} min='1' max='100' onChange={event => this.handleVolumes('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.volumes.to} min='1' max='100' onChange={event => this.handleVolumes('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by Genre</summary>
                <div className={styles.dropdown}>
                  {Object.keys(genres).map(genre => (
                    <label key={genre} className={styles.option}>
                      <input type='checkbox' checked={filters.genres.indexOf(genre) > -1} onChange={event => this.handleGenres(genre, event.currentTarget.checked)} />
                      {genre}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TitleListOptions.propTypes = {
  genres: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  changeVolumes: PropTypes.func,
  addGenre: PropTypes.func,
  removeGenre: PropTypes.func,
};

export default TitleListOptions;
