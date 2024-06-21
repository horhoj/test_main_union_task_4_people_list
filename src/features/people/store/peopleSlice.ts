import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListResponse } from '../types/common';
import { ListOfPeopleItem } from '../types/ListOfPeopleItem';
import { peopleAPI } from '../api/people';

import { peopleItemAPI } from '../api/peopleItem';
import { PeopleItem } from '../types/PeopleItem';
import {
  RequestList,
  RequestStateProperty,
  getErrorMsg,
  makeRequestExtraReducer,
  makeRequestStateProperty,
} from '~/store/helpers';
import { RootState } from '~/store/types';

const SLICE_NAME = 'peopleSlice';

interface IS {
  fetchListOfPeopleRequest: RequestStateProperty<ListResponse<ListOfPeopleItem>, unknown>;
  fetchPeopleItemRequest: RequestStateProperty<PeopleItem, unknown>;
}

const initialState: IS = {
  fetchListOfPeopleRequest: makeRequestStateProperty<ListResponse<ListOfPeopleItem>, unknown>(),
  fetchPeopleItemRequest: makeRequestStateProperty<PeopleItem, unknown>(),
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    makeRequestExtraReducer<RequestList<IS>>(builder, fetchListOfPeopleThunk, 'fetchListOfPeopleRequest');
    makeRequestExtraReducer<RequestList<IS>>(builder, fetchPeopleItemThunk, 'fetchPeopleItemRequest');
  },
});

interface FetchListOfPeopleThunkPayload {
  search?: string;
  page?: number;
}

const fetchListOfPeopleThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchListOfPeopleThunk`,
  async ({ search, page }: FetchListOfPeopleThunkPayload, store) => {
    try {
      const res = await peopleAPI.fetchListOfPeople(page, search);
      return store.fulfillWithValue(res);
    } catch (e) {
      return store.rejectWithValue(getErrorMsg(e));
    }
  },
);

const fetchPeopleItemThunk = createAsyncThunk(`${SLICE_NAME}/fetchPeopleItemThunk`, async (id: string, store) => {
  try {
    const res = await peopleItemAPI.fetchPeopleItem(id);
    return store.fulfillWithValue(res);
  } catch (e) {
    return store.rejectWithValue(getErrorMsg(e));
  }
});

export const peopleSlice = {
  actions: slice.actions,
  reducer: slice.reducer,
  thunks: { fetchListOfPeopleThunk, fetchPeopleItemThunk },
} as const;

export const peopleIsLoadingSelector = (state: RootState) =>
  state.people.fetchListOfPeopleRequest.isLoading || state.people.fetchPeopleItemRequest.isLoading;

export const peopleErrorSelector = (state: RootState) =>
  state.people.fetchListOfPeopleRequest.error !== null || state.people.fetchPeopleItemRequest.error !== null;
