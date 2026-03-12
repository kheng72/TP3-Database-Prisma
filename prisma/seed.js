const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  // ดู roles ใน PostgreSQL
  const users = await prisma.$queryRawUnsafe(`
    SELECT rolname FROM pg_roles;
  `);

  console.log("Current users:", users);

  // สร้าง user radius ถ้ายังไม่มี
  await prisma.$executeRawUnsafe(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT FROM pg_roles WHERE rolname = 'radius'
      ) THEN
        CREATE USER radius WITH PASSWORD 'radius123';
      END IF;
    END
    $$;
  `);

  console.log("Radius user created or already exists");

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