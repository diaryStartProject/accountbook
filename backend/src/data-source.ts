import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'mongodb',
	database: 'accountbook',
	synchronize: true,
	logging: false,
	entities: ['src/entity/*.ts'],
	migrations: [],
	subscribers: [],
});
