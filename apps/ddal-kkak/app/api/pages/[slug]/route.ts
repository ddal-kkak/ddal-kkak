import { NextRequest, NextResponse } from 'next/server'
import { getPage } from 'service/pages'

type Context = {
  params: { slug: string }
}

export async function GET(req: NextRequest, context: Context) {
  const id = context.params.slug
  if (!id) {
    return new Response('Bad Request', { status: 400 })
  }
  return getPage(id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
}
