import { useState } from "react";
import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import { useFieldArray, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AdddidForm() {
//   const { register, control, handleSubmit, reset, trigger, setError } = useForm(
//     {
//       defaultValues: {
//         test: [{ firstName: "Bill", lastName: "Luo", phone: "123456" }],
//       },
//     }
//   );
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "test",
//   });
//   const index = 1;
// }

// const onSubmit = async (data) => {
//   try {
//     const response = await fetch("http://localhost:3000/adddid", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       console.log("Form submitted successfully");
//     } else {
//       console.log("form submiiton has failed");
//     }
//   } catch (error) {
//     toast.POSITION.TOP_LEFT("Failed");
//   }

const notify = (message) => toast(message);
const navigate = useNavigate();


const [did ,setDid]  = useState();

const handleInputChange = (e)=>{
  setDid(e.target.value);
}

const token = localStorage.getItem('token');

console.log(token);


const config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `Bearer ${token}`,
   
  }
};


const handleSubmit = async ()=>{
  

try {
  console.log(config);
  debugger;
  const response = await axios.post(`http://localhost:3000/adddid`,config,did);

   console.log(response.data);
   notify("successfully created a Did");
} catch (error) {
  console.log("something happens wrong");
  navigate('/adddid');
  notify("failed to create a Did");
  
}

}


  return (
    <>
      <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <Textinput placeholder={"Enter the DID"} className="mb-3" value={did} onChange={handleInputChange}></Textinput>
          <Button text={"Submit"} type={"submit"} onClick={handleSubmit}></Button>
        {/* </form> */}
      </div>
    </>
  );
};

export default AdddidForm;
