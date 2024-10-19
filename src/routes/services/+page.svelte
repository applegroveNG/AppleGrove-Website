<script lang="ts">
	import hearderImg from '$lib/assets/Frame91.png';
	import service01Img from '$lib/assets/Rectangle133.png';
	import service02Img from '$lib/assets/Rectangle134.png';
	import service03Img from '$lib/assets/it.png';
	import service04Img from '$lib/assets/innovation.png';
	import smeImg from '$lib/assets/sme.png';
	import glossImg from '$lib/assets/gloss.png';
	import Container from '../../Components/Container.svelte';
	import SvgIcon01 from '$lib/atoms/icons/SvgIcon01.svelte';
	import SvgIcon02 from '$lib/atoms/icons/SvgIcon02.svelte';
	import SvgIcon03 from '$lib/atoms/icons/SvgIcon03.svelte';
</script>

<div class="relative overflow-hidden">
	<div class="container mx-auto w-full lg:px-14">
		<div class="absolute w-full h-full place-content-center leading-5">
			<h1 class="font-semibold lg:text-8xl max-w-[1016px] text-[#FBF8F2]">
				Turning Vision into Reality through Expert Guidance
			</h1>
		</div>
	</div>
	<img src={hearderImg} alt="" class="h-[80vh] object-cover w-full" />
</div>
<Container>
	<div class="grid place-content-center text-center pb-24">
		<h2 class="text-6xl font-semibold mb-4 text-apple-blue">What we offer</h2>
		<p class="w-[504px] text-[#667085]">
			We aim to deliver strong results and impact through comprehensive Consulting and Advisory
			Services focused on driving measurable results and long-term success
		</p>
	</div>
	<div class="grid w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">01</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div class="mt-5 pb-24">
		<h2 class="text-7xl max-w-[941px] text-apple-blue font-semibold">
			Consulting and Advisory Services
		</h2>
		<div class="flex mt-40 justify-between items-center">
			<div class="">
				<img src={service01Img} alt="" />
			</div>
			<p class="max-w-[468px] text-apple-blue font-medium text-2xl leading-8">
				Our consulting and advisory services offer expert guidance to help businesses, public sector
				entities, and development organizations navigate complex challenges and seize new
				opportunities
			</p>
		</div>
	</div>
	<div class="grid w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">02</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div class="mt-5 pb-24">
		<h2 class="text-7xl max-w-[941px] text-apple-blue font-semibold">
			Strategic Project Development
		</h2>
		<div class="flex justify-between mt-40">
			<div class="">
				<img src={service02Img} alt="" />
			</div>
			<div class="max-w-[468px]">
				<p class="text-apple-blue font-medium text-2xl leading-8">
					At Applegrove Advisory, we excel in strategic project development, focusing on joint
					ventures and partnerships that drive mutual growth and success.
				</p>
				<p class="mt-20 text-[#344054] text-lg leading-8">
					Our expert team conducts thorough market analysis, identifies potential partners, and
					facilitates seamless collaboration. By aligning broad objectives and specific business
					goals with strategic partners, we ensure optimal outcomes and long-term success.
				</p>
			</div>
		</div>
	</div>
	<div class="grid w-[1013px] gap-4 mb-4">
		<span class="border-[#D0D5DD] font-medium text-sm px-2 py-1 rounded-xl w-fit border">03</span>
		<span
			class="relative border-b border-[#D0D5DD] after:border-r after:absolute after:h-14 after:border-[#D0D5DD] after:right-0 after:transform after:-translate-x-1/2 after:-translate-y-1/2"
		></span>
	</div>
	<div class="mt-5 pb-24">
		<h2 class="text-7xl max-w-[941px] text-apple-blue font-semibold">
			IT Services and Digital Transformation
		</h2>
		<div class="flex flex-col mt-40">
			<div class="flex justify-between">
				<p class="max-w-[468px] text-apple-blue font-medium text-2xl leading-8 text-justify">
					Embrace the future with Applegrove Advisory's IT Services and Digital Transformation
					solutions tailored to corporates. We provide state-of-the-art digital transformation
					services to elevate your business operations and processes.
				</p>
				<img src={service03Img} alt="" />
			</div>
			<div class="flex justify-between">
				<img src={service04Img} alt="" />
				<p class="mt-20 max-w-[468px] text-[#344054] text-lg leading-8">
					We offer technology integration services tailored to meet your specific needs, ensuring a
					smooth transition and improved efficiency.
				</p>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div class="flex justify-between">
		<div class="flex-col flex gap-16">
			<h2 class="text-7xl max-w-[941px] text-apple-blue font-semibold leading-snug">
				Venture Development and <span class="bg-[#FBEAC6] rounded-full py-2 px-6">MSME Support</span>
			</h2>
			<p class="w-[562px] text-apple-blue font-medium text-2xl">
				We believe in nurturing the next generation of innovative businesses. Our Venture
				Development arm - The Grove Foundry (Venture studio + Syndicate fund) is designed to support
				startups and established companies alike, providing the tools, network, market support and
				investments needed to turn visionary ideas into successful ventures.
			</p>
			<a href="#top" class="bg-[#FFFCF5] font-semibold w-fit text-apple-blue p-4 rounded-lg"
				>Learn more about venture development</a
			>
		</div>
		<div class="">
			<img src={smeImg} alt="" />
		</div>
	</div>
