import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'pokemon_card_db',
  synchronize: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
});
