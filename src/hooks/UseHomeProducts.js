import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProducts } from "../redux/slices/productSlice";

export function useHomeProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: products, loading, error } = useSelector((state) => state.products);

  const [showAllNew, setShowAllNew] = useState(false);
  const [showAllTop, setShowAllTop] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const mensProducts = products.filter(
    (p) => ["mens-shirts", "mens-shoes", "mens-watches", "tops"].includes(p.category)
  );
  const displayPool = mensProducts.length >= 8 ? mensProducts : products;

  return {
    loading,
    error,
    newArrivalsList: showAllNew ? displayPool.slice(0, 8) : displayPool.slice(0, 4),
    topSellingList: displayPool.slice(4, showAllTop ? 16 : 8),
    showAllNew,
    showAllTop,
    toggleNew: () => setShowAllNew(!showAllNew),
    toggleTop: () => setShowAllTop(!showAllTop),
    goToProduct: (id) => navigate(`/product/${id}`),
  };
}