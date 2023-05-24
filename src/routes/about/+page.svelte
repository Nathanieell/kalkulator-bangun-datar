<script lang="ts">
	import Meta from '$src/lib/components/Meta.svelte';

	const members = [
		{
			name: 'Ammar Farras H',
			avatar: '/avatar-blank.jpg',
			role: 'Contributor'
		},
		{
			name: 'Dean Akmal',
			avatar: '/avatar-blank.jpg',
			role: 'Contributor'
		},
		{
			name: 'Dwi Nurfatimah',
			avatar: '/avatar-blank-girl.jpg',
			role: 'Contributor'
		},
		{
			name: 'Felisha Rizky Amelia',
			avatar: '/avatar-blank-girl.jpg',
			role: 'Contributor'
		},
		{
			name: 'Mochamad Feri Zidan Dinezad',
			avatar: '/avatar-blank.jpg',
			role: 'Project Leader'
		},
		{
			name: 'Muhamad Fatir Kurniawan',
			avatar: '/avatar-blank.jpg',
			role: 'Mentor'
		},
		{
			name: 'Nurul Haena',
			avatar: '/avatar-blank-girl.jpg',
			role: 'Contributor'
		},
		{
			name: 'Rama Ahmad Fauzi',
			avatar: '/avatar-blank.jpg',
			role: 'Contributor'
		},
		{
			name: 'Raymond David Imanuel',
			avatar: '/avatar-blank.jpg',
			role: 'Contributor'
		},
		{
			name: 'Wulansari',
			avatar: '/avatar-blank-girl.jpg',
			role: 'Contributor'
		}
	];
</script>

<Meta title="About" />
<br />
<div class="container max-w-6xl px-3 lg:px-0 md:mx-auto">
	<section>
		<div class="flex flex-col gap-y-14">
			<div>
				<div class="flex items-center justify-center gap-x-2" style="color: #5370C7;">
					<h1 class="font-bold text-lg whitespace-nowrap">Project Contributor</h1>
					<img src="/jigsaw.png" width="24px" height="24px" alt="Role Icon" />
					<!-- {#if staff.icon !== ''}
                    {/if} -->
					<div class="h-[1.6px] w-full" style="background-color: #5370C7; " />
				</div>
				<div class="h-[2rem]" />
				<div
					class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-x-16 gap-y-10 items-center justify-center"
				>
					{#each members as member}
						<div
							class="flex flex-col gap-y-1 text-center whitespace-nowrap font-bold text-lg justify-center items-center"
						>
							<div class="w-[125px] h-[125px]">
								<img
									style="border-color: #5370C7;"
									class="rounded-full border-[3px] object-contain"
									src={member.avatar}
									alt="{member.name} Avatar"
									height="125px"
									width="125px"
								/>
							</div>
							<h1>{member.name}</h1>
							<p>{member.role}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<br /><br />
	<section class="mt-5 flex justify-start items-start flex-col">
		<h1 class="text-2xl font-bold">Attribution</h1>
		<ul class="list-disc ml-4">
			<li>
				<a href="https://www.flaticon.com/free-icons/puzzle" title="puzzle icons"
					>Puzzle icons created by monkik - Flaticon</a
				>
			</li>
			<li>
				<a href="https://www.flaticon.com/free-icons/calculator" title="calculator icons"
					>Calculator icons created by Freepik - Flaticon</a
				>
			</li>
		</ul>
	</section>
</div>
