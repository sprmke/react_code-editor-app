import { createSlice } from '@reduxjs/toolkit';
import UserFile from '../../types/UserFile';

export interface FileState {
  userFiles: UserFile[];
  activeFiles: string[];
  editorActiveFile: string | null;
}

export const initialState: FileState = {
  userFiles: [],
  activeFiles: [],
  editorActiveFile: null,
};

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
});

const fileReducer = fileSlice.reducer;

export default fileReducer;
