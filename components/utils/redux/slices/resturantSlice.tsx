import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';

type resturantSliceProps = {
  heart: boolean;
  resturantData: [];
};

const initialState: resturantSliceProps = {
  heart: false,
  resturantData: [],
};

export const resturantSlice = createSlice({
  name: 'resturantSlice',
  initialState,
  reducers: {
    setHeart: (state: any, action: PayloadAction<boolean>) => {
      state.heart = action.payload;
    },
    setResturantData: (state: any, action: any) => {
      state.resturantData = [...state.resturantData, ...action.payload];
    },
  },
});

export const {setHeart, setResturantData} = resturantSlice.actions;

export const selectHeart = (state: RootState) => state.resturantSlice.heart;
export const selectResturantData = (state: RootState) =>
  state.resturantSlice.resturantData;

export default resturantSlice.reducer;
