/* SELECTORS */

export const getAllTitles = ({titles}) => titles;

export const getFilteredTitles = ({titles, filters}) => {
  let output = titles;
  console.log(filters);
  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(title => pattern.test(title.name));
  }

  // DONE - filter by volume
  if(filters.volume) {
    output = output.filter(title => filters.volume.from <= title.volume && title.volume <= filters.volume.to) ;
  }

  // DONE - filter by genres

  if(filters.genres){
    for (let genre of filters.genres) {
      output =  output.filter(title => title.genres.indexOf(genre) >= 0);
    }
  }
  // TODO - sort by cost descending (most expensive goes first)
  return output;
};

export const getTitleById = ({titles}, titleId) => {


  const filtered =  titles.filter(title => title.id == titleId);

  console.log('filtering titles by titleId:', titleId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTitlesForSeries = ({titles}, seriesName) => {

  const filtered = titles.filter(title => title.series.name == seriesName);

  console.log('filtering titles by seriesName:', seriesName, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'titles';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
