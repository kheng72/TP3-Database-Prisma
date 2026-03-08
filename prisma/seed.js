// เราจะใช้คำสั่ง `npx prisma db seed` เพื่อรันไฟล์นี้
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  // ---------- BUILDING ----------
  await prisma.building.createMany({
    data: [
      { buildingCode: "A", buildingName: "อาคารบริหาร" },
      { buildingCode: "AE", buildingName: "อาคารปฏิบัติการวิศวกรรมเกษตร" },
      { buildingCode: "B", buildingName: "อาคารเฉลิมพระเกียรติ 6 รอบพระชนพรรษา" },
      { buildingCode: "C", buildingName: "อาคารปฏิบัติการวิทยาศาสตร์" },
      { buildingCode: "D", buildingName: "อาคารปฏิบัติการวิศวกรรมศาสตร์" },
      { buildingCode: "DORM", buildingName: "หอพักนักศึกษา วิทยาเขตชุมพรเขตรอุดมศักดิ์" },
      { buildingCode: "E", buildingName: "อาคารสำนักวิชาพื้นฐาานทั่วไป" },
      { buildingCode: "EE", buildingName: "อาคารปฏิบัติการอิเล็กทรอนิกส์" },
      { buildingCode: "FS1", buildingName: "อาคารปฎิบัติการวิทยาศาสตร์การประมง" },
      { buildingCode: "FS2", buildingName: "อาคารปฎิบัติการเพาะเลี้ยงสัตว์น้ำ" },
      { buildingCode: "HO", buildingName: "อาคารปฏิบัติการพืชสวน" },
      { buildingCode: "KMITLPCC", buildingName: "พื้นที่บริเวณ วิทยาเขตชุมพรเขตรอุดมศักดิ์" },
      { buildingCode: "ME", buildingName: "อาคารปฏิบัติการเครื่องกล" },
      { buildingCode: "STADIUM", buildingName: "สถานที่ออกกำลังกาย และสนามกีฬา" }
    ]
  });

  // ---------- ROOM ----------
  await prisma.room.createMany({
    data: [
      { roomCode: "A304", buildingCode: "A", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "A309", buildingCode: "A", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "AE", buildingCode: "AE", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการวิศวกรรมเกษตร" },

      { roomCode: "B105", buildingCode: "B", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องปฏิบัติการวิทยาศาสตร์เนื้อสัตว์" },
      { roomCode: "B106", buildingCode: "B", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฏิบัติการเทคโนโลยีชีวภาพ" },
      { roomCode: "B107", buildingCode: "B", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฏิบัติการวิทยาศาสตร์การประมง" },
      { roomCode: "B108", buildingCode: "B", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฏิบัติการสรีรวิทยาของสัตว์และกายวิภาคสัตว์" },
      { roomCode: "B109", buildingCode: "B", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้อง Smart cassroom" },
      { roomCode: "B110", buildingCode: "B", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องปฎิบัติการแปรรูปอาหาร" },
      { roomCode: "B113", buildingCode: "B", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องปฎิบัติการแปรรูปน้ำนม" },
      { roomCode: "B114", buildingCode: "B", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องปฎิบัติการแปรรูปพืช" },

      { roomCode: "B206", buildingCode: "B", roomFloor: "2", roomCapacity: "25", roomDesc: "ห้องปฎิบัติการโภชนศาสตร์สัตว์" },
      { roomCode: "B207", buildingCode: "B", roomFloor: "2", roomCapacity: "25", roomDesc: "ห้องปฎิบัติการเคมี" },
      { roomCode: "B208", buildingCode: "B", roomFloor: "2", roomCapacity: "35", roomDesc: "ห้องปฎิบัติการเคมี" },
      { roomCode: "B209", buildingCode: "B", roomFloor: "2", roomCapacity: "35", roomDesc: "ห้องปฎิบัติการโภชนศาสตร์สัตว์" },

      { roomCode: "B212", buildingCode: "B", roomFloor: "2", roomCapacity: "120", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B213", buildingCode: "B", roomFloor: "2", roomCapacity: "120", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B214", buildingCode: "B", roomFloor: "2", roomCapacity: "120", roomDesc: "ห้องเรียนบรรยาย" },

      { roomCode: "B217", buildingCode: "B", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องปฎิบัติการภาษา" },
      { roomCode: "B218", buildingCode: "B", roomFloor: "2", roomCapacity: "40", roomDesc: "ห้องปฎิบัติการคอมพิวเตอร์" },
      { roomCode: "B219", buildingCode: "B", roomFloor: "2", roomCapacity: "40", roomDesc: "ห้องปฎิบัติการคอมพิวเตอร์" },

      { roomCode: "B301", buildingCode: "B", roomFloor: "3", roomCapacity: "500", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B304", buildingCode: "B", roomFloor: "3", roomCapacity: "70", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B305", buildingCode: "B", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎิบัติการชีววิทยา" },
      { roomCode: "B306", buildingCode: "B", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎิบัติการพืช" },

      { roomCode: "B308", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B309", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B310", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B311", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B312", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B313", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },

      { roomCode: "B315", buildingCode: "B", roomFloor: "3", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B316", buildingCode: "B", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "B317", buildingCode: "B", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "B318", buildingCode: "B", roomFloor: "3", roomCapacity: "120", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "B319", buildingCode: "B", roomFloor: "3", roomCapacity: "120", roomDesc: "ห้องเรียนบรรยาย" },

      { roomCode: "BA201", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA202", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA203", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA204", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA205", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA206", buildingCode: "E", roomFloor: "2", roomCapacity: "50", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA207", buildingCode: "E", roomFloor: "2", roomCapacity: "70", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "BA208", buildingCode: "E", roomFloor: "2", roomCapacity: "40", roomDesc: "ห้อง Smart cassroom" },

      { roomCode: "C104", buildingCode: "C", roomFloor: "1", roomCapacity: "35", roomDesc: "ห้องปฎิติบัติการฟิสิกส์" },
      { roomCode: "C113", buildingCode: "C", roomFloor: "1", roomCapacity: "35", roomDesc: "ห้องปฎิติบัติการฟิสิกส์" },
      { roomCode: "C204", buildingCode: "C", roomFloor: "2", roomCapacity: "35", roomDesc: "ห้องปฎิติบัติการฟิสิกส์" },
      { roomCode: "C205", buildingCode: "C", roomFloor: "2", roomCapacity: "35", roomDesc: "ห้องปฎิบัติการเคมี" },

      { roomCode: "D203", buildingCode: "D", roomFloor: "2", roomCapacity: "40", roomDesc: "ห้องปฎิบัติการวิศวกรรมพลังงาน" },
      { roomCode: "D208", buildingCode: "D", roomFloor: "2", roomCapacity: "70", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "D312", buildingCode: "D", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "D313", buildingCode: "D", roomFloor: "3", roomCapacity: "30", roomDesc: "ห้องปฎบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "D406", buildingCode: "D", roomFloor: "4", roomCapacity: "250", roomDesc: "ห้องเรียนบรรยาย" },

      { roomCode: "DORM-A", buildingCode: "DORM", roomFloor: "", roomCapacity: "", roomDesc: "อาคารหอพักนักศึกษา ตึก A" },
      { roomCode: "DORM-B", buildingCode: "DORM", roomFloor: "", roomCapacity: "", roomDesc: "อาคารหอพักนักศึกษา ตึก B" },
      { roomCode: "DORM-C", buildingCode: "DORM", roomFloor: "", roomCapacity: "", roomDesc: "อาคารหอพักนักศึกษา ตึก C" },
      { roomCode: "DORM-GR", buildingCode: "DORM", roomFloor: "", roomCapacity: "", roomDesc: "บริเวณพื่นที่หอพักนักศึกษา" },

      { roomCode: "E107", buildingCode: "E", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฎิบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "E109", buildingCode: "E", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องเขียนแบบ" },
      { roomCode: "E110", buildingCode: "E", roomFloor: "1", roomCapacity: "25", roomDesc: "ห้องเขียนแบบ" },
      { roomCode: "E111", buildingCode: "E", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฎิบัติการวิศวกรรมสารสนเทศ" },
      { roomCode: "E113", buildingCode: "E", roomFloor: "1", roomCapacity: "30", roomDesc: "ห้องปฎิบัติการวิศวกรรมสารสนเทศ" },

      { roomCode: "E301", buildingCode: "E", roomFloor: "3", roomCapacity: "200", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "E303", buildingCode: "E", roomFloor: "3", roomCapacity: "70", roomDesc: "ห้องเรียนบรรยาย" },
      { roomCode: "E304", buildingCode: "E", roomFloor: "3", roomCapacity: "200", roomDesc: "ห้องเรียนบรรยาย" },

      { roomCode: "EE", buildingCode: "EE", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการอิเล็กทรอนิกส์" },
      { roomCode: "FS1", buildingCode: "FS1", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการวิทยาศาสตร์การประมง" },
      { roomCode: "FS2", buildingCode: "FS2", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการเพราะเลี้ยงสัตว์น้ำ" },
      { roomCode: "HO", buildingCode: "HO", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการพืชสวน" },

      { roomCode: "K-CANTEEN", buildingCode: "KMITLPCC", roomFloor: "1", roomCapacity: "", roomDesc: "โรงอาหาร" },
      { roomCode: "K-FARM", buildingCode: "KMITLPCC", roomFloor: "1", roomCapacity: "", roomDesc: "ฟาร์มเกษตร" },
      { roomCode: "K-SECURITY", buildingCode: "KMITLPCC", roomFloor: "1", roomCapacity: "", roomDesc: "จุดเช็คอิน รปภ." },
      { roomCode: "K-SHOP", buildingCode: "KMITLPCC", roomFloor: "1", roomCapacity: "", roomDesc: "ร้านค้าภายใน" },
      { roomCode: "K-SWEEP", buildingCode: "KMITLPCC", roomFloor: "1", roomCapacity: "", roomDesc: "จุดเช็คอิน แม่บ้าน" },

      { roomCode: "LIB", buildingCode: "B", roomFloor: "2", roomCapacity: "", roomDesc: "ห้องสมุด วิทยาเขตชุมพรเขตรอุดมศักดิ์" },
      { roomCode: "ME", buildingCode: "ME", roomFloor: "", roomCapacity: "", roomDesc: "อาคารปฎิบัติการเครื่องกล" },
      { roomCode: "YIM1", buildingCode: "STADIUM", roomFloor: "", roomCapacity: "", roomDesc: "อาคารยิมเนเซียม" }
    ],
    skipDuplicates: true
  });

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