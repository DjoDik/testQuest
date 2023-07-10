import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const modalPropsSlice = createSlice({
  name: 'modalProps',
  initialState,
  reducers: {
    getModalData: (state, action: PayloadAction<{}>) => {
      return state = action.payload
    },
  },
});

export const { getModalData } = modalPropsSlice.actions;
export default modalPropsSlice.reducer;
