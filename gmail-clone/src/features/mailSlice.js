import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMassageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSendMessage: state => {
      state.sendMassageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMassageIsOpen = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },


});

export const { openSendMessage, closeSendMessage, incrementByAmount } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMassageIsOpen;



export default mailSlice.reducer;
