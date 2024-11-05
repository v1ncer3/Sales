import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Command {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type: "varchar",
        length: 10,
        enum: ["PERSON", "GROUP"],
    })
    type: "PERSON" | "GROUP";

    @Column({
        type: "varchar",
        length: 6,
        enum: ["OPEN", "CLOSED"],
    })
    status: "OPEN" | "CLOSED";

    constructor() {
        this.id = 0; // inicializa id
        this.name = ""; // inicializa name
        this.type = "PERSON"; // inicializa type
        this.status = "OPEN"; // inicializa status
        this.createdAt = new Date(); // inicializa createdAt
        this.updatedAt = new Date(); // inicializa updatedAt
    }
}
