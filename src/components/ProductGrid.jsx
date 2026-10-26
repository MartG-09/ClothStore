import ProductCard from "./ProductCard";

function ProductGrid({ title, products, showAll, onToggleShowAll, onProductClick }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 border-b border-gray-200">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => onProductClick(product.id)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={onToggleShowAll}
          className="rounded-full border border-gray-300 px-16 py-3.5 text-sm font-medium transition hover:bg-black hover:text-white"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
}

export default ProductGrid;