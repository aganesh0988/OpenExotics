import { removeUser } from './auth';

const LOAD = "dealerships/LOAD";

const load = (dealerships) => {
    return {
        type: LOAD,
        dealerships
    };
};

export const getDealerships = () => async dispatch => {
    const res = await fetch('/api/dealerships');
    if (res.ok) {
        const data = await res.json();
        dispatch(load(data));
        return data;
    } else if (res.status === 401) {
        return dispatch(removeUser());
    }
    throw res;
};

export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD:
            return action.dealerships;
        default:
            return state;
    }
}
