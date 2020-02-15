/* SELECTORS */

export const getAllTitles = ({titles}) => titles;

export const getFilteredTitles = ({titles, filters}) => {
  let output = titles;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(title => pattern.test(title.name));
  }

  // TO DO - filter by duration
  if(filters.duration) {
    output = output.filter(title => filters.duration.from <= title.volumes && title.volumes <= filters.duration.to) ;
  }

  // DONE - filter by tags

  if(filters.tags){
    for (let tag of filters.tags) {
      output =  output.filter(title => title.tags.indexOf(tag) >= 0);
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({titles}, titleId) => {


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
