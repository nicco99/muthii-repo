import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
const [formData, setFormData] =useState({})

const redirect = useNavigate()
  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData,[name]:value}) 
  }
  function handleSubmit() {

    fetch("http://localhost:3000/records",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    redirect("/")
    })
  }

  //console.log(formData)
  // "id": "2",
  //         "date": "2/2/2022",
  //         "pair": "EUR/USD",
  //         "open_price": "96.45",
  //         "closed_price": "112.23",
  //         "image_url": "",
  //         "profit": "-98
 
  return (
    <div className="flex flex-col items-center rounded  space-y-10 bg-slate-300 p-6 my-4 my-auto">
        <div className="col-span-6 leading-8">
        <label>
        Date:
        <input onChange={handleInput} type="date" name="date" />
      </label>
        </div>
     
     <div>
     <label>
        Pair:
        <input onChange={handleInput} type="text" name="pair" />
      </label>
     </div>
     <div>
     <label>
        Open Price:
        <input onChange={handleInput} type="number" name="open_price" />
      </label>
     </div>
     <div>
     <label>
        Close Price:
        <input onChange={handleInput} type="text" name="closed_price" />
      </label>
     </div>
     <div>
     <label>
        Img url:
        <input onChange={handleInput} type="text" name="image_url" />
      </label>
     </div>
     <div>
     <label>
        Price:
        <input onChange={handleInput} type="number" name="profit" />
      </label>
     <button type="submit" onClick={handleSubmit} className="bg-sky-300">submit</button>
     </div>
    </div>
  );
}

export default Form;
