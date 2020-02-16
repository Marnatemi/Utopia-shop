import {connect} from 'react-redux';
import TitleListOptions from './TitleListOptions';
import {getAllGenres} from '../../../redux/genresRedux';
import {getAllFilters, changeSearchPhrase, changeVolume, addGenre, removeGenre} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  genres: getAllGenres(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeVolume: (type, value) => dispatch(changeVolume({[type]: value})),
  addGenre: genre => dispatch(addGenre(genre)),
  removeGenre: genre => dispatch(removeGenre(genre)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TitleListOptions);
