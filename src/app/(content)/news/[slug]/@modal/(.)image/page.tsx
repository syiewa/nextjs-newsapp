import { notFound } from "next/navigation";
import Image from "next/image";
import ModalImage from "@/components/modal-backdrop";
import { getNewsItem, News } from "@/lib/news";

interface PageProps {
  params: Promise<{ slug: string | undefined }>;
}
export default async function InterceptedImagePage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const newsItem = await getNewsItem(slug) as News;
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