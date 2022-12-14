import { makeStyles } from '@mui/styles';
import { TreeItem, TreeView } from '@mui/lab';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import selectFileViewerData from '../../../store/selectors/selectFileViewerData/selectFileViewerData';
import FileViewerStructure from '../../../types/FileViewerStructure';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import openFile from '../../../store/thunks/openFile/openFile';

const FileViewer = () => {
  const classes = useStyles();
  const fileViewerData = useAppSelector(selectFileViewerData);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: FileViewerStructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: FileViewerStructure) => {
    const { id, name: nodeName, extension } = node;
    const nodeId = `${id}-${nodeName}`;

    return (
      <TreeItem
        className={classes.treeItem}
        key={nodeId}
        nodeId={nodeId}
        label={nodeName}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
      >
        {Array.isArray(node.children)
          ? node.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  if (!Object.keys(fileViewerData).length) {
    return <div className={classes.emptyMessage}>No Files</div>;
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
    >
      {renderTree(fileViewerData)}
    </TreeView>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 10px 10px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.font,
  },
  emptyMessage: {
    color: theme.font,
  },
}));

export default FileViewer;
