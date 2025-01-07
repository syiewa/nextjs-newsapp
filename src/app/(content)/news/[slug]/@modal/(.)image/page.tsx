import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import ModalImage from "@/components/modal-image";

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
      <ModalImage />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt="telo"
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
