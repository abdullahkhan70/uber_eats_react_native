import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';

type resturantSliceProps = {
  heart: boolean;
  resturantData: [];
  aboutData: {
    name: string;
    image_url: string;
    price: string;
    review_count: number;
    rating: number;
    categories: [{title: string}];
  };
  selectedMenuItems: [
    {
      id: number;
      title: string;
      description: string;
      price: string;
      image: number;
    },
  ];
};

const initialState: resturantSliceProps = {
  heart: false,
  resturantData: [],
  aboutData: {
    name: '',
    image_url: '',
    price: '',
    review_count: 0,
    rating: 0,
    categories: [{title: ''}],
  },
  selectedMenuItems: [],
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
    setResturantDataFilter: (state: any, action: PayloadAction<string>) =>
      void (state.resturantData = state.resturantData.filter((resturant: any) =>
        resturant.transactions.includes(action.payload.toLowerCase()),
      )),
    setAboutData: (state: any, action: PayloadAction<object>) => {
      state.aboutData = action.payload;
    },
    setSelectedMenuItems: (state: any, action: any) => {
      state.selectedMenuItems = [...state.selectedMenuItems, action.payload];
    },
    setRemoveSelectedMenuItems: (state: any, action: any) =>
      void (state.selectedMenuItems = state.selectedMenuItems.filter(
        (item: any) => item?.id != action?.payload,
      )),
    setRemoveAllSelectedMenuItems: (state: any, action: any) => {
      state.selectedMenuItems = [];
    },
  },
});

export const {
  setHeart,
  setResturantData,
  setResturantDataFilter,
  setAboutData,
  setSelectedMenuItems,
  setRemoveSelectedMenuItems,
  setRemoveAllSelectedMenuItems,
} = resturantSlice.actions;

export const selectHeart = (state: RootState) => state.resturantSlice.heart;
export const selectResturantData = (state: RootState) =>
  state.resturantSlice.resturantData;
export const selectAboutData = (state: RootState) =>
  state.resturantSlice.aboutData;
export const selectSelectedMenuItems = (state: RootState) =>
  state.resturantSlice.selectedMenuItems;

export default resturantSlice.reducer;
