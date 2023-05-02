import { createSlice, current } from "@reduxjs/toolkit";
export const SliceSortProducer = createSlice({
  name: "sortProducer",
  initialState: {
    value: "",
  },

  reducers: {
    filterMale(state, action) {
      //   console.log(action.payload);
      let dataMale = action.payload.filter((item) => {
        return item.gender === "male";
      });
      state.value = dataMale;
      console.log(current(state));
    },
    filterFemale(state, action) {
      //   console.log(action.payload);
      let dataFemale = action.payload.filter((item) => {
        return item.gender === "female";
      });
      state.value = dataFemale;
      console.log(current(state));
    },
    sortHighPrice(state, action) {
      //   console.log(action.payload);
      let x = [...action.payload];

      let sortHigh = x.sort((a, b) => b.price - a.price);
      state.value = sortHigh;
      console.log(current(state));
    },
    sortLowPrice(state, action) {
      //   console.log(action.payload);
      let x = [...action.payload];

      let sortLow = x.sort((a, b) => a.price - b.price);
      state.value = sortLow;
      console.log(current(state));
    },
    clear(state) {
      state.value = "";
    },
    sortColor(state, action) {
      let dataColor = action.payload.dataType.filter((item) => {
        return item.color.find((item) => {
          return item === action.payload.value;
        });
      });
      console.log(dataColor);
      state.value = dataColor;
    },
    sortSize(state, action) {
      let dataSize = action.payload.dataType.filter((item) => {
        return item.size.find((item) => {
          return item === action.payload.value;
        });
      });
      console.log(dataSize);
      state.value = dataSize;
    },
  },
});
export const {
  filterFemale,
  filterMale,
  sortHighPrice,
  sortLowPrice,
  clear,
  sortColor,
  sortSize,
} = SliceSortProducer.actions;
export default SliceSortProducer.reducer;
