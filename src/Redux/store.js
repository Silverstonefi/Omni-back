import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,

});
const persistor = persistStore(store);
export { store, persistor };
