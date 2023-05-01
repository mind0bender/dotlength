import type { DetailedHTMLProps, HTMLAttributes } from "react";
import NavBar from "./navbar";

interface PageLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function PageLayout({
  children,
  className,
  ...props
}: PageLayoutProps): JSX.Element {
  return (
    <div
      className={`min-h-screen font-mono flex selection:bg-emerald-400 selection:text-slate-950 flex-col w-full dark:bg-slate-950 dark:text-white ${className}`}
      {...props}>
      <NavBar />
      {children}
    </div>
  );
}

export default PageLayout;
