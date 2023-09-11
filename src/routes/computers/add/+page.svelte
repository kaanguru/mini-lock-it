<script lang="ts">
	import { db, type Computer } from '$lib/db';
	import type { PageData } from './$types';
	import { superForm, setMessage } from 'sveltekit-superforms/client';
	import { z } from 'zod';
	const computerSchema = z.object({
		name: z.string().min(1)
	});
	export let data: PageData;

	const { form, errors, message, constraints, enhance } = superForm(data.form, {
		SPA: true,
		validators: computerSchema,
		onUpdate({ form }) {
			addComputer({ name: $form.name });
			setMessage(form, 'Valid data!');
		}
	});
	async function addComputer(comp: Computer): Promise<void> {
		await db.computers.add(comp);
	}
</script>

<h1>Add Computer</h1>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" use:enhance>
	<label>
		computer Name<br />
		<input
			aria-invalid={$errors.name ? 'true' : undefined}
			bind:value={$form.name}
			{...$constraints.name}
		/>
	</label>
	{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

	<button>add</button>
</form>

<style>
	button {
		@apply bg-blue-500  text-white font-bold py-2 px-4;
	}
	label {
		@apply block text-gray-500 font-bold  mb-1 pr-4;
	}
</style>
