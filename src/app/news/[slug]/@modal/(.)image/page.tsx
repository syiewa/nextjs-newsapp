import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <h1>Intercepted</h1>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </dialog>
    </>
  );
}
