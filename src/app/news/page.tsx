
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news.js";
import { notFound } from "next/navigation";
export default function NewsPage() {
  if(!DUMMY_NEWS) {
    notFound();
  }
  return (
    <>
      <h1>This is the news page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
