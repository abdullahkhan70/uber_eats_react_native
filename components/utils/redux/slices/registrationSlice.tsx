import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../Store';

type RegistrationState = {
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
};

const initialState: RegistrationState = {
  first_name: 'Abdullah',
  last_name: '',
  email_address: '',
  password: '',
};

export const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState,
  reducers: {
    setFirstName: (state: any, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
    setLastName: (state: any, action: PayloadAction<string>) => {
      state.last_name = action.payload;
    },
    setEmailAddress: (state: any, action: PayloadAction<string>) => {
      state.email_address = action.payload;
    },
    setPassword: (state: any, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {setFirstName, setLastName, setEmailAddress, setPassword} =
  registrationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFirstName = (state: RootState) =>
  state.registrationSlice.first_name;
export const selectLastName = (state: RootState) =>
  state.registrationSlice.last_name;
export const selectEmailAddress = (state: RootState) =>
  state.registrationSlice.email_address;
export const selectPassword = (state: RootState) =>
  state.registrationSlice.password;

export default registrationSlice.reducer;
