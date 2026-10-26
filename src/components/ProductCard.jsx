import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const originalPrice = product.discountPercentage > 0 
    ? product.price / (1 - product.discountPercentage / 100) 
    : null;

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F0EEED]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
          />

          {product.discountPercentage > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-[#FF3333]/10 px-3 py-1 text-xs font-medium text-[#FF3333]">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>

        <div className="pt-4">
          <h3 className="line-clamp-1 text-base font-bold text-black">
            {product.title}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-yellow-400 text-xs">
            {"★".repeat(4)}{"☆"} 
            <span className="text-gray-500 text-xs ml-1 font-normal">4.5/5</span>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-xl font-bold text-black">
              ${product.price.toFixed(2)}
            </span>

            {originalPrice && (
              <span className="text-xl font-bold text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 w-full rounded-full bg-black py-2.5 text-xs font-medium text-white transition hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;