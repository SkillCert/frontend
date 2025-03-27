import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { transactionId: string } }
) {
  const id = parseInt(params.transactionId, 10);
  const transaction = await prisma.marketplaceTransaction.findUnique({
    where: { id }
  });
  if (!transaction) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ status: transaction.status });
}

export async function POST(
  request: Request,
  { params }: { params: { transactionId: string } }
) {
  const id = parseInt(params.transactionId, 10);
  const transaction = await prisma.marketplaceTransaction.findUnique({
    where: { id }
  });
  if (!transaction) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const updated = await prisma.marketplaceTransaction.update({
    where: { id },
    data: { status: 'Refunded' }
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  { params }: { params: { transactionId: string } }
) {
  const id = parseInt(params.transactionId, 10);
  const transaction = await prisma.marketplaceTransaction.delete({
    where: { id }
  });
  return NextResponse.json(transaction);
}
