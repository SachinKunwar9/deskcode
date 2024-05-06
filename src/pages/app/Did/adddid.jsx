import Card from "@/components/ui/Card";
// import AddDidForm from "../../forms/adddidform";
import Textinput from "@/components/ui/Textinput";
import Modal from "@/components/ui/Modal";
import { useEffect, useState } from "react"; // Import useState hook
import AdddidForm from "./AdddidForm";
import axios from "axios";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddDid() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const [fetchedData, setFetchedData] = useState([]);

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  const token = localStorage.getItem("token");

  const config = {
    url: "http://localhost:3000/didlist",
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`.replaceAll('"', ""),
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(config);
        console.log(response.data);
        setFetchedData(response.data);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [AdddidForm]);

  const notify = (message) => toast(message);
  const navigate = useNavigate();
  
  
  const [did ,setDid]  = useState();
  
  const handleInputChange = (e)=>{
    setDid(e.target.value);
  }
  
 
// const config = {
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8',
//     'Authorization': `Bearer ${token}`,
   
//   }
// };


const handleSubmit = async ()=>{
  
  const config = {
    url: 'http://localhost:3000/adddid',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`.replaceAll('"',''),
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {
     did:did
    }
  };

try {
  //axios(config);
  console.log(config);
  const response =await axios(config)

   console.log(response.data);
   notify("successfully created a Did");
   props.onClose()

} catch (error) {
  console.log("something happens wrong");
  navigate('/adddid');
  notify("failed to create a Did");
  
}

}
  
  console.log(token);

  return (
    <>
      <Card>
        {/* <button onClick={openModal} className="btn btn-primary">
          Add new DID
        </button> */}
{fetchedData.length>0?<div>Edit DID</div>:
        <Modal
          activeModal={showModal}
          onClose={closeModal}
          label={"Add Did"}
          className="max-w-xl"
          title="Add DID Modal"
          uncontrol
        >


<div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */} 
         <Textinput placeholder={"Enter the DID"} className="mb-3" value={did} onChange={handleInputChange}  label="DID" isMask  maxLength={6}  classGroup={Number}  numeral={true} ></Textinput>
         {/* <NumberInput></NumberInput> */}
          <Button text={"Submit"} type={"submit"} onClick={handleSubmit}></Button>
        {/* </form> */}
      </div>
{/*           
           <AdddidForm onClose={closeModal} /> */}
          
          
        </Modal>}

        {fetchedData &&
            fetchedData.map((item, index) => (
              <Card key={index} children={item.DiD}>
                  {/* <Button></Button> */}
              </Card>
            ))}
        
          
      </Card>
      
    </>
  );
}

export default AddDid;
