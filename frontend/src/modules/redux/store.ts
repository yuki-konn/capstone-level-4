import {
  configureStore,
  ConfigureStoreOptions,
  createSlice,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
import { stateVariables } from "./stateVariables";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: stateVariables,
  reducers: "?",
};
const slice = createSlice(sliceOptions);
const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
export const store = configureStore(storeOptions);
