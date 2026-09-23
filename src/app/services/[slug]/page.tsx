import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/pages/service-page-view";
import { getServicePage, getServiceSlugs } from "@/data/service-pages";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/shared/schema-script";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return generateSEO({ title: "Service", path: "/services" });
  return generateSEO({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/services/${slug}`,
    keywords: page.tags,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <SchemaScript
        data={generateServiceSchema({
          name: page.title,
          description: page.description,
          url: `/services/${slug}`,
        })}
      />
      <ServicePageView page={page} />
    </>
  );
}