</Container>
<Container>
	<div class="">
		<div class="flex flex-col p-16 bg-apple-blue rounded-3xl relative h-[582px]">
			<div class="absolute bottom-0 left-0 grid text-apple-blue text-6xl font-semibold">
				<span class="relative p-4 rounded-tr-3xl w-fit bg-white">
					<span
						class="absolute -top-20 -left-20 w-20 h-20 bg-white rounded-tl-3xl transform rotate-90 origin-bottom-right after:h-full after:w-full after:bg-apple-blue after:absolute after:rounded-tl-3xl after:-scale-x-100 after:rotate-90"
					>
					</span>
					Industries
				</span>
				<span class="relative p-4 rounded-r-3xl w-fit bg-white">
					<span
						class="absolute -top-[58px] right-[68px] w-16 h-16 bg-white rounded-tl-3xl transform rotate-[92deg] origin-bottom-right  after:h-full after:w-full after:bg-apple-blue after:absolute after:rounded-tl-3xl after:-scale-x-100 after:rotate-[90deg]"
					>
					</span>
					We innovate</span
				>
				<span class="relative p-4 rounded-r-3xl h-20 bg-white">
                    <span
						class="absolute top-0 -right-[220px] w-full h-full bg-apple-blue rounded-l-3xl"
					>
					</span>
                </span>
			</div>
			<img src={glossImg} alt="" class="absolute right-20 -top-36" />

			<div class="flex-1"></div>
			<div class="flex-1">
				<p class="text-white text-xl max-w-[534px] float-end mt-20">
					We specialize in providing expert consulting services across a range of dynamic
					industries. Our goal is to drive innovation, efficiency, and growth in each of these
					industries, serving both the public, private and philanthropic sectors
				</p>
			</div>
		</div>
	</div>
</Container>

<Container>
    <div class="grid grid-cols-2 gap-8">
        <div class="flex h-[568px] w-[576px] gap-8 p-6 flex-col bg-[#FFF6E5] rounded-2xl text-justify">
            <span>
               <SvgIcon02 />
            </span>
            <h5 class="font-bold text-apple-blue text-3xl">Information and Communication Technology (ICT)</h5>
            <p class="text-[#1D2939] text-xl">In the fast-paced world of ICT, staying ahead of the curve is crucial. We offer tailored solutions that enhance your technological capabilities, streamline processes, and foster innovation. From digital transformation to cybersecurity, we help you leverage technology to achieve your business goals.</p>
        </div>
        <div class="flex h-[568px] w-[576px] gap-8 p-6 flex-col bg-[#E5EBFF] rounded-2xl text-justify">
            <SvgIcon03 />
            <h5 class="font-bold text-apple-blue text-3xl">Real Estate and Construction</h5>
            <p class="text-[#1D2939] text-xl">We support real estate and construction companies with strategic planning, market analysis, and project management solutions. Additionally, we offer investment advisory services to guide you towards profitable real estate opportunities and assist with capital mobilization and project finance for developers and real estate companies. Our expertise helps you navigate market fluctuations, optimize operations, and deliver successful projects on time and within budget.</p>
        </div>
        <div class="flex h-[568px] w-[576px] gap-8 p-6 flex-col bg-[#E5EBFF] rounded-2xl text-justify">
            <span>
                 <SvgIcon01 />
            </span>
            <h5 class="font-bold text-apple-blue text-3xl">Creative Economy</h5>
            <p class="text-[#1D2939] text-xl">The creative economy thrives on the power of creativity to drive economic growth. We provide strategic guidance and support to creative enterprises, helping them to innovate, expand their reach, and thrive in competitive markets. Whether you're in media, design, movies or music, we help turn your creative vision into reality.</p>
        </div>
        <div class="flex h-[568px] w-[576px] gap-8 p-6 flex-col bg-[#FFF6E5] rounded-2xl text-justify">
            <span class="rotate-180 w-fit">
                <SvgIcon03 />
            </span>
            <h5 class="font-bold text-apple-blue text-3xl">Energy</h5>
            <p class="text-[#1D2939] text-xl">Our energy sector consulting services are designed to help you navigate and thrive in a rapidly changing landscape. We provide comprehensive insights into sustainable practices, regulatory compliance, and the latest technological advancements. Additionally, we offer specialized advisory services for oil and gas transactions, including project finance, risk management, and strategic partnerships. Our goal is to ensure that your operations are not only efficient and cost-effective but also aligned with environmental sustainability and industry best practices.</p>
        </div>
    </div>
</Container>