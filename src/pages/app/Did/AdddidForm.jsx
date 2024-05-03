import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";


function AdddidForm() {

    const { register, control, handleSubmit, reset, trigger, setError } = useForm(
        {
          defaultValues: {
            test: [{ firstName: "Bill", lastName: "Luo", phone: "123456" }],
          },
        }
      );
      const { fields, append, remove } = useFieldArray({
        control,
        name: "test",
      });
      const index = 1;
}
    
    
    
      const onSubmit = async(data)=>{
       try {
         const response = await fetch("http://localhost:3000/adddid",{
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(data),
           });
     
           if (response.ok) {
             console.log("Form submitted successfully");
           }
           else{
             console.log("form submiiton has failed");
           }
       } catch (error) {
        toast.POSITION.TOP_LEFT("Failed")
        
       }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textinput placeholder={"Enter the DID"} className="mb-3"></Textinput>
          <Button text={"Submit"} type={"submit"}></Button>
        </form>
      </div>
    </>
  );
}

export default AdddidForm;
