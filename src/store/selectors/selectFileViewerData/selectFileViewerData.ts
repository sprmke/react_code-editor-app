import { createSelector } from '@reduxjs/toolkit';
import FVS from '../../../types/FileViewerStructure';
import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';

const selectFileViewerData = (userFiles: UserFile[]): FVS => {
  const userFilesLength = userFiles.length;
  const result: FVS = {} as FVS;

  for (let i = 0; i < userFilesLength; i++) {
    const userFile = userFiles[i];
    const { name, relativePath, id, extension } = userFile;
    const paths = relativePath.split('/');
    let j = 0;
    let currentLevel: any = result;

    // Handle subfolders
    while (paths[j] !== name) {
      const path = paths[j];

      if (!Array.isArray(currentLevel) && !currentLevel.id) {
        currentLevel.id = uuidv4();
        currentLevel.name = path;
        currentLevel.children = [];
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      if (!Array.isArray(currentLevel) && currentLevel.children) {
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      let subfolder: any = (currentLevel as any).find(
        (child: FVS) => child.name === path
      );

      if (subfolder) {
        currentLevel = subfolder.children!;
        j++;
      } else {
        currentLevel.push({
          id: j.toString(),
          name: path,
          children: [],
        });
        currentLevel = currentLevel[currentLevel.length - 1];
      }
    }

    const fileData = { id, name, extension };
    currentLevel.push(fileData);
  }
  return result;
};

export default createSelector(
  (state: RootState) => state.files.userFiles,
  selectFileViewerData
);
