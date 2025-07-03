import type { APIRoute } from 'astro';

export const prerender = false; // Force this route to be server-rendered

export const GET: APIRoute = async (context) => {
	const fullUrl = new URL(context.request.url);
	const targetUrl = fullUrl.searchParams.get('url');
	
	console.log('Proxy request for:', targetUrl);
	
	if (!targetUrl) {
		return new Response(JSON.stringify({ 
			error: 'URL parameter is required',
			status: 'error',
			version: 'Fehler beim Laden'
		}), {
			status: 400,
			headers: { 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});
	}

	try {
		// Validate URL format
		new URL(targetUrl);
		
		// Fetch the target URL with timeout
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
		
		const response = await fetch(targetUrl, {
			signal: controller.signal,
			headers: {
				'User-Agent': 'Shield-Docs-Proxy/1.0',
				'Accept': '*/*',
				'Cache-Control': 'no-cache'
			}
		});
		
		clearTimeout(timeoutId);

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const text = await response.text();
		
		// Try multiple version patterns
		let version = 'Keine Version gefunden';
		
		// Pattern 1: v1.2.3 format
		const versionRegex1 = /v\d+\.\d+\.\d+/i;
		let versionMatch = versionRegex1.exec(text);
		if (versionMatch) {
			version = versionMatch[0];
		} else {
			// Pattern 2: "version":"1.2.3" format (for JSON)
			const versionRegex2 = /"version"\s*:\s*"(\d+\.\d+\.\d+)"/i;
			versionMatch = versionRegex2.exec(text);
			if (versionMatch) {
				version = `v${versionMatch[1]}`;
			} else {
				// Pattern 3: $metadata.version format (for figma tokens.json)
				const versionRegex3 = /"\$metadata"\s*:\s*{[^}]*"version"\s*:\s*"([^"]+)"/i;
				versionMatch = versionRegex3.exec(text);
				if (versionMatch) {
					version = versionMatch[1].startsWith('v') ? versionMatch[1] : `v${versionMatch[1]}`;
				} else {
					// Pattern 4: simple 1.2.3 format
					const versionRegex4 = /\b\d+\.\d+\.\d+\b/;
					versionMatch = versionRegex4.exec(text);
					if (versionMatch) {
						version = `v${versionMatch[0]}`;
					}
				}
			}
		}

		console.log('Version found:', version, 'for URL:', targetUrl);

		return new Response(JSON.stringify({ 
			version,
			status: 'success',
			url: targetUrl
		}), {
			status: 200,
			headers: { 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

	} catch (error: any) {
		console.error('Proxy error:', error.message, 'for URL:', targetUrl);
		
		let errorMessage = 'Fehler beim Laden';
		if (error.name === 'AbortError') {
			errorMessage = 'Timeout';
		} else if (error.message.includes('CORS')) {
			errorMessage = 'CORS Error';
		}
		
		return new Response(JSON.stringify({ 
			error: error.message,
			status: 'error',
			url: targetUrl,
			version: errorMessage
		}), {
			status: 500,
			headers: { 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});
	}
};
