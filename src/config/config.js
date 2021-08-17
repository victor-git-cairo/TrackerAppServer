module.exports = {
  port: 8081, 
  db: {
    database: process.env.BD_NAME || 'tabtracker',
    user: process.env.BD_USER || 'tabtracker',
    password:  process.env.BD_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  } 
}