// นี่คือการ insert ข้อมูลของอาจารย์เข้า prisma ของเรา
// เราจะใช้คำสั่ง `npx prisma db seed` เพื่อรันไฟล์นี้

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.building.createMany({
    data: [
      { buildingCode: "A", buildingName: "อาคารบริหาร" },
      { buildingCode: "AE", buildingName: "อาคารปฏิบัติการวิศวกรรมเกษตร" },
      { buildingCode: "B", buildingName: "อาคารเฉลิมพระเกียรติ 6 รอบพระชนพรรษา" },
      { buildingCode: "C", buildingName: "อาคารปฏิบัติการวิทยาศาสตร์" }
    ]
  })

  await prisma.room.createMany({
    data: [
      {
        roomCode: "A304",
        buildingCode: "A",
        roomFloor: "3",
        roomCapacity: "30",
        roomDesc: "ห้องเรียนบรรยาย"
      },
      {
        roomCode: "B110",
        buildingCode: "B",
        roomFloor: "1",
        roomCapacity: "25",
        roomDesc: "ห้องปฎิบัติการแปรรูปอาหาร"
      }
    ]
  })

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })