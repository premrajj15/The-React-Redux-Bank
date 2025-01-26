import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  //const customer = useSelector((store) => store.customer);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
  //return <h2>👋 Welcome, </h2>;
}

export default Customer;
