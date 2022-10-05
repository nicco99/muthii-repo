function TopMenu() {
  return (
    <div className="flex flex-row grid grid-cols-4 gap-4 pt-6 px-4">
      <div className="bg-orange-600 rounded shadow-md h-28 pt-4">
        <p className="text-center">NAME</p>
      </div>
      <div className="bg-cyan-500 rounded shadow-md h-28 pt-4">
        <p className="text-center">CAPITAL</p>
      </div>
      <div className="bg-sky-500 rounded shadow-md h-28 pt-4">
        <p className="text-center">CURRENT BAL</p>
      </div>
      <div className="bg-amber-500 rounded shadow-md h-28 pt-4">
        <p className="text-center">Total trade taken</p>
      </div>
    </div>
  );
}

export default TopMenu;
