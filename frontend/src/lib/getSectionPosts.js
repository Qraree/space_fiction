import { remark } from 'remark';
import html from 'remark-html';
import * as fs from 'fs';
import matter from 'gray-matter';

export async function getSectionPosts(section, locale, article) {
  console.log(`/app/src/content/${section}/${String(locale)}/${article}.md`);
  try {
    const fileContents = fs.readFileSync(
      `/app/src/content/${section}/${locale}/${article}.md`,
      'utf8',
    );

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      article,
      contentHtml,
      ...matterResult.data,
    };
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
