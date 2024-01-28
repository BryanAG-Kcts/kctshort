import { NextResponse } from 'next/server'
import { db } from '@vercel/postgres'
import { nanoid } from 'nanoid'

export async function POST (request : NextResponse) {
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto')
  const { url } = await request.json()
  const id = nanoid(8)
  try {
    const client = await db.connect()
    await client.query('INSERT INTO short (Id, Redirect_url) VALUES ($1, $2)', [id, url])

    return NextResponse.json({
      urlShorted: `${protocol}://${host}/${id}`
    })
  } catch (error) {
    return NextResponse.error()
  }
}
