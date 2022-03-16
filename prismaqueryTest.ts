import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // adciona um seguido para um seguidor 
  const allUsers = await prisma.follows.create({
    data: {
      followerId: 3,
      followingId: 4
    }
  })
  console.log(allUsers)
}
// cria um usuario
// async function main() {
//   // Connect the client
//   await prisma.$connect()
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.user.create({
//     data: {
//       username: "Romulo",
//       followers: {},
//       following: {}
//     }
//   })
//   console.log(allUsers)
// }


// async function main() {
//   // Connect the client
//   await prisma.$connect()
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.user.create({
//     data: {
//       email: "Rafael",
//       name : "Rafael",
//       token: "Rafael",
//       seguidores: {
//         create: {}
//       }

//     }
//   })
//   console.log(allUsers)
// }

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })