import { PayloadAction } from '@reduxjs/toolkit';
import filesReducer, {
  initialState,
  setFiles,
  addActiveFile,
  removeActiveFile,
  updateFileCode,
  setEditorActiveFile,
} from './reducer';

describe('files reducer', () => {
  it('should return the initial state if no known action is provided', () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  it('should set user files when action is setFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: 'console.log("hello world")',
        extension: 'js',
      },
    ];

    const expectedState = {
      ...initialState,
      activeFiles: [],
      userFiles,
    };

    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(
      expectedState
    );
  });

  it('should add a new file id when action is addActiveFile', () => {
    const fileId = '1';
    const expectedState = {
      ...initialState,
      activeFiles: [fileId],
    };

    expect(filesReducer(initialState, addActiveFile(fileId))).toEqual(
      expectedState
    );
  });

  it('should remove a file id when action is removeActiveFile', () => {
    const fileId = '1';
    const modifiedInitialState = {
      ...initialState,
      activeFiles: [fileId],
    };

    const expectedState = {
      ...initialState,
      activeFiles: [],
    };

    expect(
      filesReducer(modifiedInitialState, removeActiveFile(fileId))
    ).toEqual(expectedState);
  });

  it('should update the code of a file when action is updateFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'print("Hello World")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hello World")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js',
        },
      ],
    };

    const expectedState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'print("Hello World")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js',
        },
      ],
    };

    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(
      expectedState
    );
  });

  it('should not update the state when updateFileCode does not find a file', () => {
    const payload = {
      fileId: '2',
      newCode: 'print("Hello World")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hello World")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js',
        },
      ],
    };

    const expectedState = modifiedInitialState;

    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(
      expectedState
    );
  });

  it(`should set the editor's active file when action is setEditorActiveFile`, () => {
    const fileId = '1';
    const expectedState = {
      ...initialState,
      editorActiveFile: fileId,
    };

    expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(
      expectedState
    );
  });
});
