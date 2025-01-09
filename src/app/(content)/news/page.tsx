import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { News } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews() as News[];

  return (
    <>
      <h1>This is the news page</h1>
      <NewsList news={news} />
    </>
  );
}
