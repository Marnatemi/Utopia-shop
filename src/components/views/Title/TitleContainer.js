import {connect} from 'react-redux';
import Title from './Title';
import {getTitleById} from '../../../redux/titlesRedux';
import {getSeriesByCode} from '../../../redux/allSeriesRedux';

const mapStateToProps = (state, props) => {
  const title = getTitleById(state, props.match.params.id);
  const series = getSeriesByCode(state, title.series.name);

  return {
    ...title,
    series,
  };
};

export default connect(mapStateToProps)(Title);
