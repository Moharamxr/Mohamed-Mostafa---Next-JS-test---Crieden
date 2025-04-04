import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.example.com/products'); // Replace with the actual API endpoint
    const products = await response.json();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.error();
  }
}