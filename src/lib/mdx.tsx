import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import Image from "next/image";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display mt-12 mb-4 text-2xl tracking-tight text-foreground md:text-3xl"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-display mt-8 mb-3 text-xl tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-base leading-relaxed text-muted max-w-full break-words" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 ml-5 list-disc space-y-2 text-muted max-w-full break-words" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 ml-5 list-decimal space-y-2 text-muted max-w-full break-words" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 border-l border-border pl-6 font-display text-lg italic text-foreground/80"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href ?? "";
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {props.children}
        </Link>
      );
    }
    return (
      <a
        {...props}
        className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  },
  hr: () => <hr className="my-10 border-border" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  img: (props: any) => (
    <span className="relative my-8 block overflow-hidden border border-border bg-surface shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      <Image
        src={props.src || ""}
        alt={props.alt || "Article Image"}
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 80vw"
        className="w-full h-auto object-cover grayscale transition-all duration-700 hover:grayscale-0"
      />
    </span>
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
