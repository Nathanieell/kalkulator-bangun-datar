export enum FormulaType {
	Luas = 0,
	Keliling = 1
}

export const toTitleCase = (str: string) =>
	str
		.replace(/(^\w)/g, (g) => g[0].toUpperCase())
		.replace(/([-_]\w)/g, (g) => ' ' + g[1].toUpperCase())
		.trim();
export const shapes = [
	{
		name: 'Persegi Panjang',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['panjang', 'lebar'],
				formula: '%0 * %1'
			},
			{
				type: FormulaType.Keliling,
				fields: ['panjang', 'lebar'],
				formula: '2 * (%0 + %1)'
			}
		]
	},
	{
		name: 'Segitiga Sama Sisi',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['alas', 'tinggi'],
				formula: '1/2 * %0 * %1'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi_a', 'sisi_b', 'sisi_c'],
				formula: '%0 + %1 + %2'
			}
		]
	},
	{
		name: 'Lingkaran',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['jari_jari'],
				formula: 'Math.PI * %0 * %0'
			},
			{
				type: FormulaType.Keliling,
				fields: ['jari_jari'],
				formula: '2 * Math.PI * %0'
			}
		]
	},
	{
		name: 'Jajar Genjang',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['alas', 'tinggi'],
				formula: '%0 * %1'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi_a', 'sisi_b'],
				formula: '2 * (%0 + %1)'
			}
		]
	},
	{
		name: 'Persegi',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['sisi'],
				formula: '%0 * %0'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi'],
				formula: '4 * %0'
			}
		]
	},
	{
		name: 'Trapesium',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['sisi_a', 'sisi_b', 'tinggi'],
				formula: '1/2 * (%0 + %1) * %2'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi_a', 'sisi_b', 'sisi_c', 'sisi_d'],
				formula: '%0 + %1 + %2 + %3'
			}
		]
	},
	{
		name: 'Belah Ketupat',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['diagonal_1', 'diagonal_2'],
				formula: '1/2 * %0 * %1'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi'],
				formula: '4 * %0'
			}
		]
	},
	{
		name: 'Layang - Layang',
		formulas: [
			{
				type: FormulaType.Luas,
				fields: ['diagonal_1', 'diagonal_2'],
				formula: '1/2 * %0 * %1'
			},
			{
				type: FormulaType.Keliling,
				fields: ['sisi_atas', 'sisi_bawah'],
				formula: '2 * (%0 + %1)'
			}
		]
	}
];
