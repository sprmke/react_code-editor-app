import { Dispatch } from 'redux';
import supportedExtensions from '../../../constants/supportedExtensions';
import FileViewerStructure from '../../../types/FileViewerStructure';
import {
  addActiveFile,
  setEditorActiveFile,
} from '../../reducers/files/reducer';
import { RootState } from '../../store';

const openFile =
  (node: FileViewerStructure) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    const { extension: fileExtension = '', id: fileId, children } = node;

    // we do nothing if we click a file that has children (subfolder)
    // or we don't support the file extension
    if (children || !supportedExtensions[fileExtension]) return;

    const state = getState();
    const activeFiles = state.files.activeFiles;

    // add this file to the active files if not yet exist
    if (!activeFiles.includes(fileId)) {
      dispatch(addActiveFile(fileId));
    }

    // set as editor active file
    dispatch(setEditorActiveFile(fileId));
  };

export default openFile;
