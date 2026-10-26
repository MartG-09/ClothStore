import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import EmptyCart from "../components/EmptyCart";

function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-extrabold uppercase mb-8">Your Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid gap-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-4">
            <button 
              onClick={() => navigate("/")}
              className="text-sm font-medium underline text-gray-700 hover:text-black"
            >
              ← Continue Shopping
            </button>
          </div>
        </div>

        <OrderSummary 
          totalPrice={totalPrice} 
          onCheckout={() => alert("Payment methods coming soon")} 
        />
      </div>
    </main>
  );
}

export default CartPage;