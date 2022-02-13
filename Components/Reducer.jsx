export default function reducer(state, action) {
    const { type, payload } = action;
    let newState = [...state];
    switch (type) {
        case 'initialState':
            return state;
        case 'timeFilter':
            return newState.filter(flight => (flight.fromTime).split(':')[0] >= payload.from)
        case 'companyFilter':
            return newState.filter(flight => flight.airline === payload.companyName)
        case 'companyFilter2':
            if (
                payload.filters.length === 0 ||
                payload.filters.length === payload.company.length
            ) {
                return state;
            } else {

                return state.filter(f => payload.company.indexOf(f.airline));
            }
        default:
            return state;
    }
}
