import React, { useEffect, useState } from "react";
import Tr from "./Tr";
import Th from "./Th";
function Table() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/records")
      .then((res) => res.json())
      .then((data) => setRecord(record => data));
  }, []);
console.log(record)
const tr = record.map(tr=><Tr key={tr.id} tr={tr}/>)
const arr = ["Date","Pair", "Open|price","close|price","Image","Profit"]
const th = arr.map((th,i)=><Th key={i} th={th}/>)

  return (
    <div className="row-span-3 col-span-8 bg-white rounded shadow-md">
      <div className="col-span-12">
        <table className="container">
          <thead>
            {th}
          </thead>
          <tbody>
           {tr}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
