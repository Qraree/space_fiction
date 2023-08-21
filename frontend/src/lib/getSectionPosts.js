import { remark } from 'remark';
import * as fs from 'fs';
import matter from 'gray-matter';
import remarkMdx from 'remark-mdx';

export async function getSectionPosts(section, locale, article) {
  console.log(`/app/src/content/${section}/${String(locale)}/${article}.md`);
  try {
    const fileContents = fs.readFileSync(
      `/app/src/content/${section}/${locale}/${article}.mdx`,
      'utf8',
    );

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(remarkMdx)
      // .processSync('import a from "b"\n\na <b /> c {1 + 1} d')
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
