import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ImagePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
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