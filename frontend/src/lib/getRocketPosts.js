import { remark } from 'remark';
import html from 'remark-html';
import * as fs from 'fs';
import matter from 'gray-matter';

export async function getRocketsPosts(rocket) {
  try {
    const fileContents = fs.readFileSync(
      `/app/src/content/rockets/en/${rocket}.md`,
      'utf8',
    );

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      rocket,
      contentHtml,
      ...matterResult.data,
    };
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
