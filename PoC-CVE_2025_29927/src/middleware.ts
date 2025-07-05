import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

	if (request.nextUrl.pathname.startsWith('/admin')) {
		console.log('Middleware triggered for /admin, redirecting to home.');

		const url = request.nextUrl.clone();
		url.pathname = '/';
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}


export const config = {
  	matcher: '/admin/:path*',
};