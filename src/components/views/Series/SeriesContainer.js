import {connect} from 'react-redux';
import Series from './Series';
import { getSeriesByName } from '../../../redux/allSeriesRedux';
import { getTitlesForSeries } from '../../../redux/titlesRedux';

const mapStateToProps = (state, props) => {
  const series = getSeriesByName(state, props.match.params.id);
  {console.log('LOL', series);}
  const titles = getTitlesForSeries(state, series.name);
  {console.log('LOL2', titles);}
  return {
    ...series,
    titles,
  };
};

export default connect(mapStateToProps)(Series);
