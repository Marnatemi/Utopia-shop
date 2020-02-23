import {connect} from 'react-redux';
import Titles from './Titles';
import {getFilteredTitles} from '../../../redux/titlesRedux';

const mapStateToProps = state => ({
  titles: getFilteredTitles(state),
});

export default connect(mapStateToProps)(Titles);
