/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
const detailImages = [1, 2, 3, 4, 5, 6, 7];

export default function ChronoloopPage() {
  return (
    <main className="site-shell detail-shell">
      <div className="spread spread-detail">
        <section
          className="book-page book-page-left detail-media-page"
          aria-label="Chronoloop 이미지"
        >
          <div className="detail-page-scroll">
            <div className="detail-image-stack">
              {detailImages.map((number) => (
                <figure key={number}>
                  <img
                    src={`/detail/chronoloop/${number}.webp`}
                    alt={`Chronoloop 상세 이미지 ${number}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          className="book-page book-page-right detail-copy-page"
          aria-label="Chronoloop 설명"
        >
          <div className="detail-page-scroll">
            <article className="detail-article">
              <h1>Chronoloop</h1>
              <div className="detail-columns">
                <div className="detail-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <aside className="detail-notes">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </aside>
              </div>
            </article>
          </div>
        </section>

        <div className="book-gutter" aria-hidden="true" />
      </div>

      <nav className="folio-ui" aria-label="페이지 내비게이션">
        <a className="folio-number folio-left" href="/" aria-label="목차로 돌아가기">
          4
        </a>
        <a className="folio-home" href="/">
          seoul id
        </a>
        <span className="folio-number folio-right" aria-hidden="true">
          5
        </span>
      </nav>
    </main>
  );
}
