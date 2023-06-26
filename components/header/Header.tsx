import Image from "next/image";
import logo from "@/public/images/logo/logo.png";
import MenuItem from "./MenuItem";
import { menuData } from "@/libs/data";

const Header = () => {
	return (
		<header className="bg-white py-5 shadow">
			<nav className="mx-5 md:mx-16 lg:mx-20 xl:mx-24">
				<div className="w-full flex items-center justify-between">
					{/* Logo */}
					<Image src={logo} alt="Logo" className="w-20" />

					{/* Main Menu */}
					<div className="hidden lg:block">
						<ul className="flex items-center gap-x-4">
							{menuData.map((item) => (
								<MenuItem
									key={item.title}
									title={item.title}
									link={item.link}
								/>
							))}
						</ul>
					</div>

					{/* Mobile Menu */}
				</div>
			</nav>
		</header>
	);
};

export default Header;
