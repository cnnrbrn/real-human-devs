import { ThemedScreenshot, type Screenshot } from "./browser-frame";
import { UnevenButton } from "./uneven-button";

const alt =
  "Real Spanish Stories on two phones: the homepage, and the Cerro Rico story with its level buttons";

export function Hero({
  screenshot,
  darkScreenshot,
}: {
  screenshot: Screenshot;
  /** The same image in the dark theme, shown when the site is dark. */
  darkScreenshot: Screenshot;
}) {
  return (
    <section
      id="top"
      className="border-b-[1.5px] border-line bg-[radial-gradient(var(--dot)_1px,transparent_1.2px)] bg-size-[26px_26px]"
    >
      <div className="@container container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-14 pt-22 pb-26">
        <div className="flex flex-col items-start gap-7">
          {/* availability badge — hidden for now, uncomment to bring back
          <div className="flex rotate-[-1.5deg] items-center gap-2.5 whitespace-nowrap rounded-[14px_6px_12px_5px/5px_12px_6px_14px] border-[1.5px] border-line bg-card px-4.5 py-2 text-[16px]">
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-orange shadow-[0_0_0_4px_var(--peach)]"
            />
            Taking new builds — Q4 2026
          </div> */}

          <h1 className="font-hand text-[clamp(52px,7.4vw,92px)] leading-[0.98] font-bold tracking-[-0.01em] text-balance">
            Tired of talking to AI?{" "}
            {/* swap to .hl-wavy for the squiggle-underline treatment */}
            <span className="hl-peach">Talk to us.</span>
          </h1>

          <p className="max-w-[34ch] text-[21px] leading-[1.55] text-pretty text-muted">
            A small team of senior designers and developers building web apps,
            mobile apps and custom WordPress sites. You'll always know who
            you're talking to.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-7">
            <UnevenButton
              href="#contact"
              size="lg"
              rotate={-0.8}
              radius="5px 12px 6px 14px / 14px 6px 12px 5px"
            >
              Start a project
            </UnevenButton>
            {/* hidden until there's more than one project to show — the
                screenshot already links to the case study
            <a
              href="#work"
              className="font-hand text-[21px] underline decoration-[1.5px] underline-offset-[6px]"
            >
              or see what we shipped
            </a> */}
          </div>
        </div>

        {/* Only beside the headline: once the grid stacks (two 460px
            columns + the 56px gap no longer fit) it would just repeat the
            featured project directly below, too small to read. Hidden, its
            lazy images aren't downloaded. */}
        <a href="#work" className="hidden @min-[976px]:block">
          <p className="kicker mb-4.5">
            Just shipped: Real Spanish Stories <span aria-hidden="true">↓</span>
          </p>
          {/* one flat image — frames, tilt and shadows are baked in */}
          <ThemedScreenshot
            light={screenshot}
            dark={darkScreenshot}
            alt={alt}
            sizes="580px"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </a>
      </div>
    </section>
  );
}
