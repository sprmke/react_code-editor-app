import { makeStyles } from '@mui/styles';
import { MouseEvent } from 'react';
import UserFile from '../../../types/UserFile';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../store/hooks';
import closeFile from '../../../store/thunks/closeFile/closeFile';
import { IconButton } from '@mui/material';

interface Props {
  activeFile: UserFile;
}

const CustomTabLabel = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    activeFile: { id: fileId, name: fileName, extension },
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(fileId));
  };

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={extension} />
      <div className={classes.fileName}>{fileName}</div>
      <IconButton
        aria-label="delete"
        className={classes.closeIcon}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
  },
  fileName: {
    padding: '0px 5px',
    color: theme.font,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    color: theme.font,
  },
}));

export default CustomTabLabel;
