import { createSelector } from '@reduxjs/toolkit';
import FileViewerStructure from '../../../types/FileViewerStructure';
import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';

const selectFileViewerData = (userFiles: UserFile[]): FileViewerStructure => {
  const userFilesLength = userFiles.length;
  const result: FileViewerStructure = {} as FileViewerStructure;

  for (let i = 0; i < userFilesLength; i++) {
    const { name, relativePath, id, extension } = userFiles[i];
    const paths = relativePath.split('/');

    let j = 0;
    let children;

    // loop through nested files until we reach the file name
    while (paths[j] !== name) {
      const path = paths[j];

      if (j === 0) {
        // set default values if empty FileViewerStructure
        if (!result.name) {
          result.id = j.toString();
          result.name = path;
          result.children = [];
        }
        j++;
        continue;
      }

      // check and get if subfolder exist
      children = result.children!;
      const subfolder = children?.find((child) => child.name === path);

      // get the children if has subfolder
      if (subfolder) {
        children = subfolder.children;
      } else {
        // get the next children if subfolder doesn't exist
        children?.push({
          id: j.toString(),
          name: path,
          children: [],
        });
        children = children[children.length - 1];
      }
      j++;
    }

    const fileData = { id, name, extension };

    // set fileData as children is empty
    if (!children) {
      result.children!.push(fileData);
      // set fileData inside nested children list
    } else {
      (children as FileViewerStructure).children!.push(fileData);
    }
  }
  return result;
};

export default createSelector(
  (state: RootState) => state.files.userFiles,
  selectFileViewerData
);
