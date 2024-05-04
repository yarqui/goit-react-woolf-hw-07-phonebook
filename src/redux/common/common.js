const isPendingAction = (action) => action.type.endsWith("pending");

const handlePending = (state) => {
  state.isLoading = true;
};

const isRejectedAction = (action) => action.type.endsWith("rejected");

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
};

export { isPendingAction, handlePending, isRejectedAction, handleRejected };
