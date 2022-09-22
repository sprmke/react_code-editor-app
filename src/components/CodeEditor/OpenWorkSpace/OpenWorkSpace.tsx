import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRef } from 'react';
import { commonColors } from '../../../theme/color';

const OpenWorkSpace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null!);

  const onClick = () => {
    directoryInputRef.current.click();
  };

  const onFilesUpload = () => {
    console.log('onFilesUpload');
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
