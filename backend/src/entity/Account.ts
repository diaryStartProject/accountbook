import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from 'typeorm';
import { Bank } from './Bank';
import { Transaction } from './Transaction';

@Entity()
export class Account {
	@ObjectIdColumn()
	id: ObjectID;

	@Column((type) => Bank)
	bank: Bank[];

	@Column((type) => Transaction)
	transactions: Transaction[];

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;
}
