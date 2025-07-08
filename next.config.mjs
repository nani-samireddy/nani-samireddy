/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
};

// check if the ENV is local or production
const isLocal = process.env.ENV === 'local';

if (!isLocal) {
	nextConfig.basePath = process.env.BASE_PATH || '/nani-samireddy';
	nextConfig.assetPrefix = process.env.BASE_PATH || '/nani-samireddy';
	nextConfig.publicRuntimeConfig = {
		basePath: process.env.BASE_PATH || '/nani-samireddy',
	};
}

export default nextConfig;
