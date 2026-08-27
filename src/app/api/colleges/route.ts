import { NextRequest, NextResponse } from 'next/server';
import { filterColleges } from '@/lib/data';
import { FilterOptions } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const search = searchParams.get('search') || undefined;
    const state = searchParams.get('state') || undefined;
    const type = searchParams.get('type') || undefined;
    const courseDegree = searchParams.get('courseDegree') || undefined;
    const maxFee = searchParams.get('maxFee') ? parseFloat(searchParams.get('maxFee')!) : undefined;
    const minRating = searchParams.get('minRating') ? parseFloat(searchParams.get('minRating')!) : undefined;
    const sortBy = (searchParams.get('sortBy') as FilterOptions['sortBy']) || 'nirf';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const options: FilterOptions = {
      search,
      state,
      type,
      courseDegree,
      maxFee,
      minRating,
      sortBy,
      page,
      limit
    };

    const allFiltered = filterColleges(options);

    // Pagination
    const totalCount = allFiltered.length;
    const totalPages = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const paginated = allFiltered.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      success: true,
      data: paginated,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch colleges' },
      { status: 500 }
    );
  }
}
