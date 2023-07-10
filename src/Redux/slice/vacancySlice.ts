import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { AppThunk } from '../hooks';

const initialState = [];

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    getComment: (state, action: PayloadAction<string | Buffer>) => {
      const parser = new XMLParser();
      let newData = parser.parse(action.payload);
      return (state = [newData.source.vacancies.vacancy]);
    },
    sortTitle: (state, action: PayloadAction<string>) => {
        console.log('---------------', state, action.payload);
        
      return state.filter((vacancy) =>
        vacancy['job-name'] == action.payload,
      );
    },
    sortSum: (state, action: PayloadAction<string>) => {
        const minPrice = action.payload;
        return state.filter(product => product.salary >= minPrice);
    },
    sortNoSalary: (state, action: PayloadAction<string>) => {
        return state.filter((vacancy) => vacancy.salary !== null);
    }
  },
});

export const { getComment, sortTitle,  sortSum, sortNoSalary} = vacancySlice.actions;
export default vacancySlice.reducer;

export const getCommentChunk = (): AppThunk => (dispatch) => {
  axios<string | Buffer>('./example_1.xml').then(({ data }) => dispatch(getComment(data)));
};

