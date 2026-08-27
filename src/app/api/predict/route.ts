import { NextRequest, NextResponse } from 'next/server';
import { predictColleges } from '@/lib/data';
import { PredictorInput } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: PredictorInput = await request.json();

    if (!body.exam || typeof body.rank !== 'number') {
      return NextResponse.json(
        { success: false, message: 'Invalid input. Required fields: exam, rank (number)' },
        { status: 400 }
      );
    }

    const predictions = predictColleges(body);

    return NextResponse.json({
      success: true,
      input: body,
      totalMatches: predictions.length,
      data: predictions
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to predict colleges' },
      { status: 500 }
    );
  }
}
