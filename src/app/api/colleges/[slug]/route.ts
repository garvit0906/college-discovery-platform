import { NextRequest, NextResponse } from 'next/server';
import { getCollegeBySlug } from '@/lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const college = getCollegeBySlug(slug);

    if (!college) {
      return NextResponse.json(
        { success: false, message: `College with slug '${slug}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: college
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch college detail' },
      { status: 500 }
    );
  }
}
