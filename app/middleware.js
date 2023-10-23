import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {

    // ensures user is logged in if they're idle , refreshes session
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return res
}