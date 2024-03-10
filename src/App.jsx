import { useEffect, useState } from "react";
import MailBox from "./components/MailBox";
import ProductGallery from "./components/ProductGallery/ProductGallery";
const productData = [
  {
    id: "1_product",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0oGtbIltkWhp0ArvRHRoxopWVbqx_KsGaw&usqp=CAU",
    title: "Tako Black",
    price: 4.0,
    quantity: 4,
    hasDiscount: true,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "2_product",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvLbRzUKw9nin50QCtrEY1c7vK8INX7-noQ&usqp=CAU",
    title: "Tako Red",
    price: 4.5,
    quantity: 7,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "3_product",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpeSjYZPRCSwEzlaS4ZuMaOlrr3s5f8y1BA&usqp=CAU",
    title: "Tako Blue",
    price: 4.99,
    quantity: 2,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
];

const emailsData = [
  { id: "1", email: "foo@bar.com" },
  { id: "2", email: "alex133@bar.com" },
  { id: "3", email: "bghk@bar.com" },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [emails, setEmails] = useState(() => {
    const stringifiedEmail = localStorage.getItem(`emails`);
    if (!stringifiedEmail) return emailsData;

    const parsedEmails = JSON.parse(stringifiedEmail);
    return parsedEmails;
  });
  const [showMailBox, setshowMailBox] = useState(false);

  // let counter = 0;
  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const onLogEmail = () => {
    // counter = counter + 1;

    setCounter((prevState) => prevState + 1);
  };
  const handleDelete = (mailId) => {
    setEmails((prevState) => prevState.filter((email) => email.id !== mailId));
  };
  // const handleAddEmail = (mail ={id: "123", email: "Hspgjk@gmail.ua"}) =>{
  //   setEmails((prevState) => [...prevState, mail]);
  // };
  const handleToggleMailBox = () => {
    setshowMailBox((prevState) => !prevState);
  };
  return (
    <div>
      <h1>Email Counter: {counter}</h1>
      <button onClick={handleToggleMailBox}>
        {showMailBox ? "Hide" : "Show"} MailBox
      </button>

      {showMailBox ? (
        <MailBox
          emails={emails}
          onClose={handleToggleMailBox}
          emailCounter={counter}
          onLogEmail={onLogEmail}
          onDeleteMail={handleDelete}
        />
      ) : null}

      <ProductGallery productData={productData} />
    </div>
  );
}

export default App;
