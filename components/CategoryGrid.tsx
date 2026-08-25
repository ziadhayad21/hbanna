import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/lib/products";

type Props = {
  showViewAll?: boolean;
  headingReveal?: boolean;
};

export default function CategoryGrid({
  showViewAll = false,
  headingReveal = true,
}: Props) {
  const reveal = headingReveal ? " reveal" : "";
  const stagger = headingReveal ? " reveal-stagger" : " in-view";

  return (
    <>
      <span className={`eyebrow${reveal}`}>What We Grow &amp; Export</span>
      <h2 className={`serif${reveal}`}>
        A Full Range of Premium Egyptian Agricultural Products.
      </h2>
      <div className={`cat-grid${stagger}`}>
        {productCategories.map((cat) => (
          <Link
            href={`/products/${cat.slug}`}
            className="cat-card"
            key={cat.slug}
          >
            <span className="cat-num">{cat.num}</span>
            <div className="cat-visual">
              <Image src={cat.image} alt={cat.alt} width={400} height={140} />
            </div>
            <h3>{cat.title}</h3>
            <p>{cat.summary}</p>
            <span className="cat-link">View products</span>
          </Link>
        ))}
      </div>
      {showViewAll ? (
        <div className="section-cta-row">
          <Link href="/products" className="btn btn-ghost">
            View All Products
          </Link>
        </div>
      ) : null}
    </>
  );
}
