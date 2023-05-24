<script lang="ts">
	export let name = 'Kalkulator Bangun Datar';
	export let title = 'Home';
	export let description =
		'Kalkulator bangun datar untuk menghitung luas dan keliling. Karya 59 PPLG 2 SMKN 1 Karawang';
	export let color = '#4af076';
</script>

<svelte:head>
	<title>{name} - {title}</title>
	<meta name="twitter:title" content="{name} - {title}" />
	<meta property="og:title" content="{name} - {title}" />
	<meta property="og:site_name" content={name} />
	{#if !!description}
		<meta name="description" content={description} />
		<meta name="twitter:description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	{#if !!color}
		<meta name="theme-color" content={color} />
	{/if}
	<meta property="og:locale" content="id_ID" />
	<meta property="og:type" content="website" />
</svelte:head>
