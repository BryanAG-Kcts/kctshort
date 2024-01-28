import { db } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

interface params {
  params: {
    id: string
  }
}

export async function GET (_ : NextRequest, { params } : params) {
  const { id } = params

  const client = await db.connect()

  try {
    const { rows } = await client.query('SELECT redirect_url FROM short WHERE Id = $1', [id])
    if (rows.length === 0) {
      return NextResponse.json({
        error: 'URL not found'
      })
    }

    const { redirect_url: redirectUrl } = rows[0]
    return NextResponse.redirect(redirectUrl, 302)
  } catch (error) {
    return NextResponse.error()
  } finally {
    client.release()
  }
}
