import { User } from '../../../../accounts/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('squads')
class Squad {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'users-squads',
    joinColumns: [{ name: 'squad_id' }],
    inverseJoinColumns: [{ name: 'user_id' }],
  })
  users: User[];
  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Squad };
