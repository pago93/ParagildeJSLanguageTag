<script>
	import { languageTag } from "$lib/paraglide/runtime.js"
	import { i18n } from '$lib/i18n.js'
    import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let currentLangUrl = '';
	let currentLangTag = '';

	onMount(() => {
		currentLangUrl = i18n.getLanguageFromUrl($page.url);
		console.log('i18n.getLanguageFromUrl($page.url) from +page.svelte: ' + currentLangUrl);
		currentLangTag = languageTag();
		console.log('languageTag() from +page.svelte: ' + currentLangTag);
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>	
	<a href={i18n.route($page.url.pathname)} hreflang="de" aria-current={"de" === languageTag() ? "page" : undefined}>DE</a>
	<a href={i18n.route($page.url.pathname)} hreflang="en" aria-current={"en" === languageTag() ? "page" : undefined}>EN</a>
	<hr />
	<p>i18n.getLanguageFromUrl($page.url): {currentLangUrl}</p>
	<p>languageTag(): {currentLangTag}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
