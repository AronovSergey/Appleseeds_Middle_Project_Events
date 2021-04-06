import ticketMaster from '../apis/ticketMaster';

import { 
    FETCH_EVENTS, 
    UPDATE_HOVERED_EVENT, 
    FETCH_NUMBER_OF_PAGES,
    CHANGE_SELECTED_EVENT
} from './actionTypes';


/* --------------- Events --------------- */

export const fetchEvents = (type, page) => async dispatch => {
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
};

export const fetchNumberOfPages = (type) => async dispatch => {
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
};

export const changeHoveredEvent = (event) => dispatch => {
    dispatch ({ 
        type: UPDATE_HOVERED_EVENT,
        payload: { event }
    });
}


/* --------------- Specific Event --------------- */
export const changeSelectedEvent = (type, id) => async dispatch => {
    const { data } = await ticketMaster.get(`/${type}/${id}.json`, { 
        params: {
            apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
        }
    })

    dispatch ({ 
        type: CHANGE_SELECTED_EVENT,
        payload: { event: data }
    });
}