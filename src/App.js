import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Titles from './components/views/Titles/TitlesContainer';
import Title from './components/views/Title/TitleContainer';
import Series from './components/views/Series/SeriesContainer';
import AllSeries from './components/views/AllSeries/AllSeriesContainer';
import Authors from './components/views/Authors/AuthorsContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

import parseTitles from './utils/parseTitles';
import {setMultipleStates} from './redux/globalRedux';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    titles: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse titles when App is first created
    parseTitles(this.props.titles, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.titles != this.props.titles){
      // parse titles again if they changed
      parseTitles(this.props.titles, this.props.setStates);
    }
  }



  render(){

    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{opacity: 0, top: 200}}
            atLeave={{opacity: 0}}
            atActive={{opacity: 1, top: 0}}
            className ={styles.switchWrapper}>

            <Route exact path='/' component={Home} />
            <Route exact path='/titles' component={Titles} />
            <Route exact path='/allSeries' component={AllSeries} />
            <Route exact path='/authors' component={Authors} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/title/:id' component={Title} />
            <Route exact path='/series/:id' component={Series} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  titles: state.titles,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
