import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"
import { Account } from "./Account"

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    provider: string

    @Column({nullable: false})
    provider_id:string

    @Column(type => Account)
    accounts:Account[]
}
