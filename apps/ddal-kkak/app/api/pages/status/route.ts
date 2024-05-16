import { NextRequest, NextResponse } from 'next/server'
import { updateStatus } from 'service/pages'

export const dynamic = 'force-dynamic'
export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  const { status } = await req.json()
  if (!id || !status) return new Response('Bad Request', { status: 400 })

  return updateStatus({ id, status })
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
