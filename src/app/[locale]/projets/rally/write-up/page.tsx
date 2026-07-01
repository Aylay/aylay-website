import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const CANONICAL = "https://lucas-attali.me/en/projets/rally/write-up";
const TITLE = "Rally: a shared real-time game where the server does almost nothing";
const DESCRIPTION =
  "How Rally, a live match companion built with React, TypeScript and AWS, makes every client derive the same truth instead of asking a server for it.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: `${TITLE} · Lucas Attali`,
    description: DESCRIPTION,
    alternates: { canonical: CANONICAL },
    openGraph: {
      type: "article",
      siteName: "Lucas Attali",
      locale: "en_US",
      title: TITLE,
      description: DESCRIPTION,
      url: CANONICAL,
      images: [{ url: "/og-image-en.png", width: 1200, height: 630, alt: TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: ["/og-image-en.png"],
    },
  };
}

export default function RallyWriteUp({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const p = "text-[17px] leading-[1.72] mb-5";
  const h2 = "font-display font-semibold text-[clamp(23px,3.2vw,32px)] tracking-[-0.01em] mt-14 mb-4";
  const code = "font-mono text-[0.86em] bg-card border border-line rounded px-1.5 py-0.5";
  const ul = "list-disc pl-5 space-y-2.5 mb-5 marker:text-saffron text-[17px] leading-[1.6]";

  return (
    <section className="wrap py-[clamp(56px,10vw,120px)]">
      <article className="max-w-[70ch] mx-auto" lang="en">
        <Link href="/projets/rally" locale="en" className="inline-flex items-center gap-1.5 font-mono text-[12px] text-cobalt-ink mb-9 hover:gap-2.5 transition-[gap]"
        >
          <span aria-hidden="true">←</span> Rally
        </Link>

        <p className="font-mono text-[11px] tracking-[.14em] text-saffron mb-4">technical write-up</p>
        <h1 className="font-display font-bold text-[clamp(30px,5.4vw,52px)] leading-[1.05] tracking-[-0.02em] mb-5">
          {TITLE}
        </h1>
        <p className="text-[clamp(17px,2.4vw,21px)] leading-[1.5] text-muted mb-6 max-w-[62ch]">
          A match companion built with React, TypeScript and AWS, where every client derives the same truth instead of asking a server for it.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] mb-12">
          <a href="https://rally.lucas-attali.me" target="_blank" rel="noopener noreferrer" className="text-cobalt-ink inline-flex items-center gap-1.5">
            Live demo <span aria-hidden="true">→</span>
          </a>
          <a href="https://github.com/Aylay/rally" target="_blank" rel="noopener noreferrer" className="text-cobalt-ink inline-flex items-center gap-1.5">
            Source code <span aria-hidden="true">→</span>
          </a>
        </div>

        <h2 className={h2}>The 30-second version</h2>
        <p className={p}>
          Rally replays the 2019 FIBA World Cup bronze medal game (France vs Australia) as a live experience. Everyone who opens the page sees the exact same second of the match. You join with a nickname, you see who else is watching, you make predictions on key moments, and you climb a live leaderboard against other visitors and three CPU bots.
        </p>
        <p className={p}>
          It looks like a classic client-server app. It isn&apos;t. The server never computes a score, never ticks a clock, and stores almost nothing. Two design rules drive the whole system:
        </p>
        <ol className="list-decimal pl-5 space-y-2.5 mb-5 marker:text-saffron marker:font-mono text-[17px] leading-[1.6]">
          <li><strong className="font-semibold">Derive, don&apos;t store.</strong> If a value can be computed from a fixed anchor, compute it. Never persist it.</li>
          <li><strong className="font-semibold">The server only carries what cannot be derived.</strong> Everything else, every client derives identically.</li>
        </ol>
        <p className={p}>
          I build interactive brand experiences (instant-win contests, gamified campaigns) for a living. Rally is the same craft, applied to live sports, rebuilt from scratch on a stack I wanted to prove: React, TypeScript, and event-driven AWS.
        </p>

        <h2 className={h2}>Problem #1: everyone must see the same second</h2>
        <p className={p}>
          A replay loop is trivial on one machine: <code className={code}>setInterval</code>, next event, repeat. But I wanted a shared experience: if you and I open Rally at the same time, we must see the same basket scored at the same moment, like a real broadcast. And the loop has to keep running when nobody is watching.
        </p>
        <p className={p}>
          The obvious answer is a server tick: a process that advances the match state every 1.5 seconds and pushes it out. I rejected it for two reasons. First, AWS EventBridge scheduled rules have a hard one-minute floor: you simply cannot tick a Lambda every 1.5 seconds with a scheduler. Second, a Lambda that keeps itself alive in a loop is fragile and wasteful: you pay compute to move a cursor forward, forever.
        </p>
        <p className={p}>
          So there is no cursor. There is only one fixed timestamp in DynamoDB: <code className={code}>baseStartedAt</code>, the moment the very first loop started. Everything else is arithmetic:
        </p>
        <pre className="bg-card border border-line rounded-xl p-5 overflow-x-auto my-7">
          <code className="font-mono text-[13px] leading-[1.75] whitespace-pre">{`cycleMs    = lastSequence × tickMs + pauseMs
elapsed    = now − baseStartedAt
cycleIndex = floor(elapsed / cycleMs)        // which loop are we on
within     = elapsed % cycleMs               // where inside the loop
sequence   = within < playMs
             ? floor(within / tickMs) + 1    // current match event
             : lastSequence                  // break between loops`}</code>
        </pre>
        <p className={p}>
          The match &quot;runs&quot; 24/7 at zero cost, because it doesn&apos;t run at all: it&apos;s derived on demand. The loop wraps instantly, there&apos;s no drift, and there&apos;s nothing to crash.
        </p>
        <p className={p}>
          Clients sync through a single public GET (a Lambda Function URL) that returns the anchor plus <code className={code}>serverNow</code>. The browser computes <code className={code}>offset = serverNow − Date.now()</code> once, then derives everything from <code className={code}>Date.now() + offset</code>. The client&apos;s <code className={code}>setInterval</code>&nbsp;doesn&apos;t own any state, it just repaints from the shared clock. I verified it the honest way: three browsers side by side, same sequence, every tick.
        </p>
        <p className={p}>
          One guardian Lambda runs hourly via EventBridge, with a single job: make sure the anchor exists (an idempotent conditional write). In V1 it&apos;s a safety net. In V2, when Rally ingests real NBA feeds, that seam becomes the match-transition logic.
        </p>

        <h2 className={h2}>Problem #2: a live multiplayer leaderboard without a scoring server</h2>
        <p className={p}>
          The signature feature: your picks and everyone else&apos;s feed one shared leaderboard, updating live. The reflex architecture is server-authoritative: clients send picks, the server scores them, broadcasts standings. Correct, but heavy: the server must know the match, the predictions, the scoring rules.
        </p>
        <p className={p}>
          I went the other way. The WebSocket layer (API Gateway WebSocket, one Lambda, DynamoDB) is a pure relay. It carries exactly two things that genuinely cannot be derived:
        </p>
        <ul className={ul}>
          <li><strong className="font-semibold">Presence:</strong> who is connected, under which name.</li>
          <li><strong className="font-semibold">Picks:</strong> who chose what, on which prediction, in which loop.</li>
        </ul>
        <p className={p}>
          Everything downstream (bot picks, correct answers, points, ranks), every client computes locally, and they all get the same result. Three details make that possible.
        </p>
        <p className={p}>
          <strong className="font-semibold">Identity is the connection.</strong> When you send a pick, the server never trusts a name inside the message. It looks up the nickname attached to your <code className={code}>connectionId</code>&nbsp;and stamps it on the broadcast. You physically cannot pick as someone else, because you can only speak through your own socket. That&apos;s V1 anti-cheat for free, by construction.
        </p>
        <p className={p}>
          <strong className="font-semibold">Nickname uniqueness is an atomic lock.</strong> Two people claiming &quot;cobra&quot; in the same millisecond is a textbook race. I don&apos;t solve it in code, DynamoDB does: the <code className={code}>join</code> route writes an item keyed by the name with <code className={code}>attribute_not_exists</code>. Conditional writes on the same key are serialized by the engine, so there are never two owners. The loser gets a <code className={code}>name_taken</code> message and picks another name. Disconnect deletes the lock.
        </p>
        <p className={p}>
          <strong className="font-semibold">Everything that touches shared rendering must be deterministic.</strong> This one bit me twice.
        </p>
        <p className={p}>
          The CPU bots used to call <code className={code}>Math.random()</code>, which means every client saw different bots, and a shared leaderboard is impossible. The fix: seed a small PRNG (xmur3 → mulberry32, 32-bit integer ops only, so identical output on every JS engine) with <code className={code}>(cycleIndex, predictionId, botId)</code>. Same seed everywhere → same bot decisions everywhere, with zero communication. The bots still vary between loops, because the loop index is in the seed.
        </p>
        <p className={p}>
          Then ranking. Ties share a rank (10, 10, 10 → ranks 1, 1, 1, then 4, standard competition ranking), and tied players are ordered by name. My first tiebreak used <code className={code}>localeCompare()</code>, which depends on the runtime&apos;s locale. Two clients in different locales could render the same standings in different orders. Deterministic means deterministic: I switched to plain code-unit comparison.
        </p>
        <p className={p}>
          The result is a leaderboard computed as a pure fold: <code className={code}>(loopIndex, relayed picks, frozen event stream) → standings</code>. Two clients with slightly different wall clocks still agree, because wall-clock time is not an input.
        </p>

        <h2 className={h2}>Honest limits (and what V2 looks like)</h2>
        <p className={p}>
          V1 trusts the client on one rule: picks are ignored after the lock, checked on send and on receive, but in the browser. A hand-crafted WebSocket client could still send a late pick and other well-behaved clients would reject it; a modified client could accept it. V2 moves enforcement into the Lambda, which can reuse the same TypeScript engine package to derive the current sequence and reject late picks server-side.
        </p>
        <p className={p}>
          The relay also keeps no history: join mid-loop and you only see picks sent after you connected, so other players&apos; points can be undercounted until the next loop resets everyone. Fixing it means storing picks per loop and replaying them on connect, same V2 hardening batch.
        </p>
        <p className={p}>
          And it&apos;s a replay, labeled as such (<code className={code}>REPLAY · 2019 FIBA WORLD CUP · LOOP #n</code>). No fake &quot;live&quot;. The seed is the real play-by-play of the bronze final: 73 events, every point attributed, quarter scores verified against the official box score. V2 swaps the frozen seed for real-time NBA feeds: webhook ingestion, push instead of derivation, idempotent writes, the part of the roadmap where the guardian Lambda gets its real job.
        </p>
        <p className={p}>
          Also out of scope, permanently: real money. Rally is a fan-engagement game. No betting, ever.
        </p>

        <h2 className={h2}>Stack &amp; bill</h2>
        <ul className={ul}>
          <li><strong className="font-semibold">Frontend:</strong> Next.js (App Router), React, TypeScript. Deployed on Vercel.</li>
          <li><strong className="font-semibold">Engine:</strong> a framework-free TypeScript package (<code className={code}>@rally/engine</code>): event stream, state folds, prediction resolution, seeded bots, leaderboard. Pure functions, no I/O, the same code can run in the browser today and in a Lambda tomorrow.</li>
          <li><strong className="font-semibold">Backend:</strong> AWS SAM, eu-west-3, Node 22 on arm64. Three Lambdas (state read, guardian, WebSocket), two DynamoDB tables for connections and name locks, one table with a single item for the anchor. API Gateway WebSocket routes written as raw ApiGatewayV2 resources.</li>
          <li><strong className="font-semibold">Monthly bill:</strong> approximately zero. One item read on page load, one hourly guardian invocation, and WebSocket messages when people actually play. Derive-don&apos;t-store is also a pricing strategy.</li>
        </ul>

        <p className="text-[17px] leading-[1.72] mt-10 mb-9">
          If you&apos;re building fan engagement, second-screen experiences, or anything real-time in sports media, this is the kind of system I love designing.
        </p>

        <div className="border-t border-line pt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px]">
          <Link href="/projets/rally" locale="en" className="text-cobalt-ink inline-flex items-center gap-1.5">
            <span aria-hidden="true">←</span> Back to Rally
          </Link>
          <a href="/en#contact" className="text-cobalt-ink inline-flex items-center gap-1.5">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  );
}