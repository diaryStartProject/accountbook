import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Bank{
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    total_balance : number

    @Column()
    bank_number : string

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date 
}
