function OrderSummary({ totalPrice, onCheckout }) {
  return (
    <div className="border rounded-2xl p-6 bg-gray-50 h-fit">
      <h2 className="text-xl font-bold mb-4 uppercase">Order Summary</h2>
      <div className="flex justify-between mb-4 text-gray-600">
        <span>Subtotal</span>
        <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-6 text-gray-600 border-b pb-4">
        <span>Shipping</span>
        <span className="font-bold text-green-600">Free</span>
      </div>
      <div className="flex justify-between mb-6 text-lg font-extrabold">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button 
        onClick={onCheckout}
        className="w-full rounded-full bg-black py-4 text-white font-medium hover:bg-gray-800 transition"
      >
        Go to Checkout
      </button>
    </div>
  );
}

export default OrderSummary;