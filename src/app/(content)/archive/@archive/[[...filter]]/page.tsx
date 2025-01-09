import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
  News,
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";
import { Suspense } from "react";

async function FilterHeader({ year, month }: { year: string; month: string }) {
  const availableYears = await getAvailableNewsYears();
  let links: (string | number)[] = [];
  links = availableYears;
  if (
    (year && !availableYears.includes(year)) ||
    (year && month && !(await getAvailableNewsMonths(year)).includes(month))
  ) {
    throw new Error("Invalid Filter");
  }
  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }
  return (
    <header className="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link.toString()}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: { year: string; month: string }) {
  let news: News[] = [];
  if (year && !month) {
    news = (await getNewsForYear(year)) as News[];
  } else if (year && month) {
    news = (await getNewsForYearAndMonth(year, month)) as News[];
  }
  let newsContent = <p>No news found for this period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter: string[] }>;
}) {
  const filter = await params;
  const selectedYear = filter?.filter ? filter.filter[0] : null;
  const selectedMonth = filter?.filter ? filter.filter[1] : null;

  return (
    <>
      <Suspense fallback={<p>Loading news...</p>}>
      <FilterHeader year={selectedYear || ""} month={selectedMonth || ""} />
        {FilteredNews({ year: selectedYear || "", month: selectedMonth || "" })}
      </Suspense>
    </>
  );
}
