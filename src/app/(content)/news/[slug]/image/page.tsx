
import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsItem,News } from "@/lib/news";

export default async function ImagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug) as News;
  console.log(newsItem);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} height={0} width={0} sizes="100vw" className="w-full h-auto" />
    </div>
  );
}