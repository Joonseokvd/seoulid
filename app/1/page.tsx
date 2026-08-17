/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */

function PageFolio({ page, caption }: { page: string; caption: string }) {
  return (
    <footer className="project-folio">
      <a href="/">seoul id</a>
      <span>{caption}</span>
      <span>{page}</span>
    </footer>
  );
}

function ProcessPage({
  page,
  columns,
  images,
}: {
  page: string;
  columns: Array<{ heading: string; body: string[] }>;
  images: Array<{ src: string; alt: string; caption: string }>;
}) {
  return (
    <article className="book-page process-page">
      <div className="process-copy-grid">
        {columns.map((column) => (
          <section key={column.heading}>
            <h2>{column.heading}</h2>
            {column.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <div className="process-image-grid">
        {images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <PageFolio page={page} caption="ChronoLoop / Process" />
    </article>
  );
}

function PhotoPage({
  page,
  src,
  alt,
  caption,
}: {
  page: string;
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <article className="book-page photo-page">
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <PageFolio page={page} caption={caption} />
    </article>
  );
}

export default function ChronoloopPage() {
  return (
    <main className="site-shell detail-shell">
      <div className="detail-spread-scroll">
        <section
          className="spread spread-detail project-intro-spread"
          aria-label="ChronoLoop 소개 펼침면"
        >
          <article className="book-page book-page-left project-plate-page">
            <figure className="intro-plate-image">
              <img
                src="/detail/chronoloop/1.webp"
                alt="실내 공간에 놓인 ChronoLoop"
              />
            </figure>

            <div className="intro-plate-lower">
              <p>
                ChronoLoop, 2026. Industrial Design: Ryu haechan. Publish: Drei
                Stack. Edition 100. Edit &amp; Book Design and Web Design: Han
                joonseok. Archive: Seoul id.
              </p>
            </div>

            <PageFolio page="04" caption="ChronoLoop / Object study" />
          </article>

          <article className="book-page book-page-right project-essay-page">
            <div className="intro-essay-grid">
              <header className="intro-essay-meta">
                <p className="intro-essay-number">05</p>
                <h1>ChronoLoop</h1>
                <p>
                  A clock by
                  <br />
                  Ryu haechan
                </p>
                <p>
                  Industrial Design
                  <br />
                  Seoul, 2026
                </p>
              </header>

              <div className="intro-essay-copy">
                <div className="intro-essay-opening">
                  <p>
                    시간은 이제 대부분 화면 속 숫자로 확인된다. 스마트폰을
                    켜거나 컴퓨터 화면 구석의 시계를 보면 된다. 그래서
                    요즘에는 시간을 본다기보다 그저 확인한다는 표현이 더
                    자연스럽다.
                  </p>
                  <p>
                    하지만 오래된 시계를 보고 있으면 시간은 조금 다르게
                    느껴진다. 초침이 움직이고, 톱니가 맞물려 돌아가고, 다이얼
                    위의 숫자가 천천히 다음 순간으로 넘어간다. 그 과정을 보고
                    있으면 시간은 단순한 숫자보다 하나의 흐름에 가깝게
                    느껴진다.
                  </p>
                </div>

                <div className="intro-essay-continuation">
                  <p>
                    ChronoLoop는 그런 감각에서 출발한 시계다. 이 시계는
                    일반적인 두 개의 바늘 대신 여러 개의 원형 다이얼이
                    회전하며 시간을 표시한다. 구조적으로는 오래된 영구 달력
                    장치를 떠올리게 하는 면이 있다.
                  </p>
                </div>
              </div>
            </div>

            <p className="intro-essay-note">
              ChronoLoop — time observed through a rotating dial system.
            </p>

            <PageFolio page="05" caption="ChronoLoop / Introduction" />
          </article>
        </section>

        <section
          className="spread spread-detail process-spread"
          aria-label="ChronoLoop 과정 펼침면"
        >
          <ProcessPage
            page="06"
            columns={[
              {
                heading: "시간을 읽는 방식",
                body: [
                  "이 방식은 시간을 읽는 경험도 조금 다르게 만든다. 숫자를 빠르게 확인하는 대신, 원형 다이얼의 움직임을 통해 시간의 흐름을 인식하게 된다. 서로 다른 속도로 회전하는 작은 원들이 하나의 시점을 만들어 내는 방식이 이 시계의 핵심이다.",
                ],
              },
              {
                heading: "형태와 타이포그래피",
                body: [
                  "형태 역시 이러한 메커니즘을 중심으로 정리했다. 금속 바디는 장식적인 요소를 최소화했고, 다이얼 위 숫자에는 블랙레터 스타일의 타이포그래피를 적용했다. 전통적인 문자 형태와 기계적인 구조가 결합되면서 차분하고 고전적인 분위기를 만든다.",
                ],
              },
            ]}
            images={[
              {
                src: "/detail/chronoloop/2.webp",
                alt: "흰 배경 위의 ChronoLoop",
                caption: "Object view",
              },
              {
                src: "/detail/chronoloop/3.webp",
                alt: "선반 앞에 놓인 ChronoLoop",
                caption: "Object in context",
              },
            ]}
          />

          <ProcessPage
            page="07"
            columns={[
              {
                heading: "관찰의 순간",
                body: [
                  "이 시계의 흥미로운 점은 시간을 바라보는 태도를 조금 바꾼다는 데 있다. 디지털 시계가 정확하고 즉각적인 정보를 제공한다면, ChronoLoop는 시간을 읽는 과정에 짧은 관찰의 순간을 만든다. 다이얼이 회전하고 숫자가 자리를 바꾸는 모습을 잠깐 바라보게 되는 것이다.",
                ],
              },
              {
                heading: "움직임으로서의 시간",
                body: [
                  "우리는 늘 시간이 흐르는 가운데 살지만, 그 움직임 자체를 의식하는 일은 많지 않다. 대부분은 숫자가 바뀌는 순간만 확인하고 다시 일상으로 돌아간다.",
                  "ChronoLoop는 그 익숙한 방식을 조금 다르게 풀어낸다. 시간을 단순한 정보가 아니라 움직임으로 경험하게 하는 시계다. 더 정확한 시간을 보여주기보다, 시간을 잠깐 바라보게 만드는 물건에 가깝다.",
                ],
              },
            ]}
            images={[
              {
                src: "/detail/chronoloop/4.webp",
                alt: "ChronoLoop 상단 구조의 세부 모습",
                caption: "Detail view",
              },
              {
                src: "/detail/chronoloop/5.webp",
                alt: "이동식 구조물 옆의 ChronoLoop",
                caption: "Use and scale",
              },
            ]}
          />
        </section>

        <section
          className="spread spread-detail photo-spread"
          aria-label="ChronoLoop 사진 펼침면"
        >
          <PhotoPage
            page="08"
            src="/detail/chronoloop/6.webp"
            alt="식물 옆에서 열려 있는 ChronoLoop"
            caption="ChronoLoop / Use"
          />
          <PhotoPage
            page="09"
            src="/detail/chronoloop/7.webp"
            alt="두 사람이 ChronoLoop를 살펴보는 모습"
            caption="ChronoLoop / Process"
          />
        </section>
      </div>

      <div className="book-gutter detail-gutter" aria-hidden="true" />
    </main>
  );
}
