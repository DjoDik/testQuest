import { configureStore } from '@reduxjs/toolkit';
import vacancyReducer from './slice/vacancySlice'
import modalPropsRerducer from './slice/modalPropsSlice'

export const store = configureStore({
  reducer: {
    vacancy: vacancyReducer,
    modalProps: modalPropsRerducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
