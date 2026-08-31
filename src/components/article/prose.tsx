import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as never}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Comp>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal className="mt-20">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-transparent via-rule to-rule" />
          {eyebrow ? (
            <span className="eyebrow rounded-full border border-primary/25 bg-secondary px-3 py-1">
              {eyebrow}
            </span>
          ) : null}
          <span aria-hidden className="h-px flex-1 bg-gradient-to-l from-transparent via-rule to-rule" />
        </div>
        <h2 className="article-h2 mt-4 text-center sm:text-left">{title}</h2>
      </Reveal>
      <Reveal delay={80}>{children}</Reveal>
    </section>
  );
}

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("article-p", className)}>{children}</p>;
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="article-h3">
      {children}
    </h3>
  );
}

export function Callout({
  children,
  tone = "default",
  label,
}: {
  children: ReactNode;
  tone?: "default" | "warn" | "good" | "quote";
  label?: string;
}) {
  const tones = {
    default: "border-l-primary bg-gradient-to-br from-secondary to-paper",
    warn: "border-l-warn bg-gradient-to-br from-highlight/60 to-paper",
    good: "border-l-good bg-gradient-to-br from-good/10 to-paper",
    quote: "border-l-accent bg-paper",
  } as const;
  return (
    <div
      className={cn(
        "mt-6 rounded-2xl rounded-l-md border border-rule border-l-4 px-5 py-4 text-[1.0625rem] leading-[1.7] shadow-card transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]",
        tones[tone],
      )}
    >
      {label ? (
        <span className="eyebrow mb-1 block text-accent-foreground">{label}</span>
      ) : null}
      {children}
    </div>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative mt-10 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary via-paper to-highlight/40 px-7 py-7 font-display text-xl leading-snug text-ink shadow-card">
      <span aria-hidden className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl float-slow" />
      <span aria-hidden className="absolute left-5 top-3 font-display text-5xl leading-none text-primary/25">
        “
      </span>
      <span className="relative block pl-6">{children}</span>
    </blockquote>
  );
}

export function Table({
  caption,
  head,
  rows,
  note,
  firstColSticky = true,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
  note?: ReactNode;
  firstColSticky?: boolean;
}) {
  return (
    <figure className="mt-8">
      {caption ? (
        <figcaption className="eyebrow mb-2 text-muted-foreground">{caption}</figcaption>
      ) : null}
      <div className="card-surface overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="gradient-primary text-primary-foreground">
              {head.map((h, hi) => (
                <th
                  key={`${hi}-${h}`}

                  scope="col"
                  className="whitespace-nowrap px-3 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={cn("transition-colors hover:bg-highlight/30", i % 2 && "bg-muted/60")}>
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={cn(
                      "border-t border-rule px-3 py-2.5 align-top leading-snug",
                      j === 0 && firstColSticky && "font-semibold text-ink",
                    )}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </figure>
  );
}

export function Verify({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded bg-highlight px-1 font-mono text-[0.72em] text-accent-foreground">
      [{children}]
    </span>
  );
}

export function Checklist({ items, title }: { items: ReactNode[]; title?: string }) {
  return (
    <div className="card-surface mt-6 p-5">
      {title ? <p className="eyebrow mb-3">{title}</p> : null}
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <span
              aria-hidden
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md gradient-primary font-mono text-[0.6rem] font-medium text-primary-foreground"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ScoreBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-surface px-4 py-4 text-center">
      <div className="gradient-text font-display text-3xl font-bold">{value}</div>
      <div className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function Cta({
  children,
  href = "#",
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-sans text-[0.95rem] font-semibold transition-all duration-300 hover:-translate-y-0.5",
        variant === "primary"
          ? "gradient-primary text-primary-foreground shadow-card hover:shadow-[var(--shadow-glow)]"
          : "border border-primary/40 text-primary hover:bg-secondary hover:shadow-card",
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

export type Pillars = {
  curriculum: string;
  delivery: string;
  projects: string;
  career: string;
  access: string;
  value: string;
  overall: string;
  ceiling: string;
};

export function RatingBlock({ p }: { p: Pillars }) {
  const rows: [string, string][] = [
    ["Curriculum depth (25%)", p.curriculum],
    ["Delivery quality (20%)", p.delivery],
    ["Project rigour (20%)", p.projects],
    ["Career outcomes (12%)", p.career],
    ["Accessibility & fit (13%)", p.access],
    ["Value for money (10%)", p.value],
  ];
  return (
    <div className="mt-6 rounded-2xl border border-primary/25 bg-gradient-to-br from-secondary via-paper to-secondary p-6 shadow-card">
      <p className="eyebrow">Six-pillar rating</p>
      <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-3 border-b border-rule/70 pb-1">
            <dt className="text-[0.88rem] text-foreground/85">{k}</dt>
            <dd className="font-mono text-[0.88rem] font-medium text-primary">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
        <p className="font-display text-2xl font-bold text-ink">
          Overall <span className="text-accent">{p.overall}</span>
        </p>
        <p className="text-[0.9rem] text-muted-foreground">
          Capability ceiling: <strong className="text-ink">{p.ceiling}</strong>
        </p>
      </div>
    </div>
  );
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-good/30 bg-gradient-to-br from-good/10 to-paper p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
        <p className="eyebrow">Pros</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-relaxed">
          {pros.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-warn/35 bg-gradient-to-br from-warn/10 to-paper p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
        <p className="eyebrow">Cons</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-relaxed">
          {cons.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3">
        <p className="hidden text-[0.85rem] leading-snug text-muted-foreground sm:block">
          Ranked #1 on curriculum depth per rupee and hour —{" "}
          <strong className="text-ink">LogicMojo AI &amp; ML Course</strong>
        </p>
        <a
          href="#logicmojo-deep-dive"
          className="w-full rounded-xl gradient-primary px-5 py-2.5 text-center text-[0.85rem] font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:shadow-[var(--shadow-glow)] sm:w-auto"
        >
          See curriculum, batches &amp; projects →
        </a>
      </div>
    </div>
  );
}
