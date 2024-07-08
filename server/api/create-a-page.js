import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
// Retrieve a block 取得頁面的屬性的資料

// 初始化 Notion 連接客戶端資料
const notion = new Client({ auth: process.env.NOTION_API_KEY });
  try {
    // 這裡是頁面中的基本資訊
    const response = await notion.pages.create({
      cover: {
          type: "external",
          external: {
              "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
          }
      },
      icon: {
          type: "emoji",
          emoji: "🥬"
      },
      parent: {
          type: "page_id",
          page_id: process.env.NOTION_PAGE_ID
      },
      properties: {
        title: [
          {
            text: {
              content: "Tuscan kale"
            }
          }
        ]
      },
      children: [
        {
          object: "block",
          type: "heading_2",  // 這裡需要指定 type
          heading_2: {
            rich_text: [
              {
                text: {
                  content: "Lacinato kale"
                }
              }
            ]
          }
        },
        {
          object: "block",
          type: "paragraph",  // 這裡需要指定 type
          paragraph: {
            rich_text: [
              {
                text: {
                  content: "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                  link: {
                    url: "https://en.wikipedia.org/wiki/Lacinato_kale"
                  }
                }
              }
            ],
            color: "default"
          }
        }
      ]
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