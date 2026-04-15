import { useTreeContext } from "../Context/TreeContext"; 
import { TreeView } from "../Tree/Treeview"; 

export const TreePage = () => {
 const { tree } = useTreeContext();

  return (
    <div>
      <h1>File System</h1>
      <TreeView tree={tree} />
    </div>
  );
};