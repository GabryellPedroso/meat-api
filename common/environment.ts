export const environment = {
  server: { port: process.env.SERVER_PORT || 3000 },
  db: { url: process.env.DB_URL || 'mongodb+srv://gabryellcorrea:o2lT5wcxfOdbp9Oe@development-m10la.gcp.mongodb.net/test?retryWrites=true&w=majority' }
}