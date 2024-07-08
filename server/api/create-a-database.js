import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
// Retrieve a block 取得頁面的屬性的資料

// 初始化 Notion 連接客戶端資料
const notion = new Client({ auth: process.env.NOTION_API_KEY });
  try {
    const pageId = process.env.NOTION_PAGE_ID;

    // 這裡是頁面中的基本資訊
    const response = await notion.databases.create({
        parent: {
          type: "page_id",
          page_id: pageId,
        },
        icon: {
          type: "emoji",
          emoji: "📝",
        },
        cover: {
          type: "external",
          external: {
            url: "https://website.domain/images/image.png",
          },
        },
        title: [
          {
            type: "text",
            text: {
              content: "Grocery List",
              link: null,
            },
          },
        ],
        properties: {
          Name: {
            title: {},
          },
          Description: {
            rich_text: {},
          },
          "In stock": {
            checkbox: {},
          },
          "Food group": {
            select: {
              options: [
                {
                  name: "🥦Vegetable",
                  color: "green",
                },
                {
                  name: "🍎Fruit",
                  color: "red",
                },
                {
                  name: "💪Protein",
                  color: "yellow",
                },
              ],
            },
          },
          Price: {
            number: {
              format: "dollar",
            },
          },
          "Last ordered": {
            date: {},
          },
          "Store availability": {
            type: "multi_select",
            multi_select: {
              options: [
                {
                  name: "Duc Loi Market",
                  color: "blue",
                },
                {
                  name: "Rainbow Grocery",
                  color: "gray",
                },
                {
                  name: "Nijiya Market",
                  color: "purple",
                },
                {
                  name: "Gus'''s Community Market",
                  color: "yellow",
                },
              ],
            },
          },
          "+1": {
            people: {},
          },
          Photo: {
            files: {},
          },
        },
      });
    console.log(response);

    return {
      message: '成功檢索頁面',
      response 
    };
  } catch (error) {
    console.log(error);
    return {
      message: '檢索頁面失敗',
      error: error,
    };
  }
});