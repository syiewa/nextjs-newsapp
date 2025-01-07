import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter: string[] }>;
}) {
  const filter = await params;
  const selectedYear = filter?.filter ? filter.filter[0] : null;
  const selectedMonth = filter?.filter ? filter.filter[1] : null;

  let news;
  let links: number[];

  links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(Number(selectedYear));
    links = getAvailableNewsMonths(Number(selectedYear));
  }

  if(selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(Number(selectedYear), Number(selectedMonth));
    links = [];
  }

  if(selectedYear && !getAvailableNewsYears().includes(Number(selectedYear)) || selectedMonth && !getAvailableNewsMonths(Number(selectedYear)).includes(Number(selectedMonth))) {
   throw new Error("Invalid Filter");
  }

  let newsContent = <p>No news found for this period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <header className="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
