export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case "initialState":
        return [...state, ...payload];
        case 'timeFilter':
            return state.filter( f =>  Number((f.fromTime).split(":",1)) >= payload.form && Number((f.toTime).split(":",1)) <= payload.to )
        default:
            return state;
    }
}