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
