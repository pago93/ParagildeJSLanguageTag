import type { PageLoad } from './$types';
import { i18n } from '$lib/i18n.js'
import { languageTag } from "$lib/paraglide/runtime.js"

export const prerender = true;
export const ssr = false;

export const load: PageLoad = ({ url }) => {
    let currentLangUrl = i18n.getLanguageFromUrl(url);
    console.log('i18n.getLanguageFromUrl(url) from +page.ts: ' + currentLangUrl);
    let currentLangTag = languageTag();
    console.log('languageTag() from +page.ts: ' + currentLangTag);
};