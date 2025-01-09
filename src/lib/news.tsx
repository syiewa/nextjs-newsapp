import { createClient } from "@/utils/supabase/client";


export interface News {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  slug: string;
}
const supabase = createClient();

export async function getAllNews() {
  const { data: news } = await supabase.from("news").select("*");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string) {
  const { data: news } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getLatestNews() {
  const { data: latestNews } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false })
    .limit(3);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  try {
    const { data, error } = await supabase.rpc("get_distinct_years");

    if (error) {
      console.error("Error fetching news years:", error);
      throw error;
    }
    const years = data.map((row: { year: number }) => row.year);
    return years;
  } catch (error) {
    console.error("Failed to fetch news years:", error);
    throw error;
  }
}

export async function getAvailableNewsMonths(year: number | string) {
  const res = await supabase.rpc("get_distinct_month", {
    target_month: year,
  });
  const months = res.data.map((row: { month: number }) => row.month);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return months;
}

export async function getNewsForYear(year: number | string) {
  const {data:news} = await supabase.rpc('get_news_for_year',{target_year: year});
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsForYearAndMonth(
  year: number | string,
  month: number | string
) {
  const {data:news} = await supabase.rpc('get_news_for_year_month',{target_year: year, target_month: month});
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}
