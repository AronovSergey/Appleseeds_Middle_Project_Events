import ticketMaster from '../apis/ticketMaster';

import { 
    FETCH_EVENTS, 
    UPDATE_HOVERED_EVENT, 
    FETCH_NUMBER_OF_PAGES,
    CHANGE_SELECTED_EVENT,
    FETCH_200_EVENTS,
    CHANGE_SEARCH_RESULTS,
    UPDATE_FAVORITES
} from './actionTypes';

/* --------------- Calender --------------- */
export const fetch200Events = () => async dispatch => {
    try {
        const { data } = await ticketMaster.get("/events.json", { 
            params: {
                apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
                size: 200,
                sort: 'date,asc',
            }
        })


        const events = data._embedded.events;

        dispatch ({ 
            type: FETCH_200_EVENTS,
            payload: { events },
        });
    } catch (error) {
        console.error(error);
    }
};


/* --------------- Events --------------- */
export const fetchEvents = (type, page) => async dispatch => {
    try {
        const { data } = await ticketMaster.get(`/${type}.json`, { 
            params: {
                apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
                countryCode: 'US',
                page: page
            }
        })

        const events = data._embedded[type === 'events' ? 'events' : 'attractions'];

        dispatch ({ 
            type: FETCH_EVENTS,
            payload: { events },
        });
    } catch (error) {
        console.error(error);
    }
};

export const fetchNumberOfPages = (type) => async dispatch => {
    try {
        const { data } = await ticketMaster.get(`/${type}.json`, { 
            params: {
                apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
                countryCode: 'US',
            }
        })

        dispatch ({ 
            type: FETCH_NUMBER_OF_PAGES,
            payload: { 
                numberOfPages: data.page.totalPages,
                type: type
            },
        });
    } catch (error) {
        console.error(error);
    }
};

export const changeHoveredEvent = (event) => dispatch => {
    dispatch ({ 
        type: UPDATE_HOVERED_EVENT,
        payload: { event }
    });
}


/* --------------- Specific Event --------------- */
export const changeSelectedEvent = (type, id) => async dispatch => {
    try {
        const { data } = await ticketMaster.get(`/${type}/${id}.json`, { 
            params: {
                apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
            }
        })

        dispatch ({ 
            type: CHANGE_SELECTED_EVENT,
            payload: { event: data }
        });
    } catch (error) {
        console.error(error);
    }
}


/* --------------- Specific Event --------------- */
export const changeSearchResults = (keyword) => async dispatch => {
    try {
        const { data } = await ticketMaster.get("/events.json", { 
            params: {
                apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
                keyword: keyword
            }
        })

        const events = data._embedded ? data._embedded.events : [];
        
        dispatch ({ 
            type: CHANGE_SEARCH_RESULTS,
            payload: { events },
        });
    } catch (error) {
        console.error(error);
    }
}


/* --------------- Favorites --------------- */
export const updateFavorites = (number) => dispatch => {
    dispatch ({ 
        type: UPDATE_FAVORITES,
        payload: { number }
    });
}