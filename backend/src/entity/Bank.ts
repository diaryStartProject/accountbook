import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from 'typeorm';

@Entity()
class Bank {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	total_balance: number;

	@Column()
	bank_number: string;

	@Column()
	bank_variable: string;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;
}

export default Bank;
