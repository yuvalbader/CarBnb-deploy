const getSearch = (state) => state.searchSlice
const getWhere = (state) => getSearch(state).where
const getFrom = (state) => getSearch(state).from
const getUntill = (state) => getSearch(state).untill
const getTimeToPick = (state) => getSearch(state).timeToPick
const getTimeToDrop = (state) => getSearch(state).timeToDrop

export { getSearch, getWhere, getFrom, getUntill, getTimeToPick, getTimeToDrop }
