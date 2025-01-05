import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const url = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === url.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      {newsItem && (
        <>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title || ''} width={300} height={300} />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
          <p>{newsItem.content}</p>
        </>
      )}
    </article>
  );
}
