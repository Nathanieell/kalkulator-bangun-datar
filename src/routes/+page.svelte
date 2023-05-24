<script lang="ts">
	import { FormulaType, shapes, toTitleCase } from '$src/lib/utils';

	let currentShape = -1;
	let formulaText = '';
	let currentFormulaType = FormulaType.Luas;
	let filledFields: (number | undefined)[] = [];

	const parseRawFormulaToText = (
		formula: string,
		fields: string[],
		filledFields: (number | undefined)[]
	) => {
		let res = formula
			.replaceAll(/%(?:\d)/g, (num) => {
				const formulaNum = parseInt(num.split('%')[1]);
				if (filledFields[formulaNum]) return String(filledFields[formulaNum]);
				return toTitleCase(fields[formulaNum]);
			})
			.replace('Math.PI', 'π');

		if (filledFields.length && !filledFields.filter((x) => x === undefined).length) {
			res += ` = ${Number(
				eval(
					formula.replaceAll(/%(?:\d)/g, (num) => {
						const formulaNum = parseInt(num.split('%')[1]);
						return String(filledFields[formulaNum]);
					})
				)
			).toFixed(2)}`;
		}
		return res;
	};

	function onFormulaChange(t: FormulaType) {
		currentFormulaType = t;
		onShapeChange();
	}

	function onFieldChange(fieldNum: number) {
		const shapeFormula = shapes[currentShape].formulas[currentFormulaType];
		const value = (document.getElementById(`field-${fieldNum}`) as HTMLInputElement | undefined)
			?.value;
		if (!value) filledFields[fieldNum] = undefined;
		else filledFields[fieldNum] = Number(value);
		formulaText = parseRawFormulaToText(shapeFormula.formula, shapeFormula.fields, filledFields);
	}

	function onShapeChange() {
		const shapeFormula = shapes[currentShape].formulas[currentFormulaType];
		const fieldsLength = shapes[currentShape].formulas[currentFormulaType].fields.length;
		for (let i = 0; i < fieldsLength; i++) {
			const field = document.getElementById(`field-${i}`) as HTMLInputElement | undefined;
			if (field) field.value = '';
		}

		filledFields = new Array(fieldsLength).fill(undefined);
		formulaText = parseRawFormulaToText(shapeFormula.formula, shapeFormula.fields, filledFields);
	}
</script>

<div class="mt-16 text-center flex flex-col gap-y-4 justify-center items-center">
	<img alt="Icon Calculator" src="/calculator.png" width="75px" height="75px" />
	<select
		bind:value={currentShape}
		on:change={onShapeChange}
		class="select select-bordered w-full max-w-xs"
	>
		<option value={-1} disabled selected>Pilih bangun datar</option>
		{#each shapes as shape, i}
			<option value={i}>{shape.name}</option>
		{/each}
	</select>

	{#if currentShape !== -1}
		<div class="btn-group">
			<button
				on:click={() => onFormulaChange(FormulaType.Luas)}
				class="btn {currentFormulaType === FormulaType.Luas ? 'btn-active' : ''}">Luas</button
			>
			<button
				on:click={() => onFormulaChange(FormulaType.Keliling)}
				class="btn {currentFormulaType === FormulaType.Keliling ? 'btn-active' : ''}"
				>Keliling</button
			>
		</div>
		<div
			class="w-full max-w-xs bg-base-300 shadow-md font-bold text-white text-center py-2 px-4 rounded-md"
		>
			<p>{formulaText}</p>
		</div>
		<div class="w-full flex flex-col items-center gap-y-3">
			{#each shapes[currentShape].formulas[currentFormulaType].fields as field, field_num}
				<input
					id="field-{field_num}"
					on:keyup={() => onFieldChange(field_num)}
					type="number"
					placeholder="Input {toTitleCase(field)}"
					class="input input-bordered w-full max-w-xs"
				/>
			{/each}
		</div>
	{/if}
</div>
