import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn(
      "border-t border-border py-20 md:py-28",
      className
    )}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}