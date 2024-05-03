import Card from "@/components/ui/Card";
import AddDidForm from "../../forms/adddidform";
import Textinput from "@/components/ui/Textinput";
import Modal from "@/components/ui/Modal";
import { useState } from "react"; // Import useState hook
import AdddidForm from "./AdddidForm";

function AddDid() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card>
        {/* <button onClick={openModal} className="btn btn-primary">
          Add new DID
        </button> */}
        <Modal
          activeModal={showModal} 
          onClose={closeModal}
          label={"Add Did"}
          className="max-w-xl" 
          title="Add DID Modal" 
          uncontrol 

          
        >

<AdddidForm/>
            
        </Modal>
      </Card>
    </>
  );
}

export default AddDid;
