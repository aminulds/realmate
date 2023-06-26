import "./globals.css";

export const metadata = {
	title: "Real Mate | Find your mate with us",
	description:
		"Find your mate with us. We bringing people together with our platform in very easy way",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
