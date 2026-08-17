/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

const products = [
  { number: 1, title: "ChronoLoop", pages: "04–05" },
  { number: 2, title: "Object 02", pages: "06–07" },
  { number: 3, title: "Object 03", pages: "08–09" },
  { number: 4, title: "Object 04", pages: "10–11" },
  { number: 5, title: "Object 05", pages: "12–13" },
  { number: 6, title: "Object 06", pages: "14–15" },
  { number: 7, title: "Object 07", pages: "16–17" },
  { number: 8, title: "Object 08", pages: "18–19" },
  { number: 9, title: "Object 09", pages: "20–21" },
  { number: 10, title: "Object 10", pages: "22–23" },
];

type ProductData = (typeof products)[number];

function Product({ product }: { product: ProductData }) {
  const { number, title, pages } = product;
  const maskStyle = {
    WebkitMaskImage: `url(/images/catalog/${number}.png)`,
    maskImage: `url(/images/catalog/${number}.png)`,
  } as CSSProperties;

  const visual = (
    <>
      <img
        className="product-photo"
        src={`/images/catalog/${number}.png`}
        alt={`Seoul id product ${number}`}
      />
      <span className="product-hover-fill" style={maskStyle} aria-hidden="true" />
      <span className="product-hover-meta" aria-hidden="true">
        <span className="product-hover-title">{title}</span>
        <span className="product-hover-pages">{pages}</span>
      </span>
      <span className="item-number" aria-hidden="true">
        {number}
      </span>
    </>
  );

  if (number === 1) {
    return (
      <a
        className={`catalog-item product-${number}`}
        href="/1"
        aria-label="ChronoLoop 상세 페이지"
      >
        {visual}
      </a>
    );
  }

  return (
    <div
      className={`catalog-item product-${number}`}
      aria-label={`제품 ${number}`}
    >
      {visual}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell landing-shell">
      <div className="spread spread-landing">
        <section className="book-page book-page-left" aria-label="간기면">
          <div className="imprint-block small-text">
            <p className="imprint-title">Seoul id</p>
            <p className="imprint-author">Ryu haechan</p>

            <dl className="imprint-credits">
              <div>
                <dt>Publish</dt>
                <dd>Drei Stack</dd>
              </div>
              <div>
                <dt>Industrial Design</dt>
                <dd>Ryu haechan</dd>
              </div>
              <div>
                <dt>Edit &amp; Book Design</dt>
                <dd>Han joonseok</dd>
              </div>
              <div>
                <dt>Web Design</dt>
                <dd>Han joonseok</dd>
              </div>
              <div>
                <dt>Typography</dt>
                <dd>Century Old Style Std</dd>
              </div>
              <div>
                <dt>Edition</dt>
                <dd>100</dd>
              </div>
            </dl>

            <p className="imprint-copy">
              © Drei Stack 2026. All rights reserved. This book as a web is for
              archiving of Seoul id&apos;s works. Visit archive:{" "}
              <a
                href="https://www.instagram.com/seoul_id"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.instagram.com/seoul_id
              </a>
            </p>
          </div>
        </section>

        <section className="book-page book-page-right" aria-label="제품 목차">
          <div className="catalog-constellation" aria-label="제품 목록">
            {products.map((product) => (
              <Product key={product.number} product={product} />
            ))}
          </div>
        </section>

        <div className="book-gutter" aria-hidden="true" />
      </div>
    </main>
  );
}
