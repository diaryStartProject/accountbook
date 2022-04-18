import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from 'typeorm';

export enum TransactionType {
	INCOME = 'income',
	EXPENSE = 'expense',
}

@Entity()
export class Transaction {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	cost: number;

	@Column()
	behavior: string;

	@Column({
		type: 'string',
		enum: TransactionType,
		default: [TransactionType.EXPENSE],
	})
	transaction_behavior: string;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;
}
