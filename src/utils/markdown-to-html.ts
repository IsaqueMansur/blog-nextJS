import { remark } from 'remark';
import remarkHtml from 'remark-html';

export default async function (content: string): Promise<string> {
  const data = await remark().use(remarkHtml).process(content);
  return String(data);
}
