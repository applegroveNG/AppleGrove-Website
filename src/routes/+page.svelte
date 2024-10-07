<script>
	import LogoHuge from '$lib/atoms/icons/LogoHuge.svelte';
	import Header from '$lib/templates/Header.svelte';
	import HeroVideo from '$lib/templates/HeroVideo.svelte';
</script>

{#snippet LearnMore()}
	<div class="learn-container">
		<div class="sleek learn">
			<div class="container">
				<div class="learn-more-logo">
					<LogoHuge />
				</div>

				<div class="learn-more-content">
					<p>
						Applegrove Advisory is an innovation development company committed to driving growth and
						impact across Africa. We partner with startups, MSMEs, public sector companies, and
						development organizations, providing strategic insights, innovative solutions, and
						comprehensive support to propel their success.
					</p>
					<a class="cta" href="/"> Learn about AppleGrove </a>
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet Innovation()}
	<div class="sleek">
		<div class="container reverse-on-mobile">
			<div class="left">
				<h2>Innovation and Impact</h2>
				<p>
					Innovation is at the core of what we do. We leverage the power of technology and strategic
					projects to deliver value across both legacy and emerging sectors in Africa
				</p>
				<a class="ctal pale" href="/">Learn more about our services</a>
			</div>
			<div class="right">
				<img src="/innovation.png" alt="innovation" />
			</div>
		</div>
	</div>
{/snippet}

<Header />
<HeroVideo />
{@render LearnMore()}
{@render Innovation()}

<style>
	.sleek {
		max-width: 1440px;
		display: flex;
		margin: auto;
	}
	.container {
		width: 100%;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		margin: auto;
		gap: 2rem;
	}

	.learn {
		background: #fcfcfc;
		margin-bottom: 5rem;
	}

	.learn-container {
		margin-top: 4rem;
		background-color: #fcfcfc;
	}

	.learn-more-logo {
		display: flex;
		justify-content: center;
	}

	.learn-more-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.cta {
		padding: 1rem 2rem;
		background: #f4ad20;
		color: #151d3b;
		border-radius: 5px;
		font-weight: 600;

		text-decoration: none;
		box-shadow: 0px 1px 2px 0px #1018280d;
		border: 1px solid #f4ad20;
		font-family: Inter;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		text-align: left;
		margin-right: auto;
		margin-top: 3rem;
		margin-bottom: 6rem;
	}

	.ctal {
		padding: 16px 28px 16px 28px;
		gap: 12px;
		border-radius: 8px 0px 0px 0px;
		border: 1px 0px 0px 0px;
		opacity: 0px;
	}

	.cta:hover {
		background-color: #f9a826;
	}

	p {
		font-family: Inter;
		font-size: 17px;
		font-weight: 400;
		/* line-height: 24px; */
	}

	.left h2 {
		font-family: Inter;
		font-size: 60px;
		font-weight: 600;
		line-height: 72px;
		letter-spacing: -0.02em;
		text-align: left;
		color: #151d3b;
		margin-bottom: 3rem;
	}
	.reverse-on-mobile p {
		font-family: Inter;
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		text-align: left;
		color: #667085;
		max-width: 500px;
	}

	@media (min-width: 1199px) {
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			flex-direction: row;
		}

		.learn-more-content {
			max-width: 550px;
			margin: auto;
		}
		p {
			font-size: 20px;
			font-family: Inter;
			font-size: 24px;
			font-weight: 400;
			line-height: 40px;
			letter-spacing: -0.04em;
			text-align: left;
		}
		.cta {
			padding: 1rem 3rem;
		}
	}

	@media (max-width: 1199px) {
		.learn-more-logo {
			width: 100px;
			height: 100px;
			margin: auto;
			padding-bottom: 1rem;
		}
		.reverse-on-mobile {
			flex-direction: column-reverse;
			margin-top: 3rem;
		}

		.left h2 {
			font-size: 40px;
			line-height: 48px;
		}
	}

	:global(.learn-more-logo svg) {
		@media screen and (max-width: 1199px) {
			width: 100%;
			height: 100%;
		}
	}
</style>
