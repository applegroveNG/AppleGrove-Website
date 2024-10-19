<script lang="ts">
	import Header from '$lib/templates/Header.svelte';
	import '../app.css';
	import Footer from '../Components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
