import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import rootSaga from "./saga/root";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: productReducer,
  middleware: () => {
    return [sagaMiddleware]
}
});

sagaMiddleware.run(rootSaga);

export default store;