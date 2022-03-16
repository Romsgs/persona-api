export default {
  PORT: 3000,
  HOST: "localhost",
  DATABASE_URL: "postgres://postgres:123@localhost:5432/persona",
  saltWorkFactor: 10,
  accesTokenTimeToLive: "15m",
  refreshTokenTimeToLive: "1y",
  publicKey: "publicKey",
  privateKey: "privateKey",
};