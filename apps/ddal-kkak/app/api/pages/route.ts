import { NextRequest, NextResponse } from 'next/server'
import { getPages } from 'service/pages'

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {
  return getPages()
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
