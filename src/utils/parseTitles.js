import series from '../data/series.json';
import pricing from '../data/pricing.json';

const parseTitles = (titles, setStates) => {
  const newState = {
    series: {},
    authors: {},
    publishers: {},
    tags: {},
    order: {
      title: null,
      email: '',
      options: {},
    },
  };

  for(let title of titles){

    /* add series to newState.series */
    if(typeof(newState.series[title.series.name]) == 'undefined'){
      const seriesDetails = series.filter(item => item.name == title.series.name)[0] || {};
      newState.series[title.series.name] = JSON.parse(JSON.stringify(seriesDetails));
      newState.series[title.series.name].titles = [title.id];
    } else {
      newState.series[title.series.name].titles.push(title.id);
    }

    /* add all tags to newState.tags */
    for(let tag of title.tags){
      if(typeof(newState.tags[tag]) == 'undefined'){
        newState.tags[tag] = {titles: [title.id]};
      } else {
        newState.tags[tag].titles.push(title.id);
      }
    }
  }

  for(let seriesname in newState.series){
    const series = newState.series[seriesname];

    /* add author to newState.authors */
    if(typeof(newState.authors[series.author]) == 'undefined'){
      newState.authors[series.author] = {
        series: [series.name],
        publishers: [series.publisher],
      };
    } else if(newState.authors[series.author].publishers.indexOf(series.publisher) == -1) {
      newState.authors[series.author].publishers.push(series.publisher);
      newState.authors[series.author].series.push(series.name);
    } else if(newState.authors[series.author].series.indexOf(series.name) == -1) {
      newState.authors[series.author].series.push(series.name);
    }

    /* add publisher to newState.publishers */
    if(typeof(newState.publishers[series.publisher]) == 'undefined'){
      newState.publishers[series.publisher] = {
        author: series.author,
        series: [series.name],
      };
    } else if(newState.publishers[series.publisher].series.indexOf(series.name) == -1) {
      newState.publishers[series.publisher].series.push(series.name);
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
