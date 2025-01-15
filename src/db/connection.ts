import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const dbpool = mysql
	.createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		port: Number(process.env.DB_PORT)
	})
	.promise()

export default dbpool
