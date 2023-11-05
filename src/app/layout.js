import './globals.css'

export const metadata = {
	title: 'Trainee Program - A Tour of WebDev',
	description: 'A tour of web development made for adventurers.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
