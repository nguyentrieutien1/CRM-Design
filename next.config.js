/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	transpilePackages: [
		'lodash-es',
		'@fullcalendar/common',
		'@fullcalendar/react',
		'@fullcalendar/timegrid',
		'@fullcalendar/daygrid',
	],
	images: {
		domains: [
			'localhost',
			'projects.muraflex.net',
			'api.projects.muraflex.net',
			'portal.muraflex.net',
			'api.portal.muraflex.net',
			'muraflex.net',
			'muraflex.com',
      'fcb-abj-pre.s3.amazonaws.com'
		],
	},
}

module.exports = nextConfig
