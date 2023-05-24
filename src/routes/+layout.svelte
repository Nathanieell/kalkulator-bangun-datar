<script lang="ts">
	import Footer from '$src/lib/components/Footer.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import './styles.css';
</script>

<div
	class="w-screen max-w-full overflow-x-hidden overflow-y-auto flex flex-col justify-between h-screen"
>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
