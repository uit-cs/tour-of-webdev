import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
	title: 'Trainee Program - Tour of Code',
	description: 'A tour of code for Trainee Program adventurers',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	)
}
