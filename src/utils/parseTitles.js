import allSeries from '../data/allSeries.json';
import pricing from '../data/pricing.json';

const parseTitles = (titles, setStates) => {
  const newState = {
    allSeries: {},
    authors: {},
    publishers: {},
    genres: {},
    order: {
      title: null,
      email: '',
      options: {},
    },
  };

  for(let title of titles){

    /* add series to newState.series */
    if(typeof(newState.allSeries[title.series.name]) == 'undefined'){
      const seriesDetails = allSeries.filter(item => item.name == title.series.name)[0] || {};
      newState.allSeries[title.series.name] = JSON.parse(JSON.stringify(seriesDetails));
      newState.allSeries[title.series.name].titles = [title.id];
    } else {
      newState.allSeries[title.series.name].titles.push(title.id);
    }

    /* add all genres to newState.genres */
    for(let genre of title.genres){
      if(typeof(newState.genres[genre]) == 'undefined'){
        newState.genres[genre] = {titles: [title.id]};
      } else {
        newState.genres[genre].titles.push(title.id);
      }
    }
  }

  for(let seriesName in newState.series){
    const series = newState.allSeries[seriesName];

    /* add author to newState.authors */
    if(typeof(newState.authors[series.author]) == 'undefined'){
      newState.authors[series.author] = {
        allSeries: [series.name],
        publishers: [series.publisher],
      };
    } else if(newState.authors[series.author].publishers.indexOf(series.publisher) == -1) {
      newState.authors[series.author].publishers.push(series.publisher);
      newState.authors[series.author].allSeries.push(series.name);
    } else if(newState.authors[series.author].allSeries.indexOf(series.name) == -1) {
      newState.authors[series.author].allSeries.push(series.name);
    }

    /* add publisher to newState.publishers */
    if(typeof(newState.publishers[series.publisher]) == 'undefined'){
      newState.publishers[series.publisher] = {
        author: series.author,
        allSeries: [series.name],
      };
    } else if(newState.publishers[series.publisher].allSeries.indexOf(series.name) == -1) {
      newState.publishers[series.publisher].allSeries.push(series.name);
    }
  }

  for(let option of pricing){
    if(typeof(option.defaultValue) != 'undefined'){
      newState.order.options[option.id] = option.defaultValue;
    } else if(typeof(option.limits) != 'undefined' && typeof(option.limits.min) != 'undefined'){
      newState.order.options[option.id] = option.limits.min;
    } else if(option.type == 'checkboxes'){
      newState.order.options[option.id] = [];
    } else {
      newState.order.options[option.id] = '';
    }
  }

  setStates(newState);
};

export default parseTitles;
