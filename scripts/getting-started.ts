import axios from "axios";
import { readFileSync } from "fs";

async function updateReadMeDocumentation(content: string): Promise<void> {
  console.log("content", content);

  const apiKey: string = process.env.README_API_KEY || "";
  const slug: string = "getting-started-with-sdk";

  try {
    const response = await axios({
      method: "put",
      url: `https://dash.readme.com/api/v1/docs/${slug}`,
      headers: {
        "Content-Type": "application/json",
        "x-readme-version": "v2.0",
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
      },
      data: {
        body: content,
      },
    });

    console.log("Documentation updated successfully:", response.data);
  } catch (error: any) {
    console.error("Error updating documentation:", error.response?.data);
  }
}

const filePath: string = process.argv[2];
const contentBase64: string = readFileSync(filePath, "utf-8");
const content: string = Buffer.from(contentBase64, "base64").toString("utf-8");
updateReadMeDocumentation(content);
