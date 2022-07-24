const getView = (state) => state.viewSlice;

export const getIsLoading = (state) => getView(state).isLoading;
export const getIsError = (state) => getView(state).isError;
