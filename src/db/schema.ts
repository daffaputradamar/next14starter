import { boolean, date, integer, pgEnum, pgTable, pgTableCreator, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `nextjsstarter_${name}`);

export const users = createTable('users', {
    username: varchar('username', { length: 50 }).primaryKey(),
    email: varchar('email', { length: 50 }).unique(),
    password: varchar('password'),
    img: varchar('img'),
    isAdmin: boolean('is_admin').default(false)
})

export const blogposts = createTable('blogposts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    slug: varchar('slug', { length: 300 }),
    body: varchar('body'),
    img: varchar('img'),
    createdAt: timestamp('created_at').defaultNow(),
    author: varchar('author').references(() => users.username)
})