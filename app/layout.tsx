import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import React from "react";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Прометей | Fire Show',
	description: 'Сайт визитка театра огня Прометей',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`bg-peach-600 ${manrope.className}`}>{children}</body>
		</html>
	)
}
