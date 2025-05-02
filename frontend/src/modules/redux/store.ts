import {
  configureStore,
  ConfigureStoreOptions,
  createSlice,
  CreateSliceOptions,
} from "@reduxjs/toolkit";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: "?",
  reducers: "?",
};
const slice = createSlice(sliceOptions);
const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
const store = configureStore(storeOptions);
