import {connect} from 'react-redux';
import Series from './Series';
import { getSeriesByName } from '../../../redux/allSeriesRedux';
import { getTripsForSeries } from '../../../redux/titlesRedux';

const mapStateToProps = (state, props) => {
  const series = getSeriesByName(state, props.match.params.id);
  const trips = getTripsForSeries(state, series.name);

  return {
    ...series,
    trips,
  };
};

export default connect(mapStateToProps)(Series);
