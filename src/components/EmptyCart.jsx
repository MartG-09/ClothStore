 import { Link } from "react-router";

function EmptyCart() {
  return (
    <div className="p-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      <Link to="/" className="text-blue-600 underline">Go back to shop</Link>
    </div>
  );
}

export default EmptyCart;