import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("seeding....");
}

main()
  .catch((error) => console.error({ error }))
  .finally(async () => {
    await prisma.$disconnect();
  });
