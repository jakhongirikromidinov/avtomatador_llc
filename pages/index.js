import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/Common/Common";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import Calculation from "../components/Calculation/Calculation";
import About from "../components/About/About";
export default function Home() {
	return (
		<Layout>
			<Banner />
			<Features />
			<Calculation />
			<About />
		</Layout>
	);
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"banner",
				"features",
				"calculation",
				"about",
			])),
		},
	};
}
