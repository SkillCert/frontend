import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }
  const transactions = await prisma.marketplaceTransaction.findMany({
    where: { buyerId: Number(userId) },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(transactions);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { buyerId, courseId, amount, currency, transactionHash } = body;
  const newTransaction = await prisma.marketplaceTransaction.create({
    data: {
      buyerId,
      courseId,
      amount,
      currency,
      transactionHash,
      status: 'Pending'
    }
  });
  return NextResponse.json(newTransaction);
}
