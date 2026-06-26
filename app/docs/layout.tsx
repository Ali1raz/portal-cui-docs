import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { Header } from "@/layouts/docs/slots/header";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        prefetch: false,
      }}
      slots={{
        header: Header,
      }}
    >
      {children}
    </DocsLayout>
  );
}
