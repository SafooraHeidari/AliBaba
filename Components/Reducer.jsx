export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case "initialState":
        return [...state, ...payload];
        case 'timeFilter':
            const newState = [...state];
            return newState.filter(flight => (flight.fromTime).split(':')[0] >= payload.from)
        default:
            return state;
    }
}
