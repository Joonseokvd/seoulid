/* eslint-disable @next/next/no-img-element */
const products = [8, 9, 6, 3, 1, 5, 7, 2, 4, 10];

function Product({ number }: { number: number }) {
  const visual = (
    <>
      <img
        className="product-silhouette"
        src={`/images/${number}o.png`}
        alt=""
        aria-hidden="true"
      />
      <img
        className="product-photo"
        src={`/images/${number}.png`}
        alt={`Seoul id product ${number}`}
      />
    </>
  );

  if (number === 1) {
    return (
      <a
        className={`catalog-item product-${number}`}
        href="/1"
        aria-label="Chronoloop 상세 페이지"
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
            {products.map((number) => (
              <Product key={number} number={number} />
            ))}
          </div>
        </section>

        <div className="book-gutter" aria-hidden="true" />
      </div>
    </main>
  );
}
