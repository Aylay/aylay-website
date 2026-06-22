import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';

// Retire le préfixe de langue de l'URL pour router vers le bon fichier de route.
export const reroute: Reroute = (request) => deLocalizeUrl(request.url).pathname;
