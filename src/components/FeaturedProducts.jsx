import ProductGrid from "./ProductGrid";
import SectionTitle from "./SectionTitle";

export default function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid />
    </div>
  );
}
