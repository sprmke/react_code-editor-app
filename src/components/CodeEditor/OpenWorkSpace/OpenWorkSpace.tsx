import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRef } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import readFiles from '../../../store/thunks/readFiles/readFiles';
import { commonColors } from '../../../theme/color';

const OpenWorkSpace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null!);
  const dispatch = useAppDispatch();

  const onClick = () => {
    directoryInputRef.current.click();
  };

  const onFilesUpload = async () => {
    try {
      const files = directoryInputRef.current.files as FileList;
      dispatch(readFiles(files));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.button} onClick={onClick}>
      <Button>Open Workspace</Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUpload}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
}));

// Fix TS error for directory and webkitdirectory input attributes
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkSpace;
