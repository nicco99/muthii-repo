function Tr({ tr }) {
  return (
    <tr className="bg-indigo-100 h-11">
      <td className="border text-center border-slate-300">{tr.date}</td>
      <td className="border text-center border-slate-300">{tr.pair}</td>
      <td className="border text-center border-slate-300">{tr.open_price}</td>
      <td className="border text-center border-slate-300">{tr.closed_price}</td>
      <td className="border text-center border-slate-300">
        <button>view</button>
      </td>
      <td className="border text-center border-slate-300">{tr.profit}</td>
    </tr>
  );
}

export default Tr;
