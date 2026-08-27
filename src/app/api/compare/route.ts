import { NextRequest, NextResponse } from 'next/server';
import { COLLEGES_DATA } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get('ids');

    if (!idsParam) {
      return NextResponse.json(
        { success: false, message: 'Missing parameter: ids (comma separated college IDs or slugs)' },
        { status: 400 }
      );
    }

    const ids = idsParam.split(',').map((id) => id.trim());
    const matched = COLLEGES_DATA.filter(
      (c) => ids.includes(c.id) || ids.includes(c.slug) || ids.includes(c.shortName.toLowerCase())
    );

    return NextResponse.json({
      success: true,
      data: matched
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to compare colleges' },
      { status: 500 }
    );
  }
}
