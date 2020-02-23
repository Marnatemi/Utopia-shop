import {connect} from 'react-redux';
import AllSeries from './AllSeries';
import {getAllSeries} from '../../../redux/allSeriesRedux';

const mapStateToProps = state => ({
  allSeries: getAllSeries(state),
});

export default connect(mapStateToProps)(AllSeries);
