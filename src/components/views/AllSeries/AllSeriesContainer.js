import {connect} from 'react-redux';
import Series from './AllSeries';
import {getAllSeries} from '../../../redux/seriesRedux';

const mapStateToProps = state => ({
  series: getAllSeries(state),
});

export default connect(mapStateToProps)(Series);
