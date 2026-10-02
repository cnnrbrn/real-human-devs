import {
  BrowserFrame,
  ThemedScreenshot,
  type Screenshot,
} from "./browser-frame";
import { UnevenButton } from "./uneven-button";
import {
  caseStudyPath,
  facts,
  siteUrl,
} from "../data/real-spanish-stories";

export function Work({
  screenshot,
  darkScreenshot,
}: {
  screenshot: Screenshot;
  darkScreenshot: Screenshot;
}) {
  return (
    <section id="work" className="border-b-[1.5px] border-line">
      <div className="container-page py-26">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="kicker">Featured project</p>
            <h2 className="h2">Real Spanish Stories</h2>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <UnevenButton
              href={caseStudyPath}
              size="sm"
              rotate={-1}
              radius="5px 12px 6px 14px / 14px 6px 12px 5px"
              className="px-5.5 pt-2.5 pb-2 text-[20px]"
            >
              Read the case study <span aria-hidden="true">→</span>
            </UnevenButton>
            <UnevenButton
              href={siteUrl}
              target="_blank"
              rel="noopener"
              variant="secondary"
              rotate={1}
              radius="12px 5px 14px 6px / 6px 14px 5px 12px"
              className="px-5.5 pt-2.5 pb-2 text-[20px] [--btn-sx:4px] [--btn-sy:5px]"
            >
              Visit the site <span aria-hidden="true">↗</span>
            </UnevenButton>
          </div>
        </div>

        <div className="flex flex-wrap overflow-hidden rounded-[10px] border-[1.5px] border-line bg-card">
          {/* negative margins collapse these borders into the panel's own
              edge when the cells wrap onto separate rows */}
          <div className="-mr-[1.5px] -mb-[1.5px] min-w-0 flex-[2_1_520px] border-r-[1.5px] border-b-[1.5px] border-line sm:bg-paper-deep sm:p-4">
            {/* on phones the frame sits flush, so the panel's edge is its border */}
            <BrowserFrame
              url="realspanishstories.com"
              className="sm:rounded-lg sm:border-[1.5px] sm:border-line"
            >
              <ThemedScreenshot
                light={screenshot}
                dark={darkScreenshot}
                alt="A story page on Real Spanish Stories: the Bay of Pigs story, with a level picker beside it"
                sizes="(min-width: 1280px) 790px, calc(100vw - 70px)"
                className="block aspect-16/10 w-full object-cover object-top"
              />
            </BrowserFrame>
          </div>

          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-7 px-5 pt-6 pb-7 sm:px-9 sm:pt-9 sm:pb-10">
            <p className="text-[19px] leading-[1.55] text-pretty">
              Spanish learners listen to true stories from Latin American
              history, each one read aloud by a real narrator. We designed and
              built the site.
            </p>

            <dl>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[110px_1fr] gap-4 border-t-[1.5px] border-dashed border-rule py-3.5"
                >
                  <dt className="font-hand text-[17px] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-[17px]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
