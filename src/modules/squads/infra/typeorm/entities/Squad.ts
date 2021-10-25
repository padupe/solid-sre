import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('squads')
class Squad {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        };
    };
};

export { Squad };