import {
  configureStore,
  ConfigureStoreOptions,
  createSlice,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
import { stateVariables } from "./stateVariables";
import { stateSetters } from "./stateSetters";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: stateVariables,
  reducers: stateSetters,
};
const slice = createSlice(sliceOptions);
const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
export const store = configureStore(storeOptions);
