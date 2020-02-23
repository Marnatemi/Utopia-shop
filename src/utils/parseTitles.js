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
    if(typeof(newState.allSeries[title.series.id]) == 'undefined'){
      const seriesDetails = allSeries.filter(item => item.id == title.series.id)[0] || {};
      newState.allSeries[title.series.id] = JSON.parse(JSON.stringify(seriesDetails));
      newState.allSeries[title.series.id].titles = [title.id];
    } else {
      newState.allSeries[title.series.id].titles.push(title.id);
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

  for(let seriesId in newState.allSeries){
    const series = newState.allSeries[seriesId];
    /* add author to newState.authors */
    if(typeof(newState.authors[series.author]) == 'undefined'){
      newState.authors[series.author] = {
        allSeries: [series.id],
        publishers: [series.publisher],
      };
    } else if(newState.authors[series.author].publishers.indexOf(series.publisher) == -1) {
      newState.authors[series.author].publishers.push(series.publisher);
      newState.authors[series.author].allSeries.push(series.id);
    } else if(newState.authors[series.author].allSeries.indexOf(series.id) == -1) {
      newState.authors[series.author].allSeries.push(series.id);
    }

    /* add publisher to newState.publishers */
    if(typeof(newState.publishers[series.publisher]) == 'undefined'){
      newState.publishers[series.publisher] = {
        author: series.author,
        allSeries: [series.id],
      };
    } else if(newState.publishers[series.publisher].allSeries.indexOf(series.id) == -1) {
      newState.publishers[series.publisher].allSeries.push(series.id);
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
