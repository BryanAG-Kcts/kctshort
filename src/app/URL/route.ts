import { NextRequest, NextResponse } from 'next/server'
import { db } from '@vercel/postgres'
import { nanoid } from 'nanoid'

export async function POST (request : NextRequest) {
  const host = request.headers.get('host')
  const { url } = await request.json()
  const id = nanoid(8)

  const client = await db.connect()

  try {
    const intertQuery = client.query('INSERT INTO short (Id, Redirect_url) VALUES ($1, $2)', [id, url])
    const deleteQuery = client.query("DELETE FROM short WHERE Create_at < NOW() - interval '2 hours'")

    await intertQuery
    await deleteQuery

    return NextResponse.json({
      urlShorted: `https://${host}/${id}`
    })
  } catch (error) {
    return NextResponse.error()
  } finally {
    client.release()
  }
}

export function GET () {
  return NextResponse.json({
    message: 'Hola mundo'
  })
}
