// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {RootState} from '../Store';

// type navigationSliceProps = {
//   isReady: boolean;

// };

// const initialState: navigationSliceProps = {
//   heart: false,
//   resturantData: [],
// };

// export const navigationSlice = createSlice({
//   name: 'navigationSlice',
//   initialState,
//   reducers: {
//     setHeart: (state: any, action: PayloadAction<boolean>) => {
//       state.heart = action.payload;
//     },
//     setResturantData: (state: any, action: any) => {
//       state.resturantData = [...state.resturantData, ...action.payload];
//     },
//     setResturantDataFilter: (state: any, action: PayloadAction<string>) =>
//       void (state.resturantData = state.resturantData.filter((resturant: any) =>
//         resturant.transactions.includes(action.payload.toLowerCase()),
//       )),
//   },
// });

// export const {setHeart, setResturantData, setResturantDataFilter} =
//   resturantSlice.actions;

// export const selectHeart = (state: RootState) => state.navigationSlice.heart;
// export const selectResturantData = (state: RootState) =>
//   state.navigationSlice.resturantData;

// export default navigationSlice.reducer;
