import Notices from "./Notices";
import NewRecord from "./NewRecord";
import Table from "./Table";
function LowerMenu() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 mt-8 h-80 mx-8 mx-auto">
      <Table />
      <NewRecord />
      <Notices />
    </div>
  );
}

export default LowerMenu;
