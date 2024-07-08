import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
// Retrieve a block 取得頁面的屬性的資料

// 初始化 Notion 連接客戶端資料
const notion = new Client({ auth: process.env.NOTION_API_KEY });
  try {
    const blockId = process.env.NOTION_PAGE_ID;

    // 這裡是頁面中的基本資訊
    const response = await notion.blocks.children.append({
      block_id: blockId,
      children: [
        {
          heading_2: {
            rich_text: [
              {
                text: {
                  content: "測試附加內容"
                }
              }
            ]
          }
        },
        {
          paragraph: {
            rich_text: [
              {
                text: {
                  content: "測試內容連結",
                  link: {
                    url: "https://en.wikipedia.org/wiki/Lacinato_kale"
                  }
                }
              }
            ]
          }
        }
      ],
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