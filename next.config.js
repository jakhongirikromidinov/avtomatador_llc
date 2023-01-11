/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withVideos = require("next-videos");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	withVideos,
};

module.exports = nextConfig;
