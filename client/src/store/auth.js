import Cookies from "js-cookie";

const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(`/api/sessions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { user } = await response.json();
            dispatch(setUser(user));
        }
    };
};

export const logout = () => async dispatch => {
    const res = await fetch('/api/sessions', {
        method: "delete"
    });
    if (res.ok) {
        dispatch(removeUser());
    }
}

function loadUser() {
    const authToken = Cookies.get("token");
    if (authToken) {
        try {
            const payload = authToken.split(".")[1];
            const decodedPayload = atob(payload);
            const payloadObj = JSON.parse(decodedPayload);
            const { data } = payloadObj;
            return data;
        } catch (e) {
            Cookies.remove("token");
        }
    }
    return {};
}

export default function reducer(state = loadUser(), action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}
