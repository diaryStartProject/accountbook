import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm"
import {Bank} from './Bank'
import { Transaction } from "./Transaction"

@Entity()
export class Account{
    @ObjectIdColumn()
    id: ObjectID

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date

    @Column(type => Bank)
    bank:Bank[]

    @Column(type => Transaction)
    transactions:Transaction[]
}
