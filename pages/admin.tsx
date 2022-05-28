import Head from 'next/head'
import Script from 'next/script'

export default function AdminPage() {
	return (
		<>
			<Head>
				<title>Content Manager</title>
				<link href="/admin/config.yml" type="text/yaml" rel="cms-config-url"></link>
			</Head>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js" />
		</>
	)
}
