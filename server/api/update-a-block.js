import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
// Retrieve a block 取得頁面的屬性的資料

// 初始化 Notion 連接客戶端資料
const notion = new Client({ auth: process.env.NOTION_API_KEY });
  try {
    const blockId = 'f0b1885c-2dbf-477e-88aa-dbc24c527e3c';

    // 這裡是頁面中的基本資訊
    const response = await notion.blocks.update({
      block_id: blockId,
      heading_2: {
        rich_text: [
          {
            text: {
              content: "Lacinato kale"
            },
            annotations: {
              color: "green"
            }
          }
        ]
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