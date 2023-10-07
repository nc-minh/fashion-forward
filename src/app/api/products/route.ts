import path from 'path';
import { promises as fs } from 'fs';
import { Product } from '@/types/products';

const dataFilePath = path.join(process.cwd(), 'src/databases/products.json');

export async function GET(request: Request) {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const objectData: Product[] = JSON.parse(fileContents);
    return new Response(JSON.stringify(objectData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('ERROR', { status: 500 });
  }
}
