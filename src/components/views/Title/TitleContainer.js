import {connect} from 'react-redux';
import Title from './Title';
import {getTitleById} from '../../../redux/titlesRedux';
import {getSeriesById} from '../../../redux/allSeriesRedux';

const mapStateToProps = (state, props) => {
  const title = getTitleById(state, props.match.params.id);
  const series = getSeriesById(state, title.series.id);

  return {
    ...title,
    series,
  };
};

export default connect(mapStateToProps)(Title);
