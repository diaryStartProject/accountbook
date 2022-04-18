import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm"

export enum TransactionType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

@Entity()
export class Transaction {

    @ObjectIdColumn()
    id: ObjectID

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @Column()
    cost: number

    @Column()
    behavior: string

    @Column({
        type:'string',
        enum: TransactionType,
        default:[TransactionType.INCOME]
    })
    transaction_behavior: string
}
