import { connect } from 'react-redux';
import Series from './Series';
import { getSeriesById } from '../../../redux/allSeriesRedux';
import { getTitlesForSeries } from '../../../redux/titlesRedux';

const mapStateToProps = (state, props) => {
  const series = getSeriesById(state, props.match.params.id);
  const titles = getTitlesForSeries(state, series.name);
  return {
    ...series,
    titles,
  };
};

export default connect(mapStateToProps)(Series);
