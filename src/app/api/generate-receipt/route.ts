import { NextResponse } from 'next/server';
import ReciboMaker from '../../libComponents/ReciboMaker';

export async function POST(request: Request) {
  try {
    const { ventas } = await request.json();
    const receipt = ReciboMaker(ventas);
    
    return NextResponse.json({ receipt }, { status: 200 });
  } catch (error) {
    console.error('Error generating receipt:', error);
    return NextResponse.json(
      { error: 'Failed to generate receipt' },
      { status: 500 }
    );
  }
}
