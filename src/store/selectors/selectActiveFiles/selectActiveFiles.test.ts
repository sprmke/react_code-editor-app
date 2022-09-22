import { RootState } from '../../store';
import selectActiveFiles from './selectActiveFiles';

describe('filesReducer', () => {
  it('should return only the active files', () => {
    const userFiles = [
      {
        id: '1',
        name: 'index1.js',
        relativePath: 'test/index1.js',
        code: 'console.log("Hello world!")',
        extension: 'js',
      },
      {
        id: '2',
        name: 'index2.js',
        relativePath: 'test/index2.js',
        code: 'console.log("Hello world!")',
        extension: 'js',
      },
      {
        id: '3',
        name: 'index3.js',
        relativePath: 'test/index3.js',
        code: 'console.log("Hello world!")',
        extension: 'js',
      },
      {
        id: '4',
        name: 'index4.js',
        relativePath: 'test/index4.js',
        code: 'console.log("Hello world!")',
        extension: 'js',
      },
    ];

    const activeFiles = ['1', '3'];
    const state = {
      files: {
        userFiles,
        activeFiles,
      },
    } as RootState;

    const expectedResult = [userFiles[0], userFiles[2]];
    expect(selectActiveFiles(state)).toEqual(expectedResult);
  });
});
