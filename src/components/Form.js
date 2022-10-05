function Form() {
  return (
    <div className="flex flex-col items-center rounded  space-y-10 bg-slate-300 p-6 my-4 my-auto">
        <div className="col-span-6 leading-8">
        <label>
        Date:
        <input type="date" />
      </label>
        </div>
     
     <div>
     <label>
        Pair:
        <input type="text" />
      </label>
     </div>
     <div>
     <label>
        Open Price:
        <input type="number" />
      </label>
     </div>
     <div>
     <label>
        Close Price:
        <input type="text" />
      </label>
     </div>
     <div>
     <label>
        Img url:
        <input type="text" />
      </label>
     </div>
     <div>
     <label>
        Price:
        <input type="number" />
      </label>
      <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg>
  Processing...
</button>
     </div>
    </div>
  );
}

export default Form;
