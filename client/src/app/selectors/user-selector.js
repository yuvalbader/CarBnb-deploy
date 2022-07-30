const getUserState = (state) => state.userSlice;

export const getUserId = (state) => getUserState(state).user.id;
