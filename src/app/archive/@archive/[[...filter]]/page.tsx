import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter: unknown[] }>;
}) {
  const filter = await params;
  const selectedYear = filter?.filter[0];
  const selectedMonth = filter?.filter[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(Number(selectedYear));
  }

  let newsContent = <p>No news found for this period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  const links = getAvailableNewsYears();
  return (
    <>
      <header className="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  // const news = getNewsForYear(Number(newsYear.filter));
  // console.log(news);
  // return <NewsList news={news} />;
}
