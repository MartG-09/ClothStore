import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/slices/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b pb-6 gap-4">
      <div className="flex items-center gap-4">
        <img 
          src={item.thumbnail || item.image} 
          alt={item.title} 
          className="w-20 h-20 object-cover rounded-xl border" 
        />
        <div>
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-gray-800 font-semibold mt-1">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50 gap-3">
          <button 
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="text-lg font-bold px-1 hover:text-gray-600"
          >
            -
          </button>
          <span className="font-medium text-sm">{item.quantity}</span>
          <button 
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="text-lg font-bold px-1 hover:text-gray-600"
          >
            +
          </button>
        </div>

        <button 
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 font-medium hover:underline text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;