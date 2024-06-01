import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    photo_url!: string

    @Column()
    location!: string

    @Column()
    date!: Date

    @Column('time')
    beginning_time!: Date

    @Column('time')
    end_time!: Date

    @Column()
    responsible!: string

    @Column()
    reason!: string

    @Column()
    informations!: string

    @Column()
    guests!: string
}