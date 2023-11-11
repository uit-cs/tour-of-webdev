import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
	title: 'Trainee Program - A Tour of WebDev',
	description: 'A tour of web development made for adventurers.',
	verification: {
		other: {
			referrer: 'no-referrer',
		},
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	)
}