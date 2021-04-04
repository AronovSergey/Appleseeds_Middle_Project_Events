import ticketMaster from '../apis/ticketMaster';

import { FETCH_EVENTS } from './actionTypes';

export const fetchEvents = (page) => async dispatch => {
    const { data } = await ticketMaster.get('/events.json', { 
        params: {
            apikey: 'dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0',
            countryCode: 'US',
            page: page
        }
    })

    const events = data._embedded.events;

    dispatch ({ 
        type: FETCH_EVENTS,
        payload: { events },
    });
};
