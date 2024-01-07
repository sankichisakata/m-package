
import { createClient } from "microcms-js-sdk";
import type {
 MicroCMSQueries,
 MicroCMSImage,
 MicroCMSDate,
} from "microcms-js-sdk";

//ニュースの型定義
export type News = {
 id: string;
 date: string;
 category: string;
 title: string;
 subTitle: string;
 contents: string;
 contentId: string;
 eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// top:ニュース一覧を取得
export const homeList = async (queries?: MicroCMSQueries) => {
 const listData = await client.getList<News>({
  endpoint: "news",
  queries: { limit: 3, orders: '-publishedAt' }
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
//  await new Promise((resolve) => setTimeout(resolve, 1000));
 return listData;
};

// ニュースページ:ニュース一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
 const listData = await client.getList<News>({
  endpoint: "news",
  queries: { limit: 10, orders: '-publishedAt' }
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
//  await new Promise((resolve) => setTimeout(resolve, 1000));
 return listData;
};

// ブログの詳細を取得
export const getDetail = async (
 contentId: string,
 queries?: MicroCMSQueries
) => {
 const detailData = await client.getListDetail<News>({
  endpoint: "news",
  contentId,
  queries,
 });

//  // データの取得が目視しやすいよう明示的に遅延効果を追加
 await new Promise((resolve) => setTimeout(resolve, 1000));

 return detailData;
};