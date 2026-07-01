import type { ReactNode } from 'react';
import PageHero from './PageHero';

interface LegalPageLayoutProps {
  title: string;
  description: string;
  updated?: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, description, updated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-[#050508] min-h-screen">
      <PageHero badge="Legal" title={title} description={description}>
        {updated && <p className="mt-4 text-sm text-slate-500">Last updated: {updated}</p>}
      </PageHero>
      <section className="section-pad pt-0 pb-24">
        <div className="container-premium max-w-4xl legal-prose">{children}</div>
      </section>
    </div>
  );
}

interface ContentPageShellProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  heroChildren?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function ContentPageShell({
  badge,
  title,
  highlight,
  description,
  heroChildren,
  children,
  className = '',
}: ContentPageShellProps) {
  return (
    <div className={`bg-[#050508] min-h-screen ${className}`}>
      <PageHero badge={badge} title={title} highlight={highlight} description={description}>
        {heroChildren}
      </PageHero>
      {children}
    </div>
  );
}
