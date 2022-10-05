import { Link } from "react-router-dom";

function NewRecord() {
  return (
    
    <div className="col-span-2 bg-green-300 rounded shadow-md">
        <button><Link to="/addnew">add new record</Link></button>
      
    </div>
  );
}
export default NewRecord;
