import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {labels} from '../../strings';
import {RootState} from '../Store';

type homeToolabProps = {
  homeToolbarText: string;
};

const initialState: homeToolabProps = {
  homeToolbarText: labels.delivery,
};

export const homeToolbarSlice = createSlice({
  name: 'homeToolbarSlice',
  initialState,
  reducers: {
    setHomeToolbarText: (state: any, action: PayloadAction<string>) => {
      state.homeToolbarText = action.payload;
    },
  },
});

export const {setHomeToolbarText} = homeToolbarSlice.actions;

export const selectHomeToolbarText = (state: RootState) =>
  state.homeToolbarSlice.homeToolbarText;

export default homeToolbarSlice.reducer;
