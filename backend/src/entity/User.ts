import { timeStamp } from 'console';
import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm';
import { Account } from './Account';

@Entity()
class User extends BaseEntity {
	@ObjectIdColumn()
	id: ObjectID;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	provider: string;

	@Column({ nullable: false })
	provider_id: string;

	@Column({ type: 'timestamp' })
	login_date: Date;

	@Column()
	ip_address: string;

	@Column((type) => Account)
	accounts: Account[];
}

export default User;
