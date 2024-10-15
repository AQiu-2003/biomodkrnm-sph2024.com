import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
}

export async function POST(req: Request) {
  const resJson: RequestBody = await req.json();
  const messages: Message[] = resJson.messages;

  console.log('POST /api/chat', messages);

  const ai = getRequestContext().env.AI;
  const stream = (await ai.run('@cf/meta/llama-3.1-8b-instruct', {
    messages,
    stream: true,
  })) as ReadableStream;

  const response = new Response(stream, {
    headers: { 'content-type': 'text/event-stream' },
  });

  return response;
}
