"use client";

import Link from "next/link";

interface menuItemProps {
	title: string;
	link: string;
}

const MenuItem: React.FC<menuItemProps> = ({ title, link }) => {
	return (
		<li>
			<Link href={link}>{title}</Link>
		</li>
	);
};

export default MenuItem;
