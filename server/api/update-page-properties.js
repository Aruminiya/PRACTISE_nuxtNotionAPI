import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
// Retrieve a block 取得頁面的屬性的資料

// 初始化 Notion 連接客戶端資料
const notion = new Client({ auth: process.env.NOTION_API_KEY });
  try {
    const pageId = process.env.NOTION_PAGE_ID;

    // 這裡是頁面中的基本資訊
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        title: [
          {
            text: {
              content: "Notion API_PractiseApi 修改內容測試aaaaaaaaa",
            },
          },
        ]
      },
      icon: {
        type: "emoji",
        emoji: "😻"
      }
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