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
  viewCartModal: Boolean;
  orderData: [
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
  viewCartModal: false,
  orderData: [],
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
    setViewCartModal: (state: any, action: PayloadAction<Boolean>) => {
      state.viewCartModal = action.payload;
    },

    setOrderData: (state: any, action: any) => {
      state.orderData = [...state.orderData, action.payload];
    },
    setRemoveAllOrderData: (state: any, action: any) => {
      state.orderData = [];
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
  setViewCartModal,
  setOrderData,
  setRemoveAllOrderData,
} = resturantSlice.actions;

export const selectHeart = (state: RootState) => state.resturantSlice.heart;
export const selectResturantData = (state: RootState) =>
  state.resturantSlice.resturantData;
export const selectAboutData = (state: RootState) =>
  state.resturantSlice.aboutData;
export const selectSelectedMenuItems = (state: RootState) =>
  state.resturantSlice.selectedMenuItems;
export const selectViewCartModal = (state: RootState) =>
  state.resturantSlice.viewCartModal;
export const selectOrderData = (state: RootState) =>
  state.resturantSlice.orderData;

export default resturantSlice.reducer;
