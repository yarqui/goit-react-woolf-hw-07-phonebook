const isPendingAction = (action) => action.type.endsWith("pending");

const handlePending = (state) => {
  state.isLoading = true;
};

const isRejectedAction = (action) => action.type.endsWith("rejected");

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
};

const isFulfilledAction = (action) => action.type.endsWith("fulfilled");

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export {
  isPendingAction,
  handlePending,
  isRejectedAction,
  handleRejected,
  isFulfilledAction,
  handleFulfilled,
};
