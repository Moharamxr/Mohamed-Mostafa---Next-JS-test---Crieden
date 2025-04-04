import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types"; // Adjust the import based on your types file location
import Loading from "@/components/ui/Loading";
import { formatPrice } from "@/utils/formatPrice";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          const data = await response.json();
          setProduct(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {formatPrice(product.price)}</p>
      {/* Add to cart button and other functionalities can be added here */}
    </div>
  );
};

export default ProductPage;