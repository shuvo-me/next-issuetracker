import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const createFakerUsers = () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    posts: {
      create: [
        {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          published: faker.datatype.boolean(),
        },
      ],
    },
    profile: {
      create: {
        bio: faker.person.bio(),
      },
    },
  });
  const fakeUsers = faker.helpers.multiple(createFakerUsers, { count: 20 });
  const users = fakeUsers.map((user) =>
    prisma.user.createMany({ data: { ...user } })
  );

  const data = await Promise.all([users]);
  console.log({ data });
  //   const user = await prisma.user.create({
  //     data: {
  //       name: faker.person.fullName(),
  //       email: faker.internet.email(),
  //       posts: {
  //         create: [
  //           {
  //             title: faker.lorem.sentence(),
  //             content: faker.lorem.paragraph(),
  //             published: faker.datatype.boolean(),
  //           },
  //         ],
  //       },
  //       profile: {
  //         create: {
  //           bio: faker.person.bio(),
  //         },
  //       },
  //     },
  //   });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
