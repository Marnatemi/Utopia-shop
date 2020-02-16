/* SELECTORS */

export const getAllFilters = ({filters}) => filters;


/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_VOLUME = createActionName('CHANGE_VOLUME');
export const ADD_GENRE = createActionName('ADD_GENRE');
export const REMOVE_GENRE = createActionName('REMOVE_GENRE');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeVolume = payload => ({ payload, type: CHANGE_VOLUME });
export const addGenre = payload => ({ payload, type: ADD_GENRE });
export const removeGenre = payload => ({payload, type: REMOVE_GENRE });


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_VOLUME:
      return {
        ...statePart,
        volume:
        { ...statePart.volume,
          ...action.payload,
        },
      };
    case ADD_GENRE:
      return {
        ...statePart,
        genres: [...statePart.genres, action.payload],
      };
    case REMOVE_GENRE:
      return {
        ...statePart,
        genres: [...statePart.genres.filter(genre => genre != action.payload)],
      };
    default:
      return statePart;
  }
}
