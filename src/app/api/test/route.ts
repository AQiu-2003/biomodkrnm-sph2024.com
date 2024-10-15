export const runtime = 'edge';

export async function GET(request: Request) {
  console.log('GET /api/test ' + request.body);
  return Response.json({ message: 'Hello, World!' });
}
