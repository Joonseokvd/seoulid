/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */

type EditorialPageData = {
  image: string;
  imageAlt: string;
  headline: string;
  label: string;
  page: string;
  fit?: "cover" | "contain";
};

const editorialPages: EditorialPageData[] = [
  {
    image: "/detail/chronoloop/1.webp",
    imageAlt: "실내 공간에 놓인 Chronoloop",
    headline:
      "Chronoloop is documented in the room where its scale, movement, and everyday use become visible.",
    label: "In context",
    page: "04",
  },
  {
    image: "/detail/chronoloop/2.webp",
    imageAlt: "흰 배경 위에 놓인 Chronoloop",
    headline:
      "An object is understood through the sequence of opening, closing, storing, and returning.",
    label: "Object",
    page: "05",
    fit: "contain",
  },
  {
    image: "/detail/chronoloop/3.webp",
    imageAlt: "선반 앞에 놓인 Chronoloop",
    headline:
      "Its form stays quiet among other objects until the moment a repeated action begins.",
    label: "In context",
    page: "06",
  },
  {
    image: "/detail/chronoloop/4.webp",
    imageAlt: "Chronoloop 상단 구조의 세부 모습",
    headline:
      "A closer view records the relationship between the container, lid, and supporting structure.",
    label: "Detail",
    page: "07",
  },
  {
    image: "/detail/chronoloop/5.webp",
    imageAlt: "이동식 구조물 옆의 Chronoloop",
    headline:
      "Chronoloop is shown beside the surrounding systems that organise a domestic space.",
    label: "Structure",
    page: "08",
  },
  {
    image: "/detail/chronoloop/6.webp",
    imageAlt: "식물 옆에서 열려 있는 Chronoloop",
    headline:
      "The open object reveals a small gesture designed to be repeated as part of an ordinary day.",
    label: "Use",
    page: "09",
  },
  {
    image: "/detail/chronoloop/7.webp",
    imageAlt: "두 사람이 Chronoloop를 살펴보는 모습",
    headline:
      "Handling and observation provide a final record of the object at the scale of the body.",
    label: "Process",
    page: "10",
  },
  {
    image: "/images/catalog/1.png",
    imageAlt: "Chronoloop 제품 이미지",
    headline:
      "Chronoloop, Object 01. Industrial design by Ryu haechan and archived by Seoul id.",
    label: "Object 01",
    page: "11",
    fit: "contain",
  },
];

function EditorialPage({
  data,
  side,
}: {
  data: EditorialPageData;
  side: "left" | "right";
}) {
  return (
    <article
      className={`book-page book-page-${side} detail-editorial-page detail-editorial-${side}`}
      aria-label={`Chronoloop ${data.label}, ${data.page}쪽`}
    >
      <div className="editorial-main">
        <header className="editorial-header">
          <p className="editorial-headline">{data.headline}</p>
          <span className="editorial-index" aria-label={`${data.page}쪽`}>
            {data.page}
          </span>
        </header>

        <div className="editorial-copy">
          <p>
            <strong>Industrial Design</strong>
            <br />
            Ryu haechan
            <br />
            <strong>Project</strong>
            <br />
            Chronoloop
          </p>
          <p>
            <strong>Archive</strong>
            <br />
            Seoul id
            <br />
            <strong>Section</strong>
            <br />
            {data.label}
          </p>
        </div>

        <figure className={`editorial-media editorial-media-${data.fit ?? "cover"}`}>
          <img src={data.image} alt={data.imageAlt} />
        </figure>
      </div>

      <div className="editorial-rail" aria-hidden="true">
        <strong>Chronoloop</strong>
        <span>Ryu haechan</span>
      </div>
    </article>
  );
}

export default function ChronoloopPage() {
  const spreads = Array.from({ length: editorialPages.length / 2 }, (_, index) =>
    editorialPages.slice(index * 2, index * 2 + 2),
  );

  return (
    <main className="site-shell detail-shell">
      <div className="detail-spread-scroll">
        {spreads.map(([leftPage, rightPage], index) => (
          <section
            className="spread spread-detail detail-story-spread"
            aria-label={`Chronoloop 펼침면 ${index + 1}`}
            key={`${leftPage.page}-${rightPage.page}`}
          >
            <EditorialPage data={leftPage} side="left" />
            <EditorialPage data={rightPage} side="right" />
          </section>
        ))}
      </div>

      <div className="book-gutter detail-gutter" aria-hidden="true" />

      <nav className="folio-ui folio-ui-detail" aria-label="페이지 내비게이션">
        <a className="folio-home" href="/">
          seoul id
        </a>
      </nav>
    </main>
  );
}
