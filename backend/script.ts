import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const playlist = await prisma.playlist.create({
    data: {
      name: 'Teste',
      description: 'Testando',
      author: 'Vinicius'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

