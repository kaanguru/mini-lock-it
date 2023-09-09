import Dexie from 'dexie';

export interface Computer {
	id?: number;
	name: string;
}

export class DexieDatabase extends Dexie {
	computers!: Dexie.Table<Computer, number>;

	constructor() {
		super('DexieDatabase');

		this.version(1).stores({
			computers: '++id, name'
		});

		this.computers = this.table('computers');
	}
}

export const db = new DexieDatabase();
