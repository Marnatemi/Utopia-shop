import {connect} from 'react-redux';
import Authors from './Authors';
import { getAllAuthors } from '../../../redux/authorsRedux';
import { getAllPublishers } from '../../../redux/publishersRedux';
import { getAllSeries } from '../../../redux/allSeriesRedux';

const mapStateToProps = state => ({
  authors: getAllAuthors(state),
  publishers: getAllPublishers(state),
  allSeries: getAllSeries(state),
});

export default connect(mapStateToProps)(Authors);
