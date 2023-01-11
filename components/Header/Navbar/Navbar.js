import StyledNavbar, {
	Content,
	Logo,
	LogoImageWrapper,
	LogoText,
	List,
	LangSwitcher,
} from "./Navbar.styled";
import { NavbarGLobeIcon } from "../../Common/svg_db";
import { Container } from "../../Common/Common.styled";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Image from "next/legacy/image";
import Link from "next/link";

const Navbar = () => {
	const { t: translate } = useTranslation("common");
	const router = useRouter();

	return (
		<StyledNavbar>
			<Container>
				<Content>
					<Logo>
						<LogoImageWrapper>
							<Image
								src="/images/navbar_logo.png"
								layout="fill"
								quality={100}
								priority
							/>
						</LogoImageWrapper>

						<LogoText>
							AVTO<span>MATADOR</span>
						</LogoText>
					</Logo>

					<List>
						{translate("navbar_links", { returnObjects: true }).map(
							(link, index) => (
								<li key={index}>{link}</li>
							)
						)}
					</List>

					<LangSwitcher>
						<NavbarGLobeIcon />
						<ul>
							<li className={router.locale === "uz" ? "active" : ""}>
								<Link href={router.pathname} locale={router.locales[1]}>
									Uzb
								</Link>
							</li>
							<li className={router.locale === "ru" ? "active" : ""}>
								<Link href={router.pathname} locale={router.locales[0]}>
									Rus
								</Link>
							</li>
						</ul>
					</LangSwitcher>
				</Content>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
