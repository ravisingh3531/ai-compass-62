import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <div className="mt-16 border-t border-rule pt-8">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="article-h2 mt-2">{title}</h2>
      </div>
      {children}
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
    default: "border-l-primary bg-secondary/60",
    warn: "border-l-warn bg-highlight/40",
    good: "border-l-good bg-good/8",
    quote: "border-l-accent bg-paper",
  } as const;
  return (
    <div
      className={cn(
        "mt-6 rounded-r-lg border-l-4 px-5 py-4 text-[1.0625rem] leading-[1.7]",
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
    <blockquote className="mt-8 border-l-4 border-l-accent bg-paper px-6 py-5 font-display text-xl leading-snug text-ink shadow-card">
      {children}
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
      <div className="overflow-x-auto rounded-lg border border-rule bg-paper shadow-card">
        <table className="data-table">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              {head.map((h) => (
                <th
                  key={h}
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
              <tr key={i} className={i % 2 ? "bg-muted/50" : undefined}>
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
    <div className="mt-6 rounded-lg border border-rule bg-paper p-5 shadow-card">
      {title ? <p className="eyebrow mb-3">{title}</p> : null}
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <span aria-hidden className="mt-0.5 font-mono text-xs text-primary">
              [{String(i + 1).padStart(2, "0")}]
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
    <div className="rounded-lg border border-rule bg-paper px-4 py-3 text-center shadow-card">
      <div className="font-display text-2xl font-semibold text-primary">{value}</div>
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
        "mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 font-sans text-[0.95rem] font-semibold transition-colors",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-primary text-primary hover:bg-secondary",
      )}
    >
      {children}
      <span aria-hidden>→</span>
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
    <div className="mt-6 rounded-xl border-2 border-primary/30 bg-secondary/50 p-5">
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
      <div className="rounded-lg border border-good/30 bg-good/8 p-5">
        <p className="eyebrow">Pros</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-relaxed">
          {pros.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-warn/40 bg-highlight/40 p-5">
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
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-center text-[0.85rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          See curriculum, batches &amp; projects →
        </a>
      </div>
    </div>
  );
}
