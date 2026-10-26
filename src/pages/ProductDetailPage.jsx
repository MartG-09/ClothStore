import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => String(p.id) === String(id));

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart(product));
    navigate("/cart");
  };

  if (loading || products.length === 0) {
    return (
      <div className="p-20 text-center">
        <p className="text-xl font-medium text-gray-500">Loading product information...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-20 text-center">
        <p className="text-xl font-medium text-red-500">Product not found!</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <img 
          src={product.thumbnail || product.image} 
          alt={product.title} 
          className="w-full rounded-2xl object-cover shadow-sm" 
        />
      </div>

      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-extrabold uppercase">{product.title}</h1>
        <p className="text-2xl font-bold text-black mt-4">${product.price}</p>
        <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
        
        <button
          onClick={handleAddToCart}
          className="mt-8 rounded-full bg-black py-4 text-white font-medium hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetailPage;