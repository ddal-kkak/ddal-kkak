import { NextRequest, NextResponse } from 'next/server'
import { createPage, getPages } from 'service/pages'

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {
  return getPages()
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}

export async function POST(request: NextRequest) {
  const { value } = await request.json()
  if (!value) {
    return new Response('Bad Request', { status: 400 })
  }

  return createPage(value)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
