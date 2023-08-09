import { configureStore } from "@reduxjs/toolkit";
import saveRecipeReducer from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "savedRecipies",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, saveRecipeReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const persistor = persistStore(store);
