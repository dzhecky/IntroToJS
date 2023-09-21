//soal 3

let biodata = {
    namaLengkap: 'Dzaki Muhamad Mumtaz',
    email: 'habakiri76@gmail.com',
    noTelp: '081290555874',
    umur: 19,
    ttl: 'Bogor 22 Januari 2004',
    alamat: 'Jl. Raya Cileueur Kecamatan Tamansari',
    kota: 'Kabupaten Bogor',
    provinsi: 'jawa barat',
    kodePos: 16610,
    programmingExperience: ['HTML', 'CSS', 'PHP', 'Laravel', 'Database', 'Game', 'C++', 'Bootstrap'],
    riwayatPendidikan: [
      {
        nama: 'Pasirangsana 02',
        tingkat: 'Sekolah Dasar/ SD',
        tahunMulai: 2010,
        tahunAkhir: 2015,
        jurusan: null,
        direkomendasikan: false,
        lokasi: 'kabupaten bogor, provinsi jawa barat',
        pengajarFavorit: ['ajat', 'mimah'],
        materiFavorit: {
          nama: 'bahasa inggris',
          date: 2015,
          pengajar: 'aji',
          alasan: ['menyenangkan', 'menarik'],
          kesulitan: false,
        },
      }, {
        nama: 'Daarul Uluum 01',
        tingkat: 'Madrasah Tsanawiyah/ MTS',
        tahunMulai: 2018,
        tahunAkhir: 2020,
        jurusan: null,
        direkomendasikan: false,
        lokasi: 'kota bogor, provinsi jawa barat',
        pengajarFavorit: ['dede', 'faudzan'],
        materiFavorit: {
          nama: 'hadits',
          date: 2019,
          pengajar: 'hara',
          alasan: ['menarik', 'mengetahui sunnah'],
          kesulitan: false
        }
      }, {
        nama: 'Negeri 1 Ciomas',
        tingkat: 'Sekolah Menengah Kejuruan/ SMK',
        tahunMulai: 2020,
        tahunAkhir: 2023,
        jurusan: 'Rekayasa Perangkat Lunak',
        direkomendasikan: false,
        lokasi: 'kabupaten bogor, provinsi jawa barat',
        pengajarFavorit: ['rizki sofian', 'kurnadi'],
        materiFavorit: {
          nama: 'CSS',
          date: 2022,
          pengajar: 'rizki sofian',
          alasan: ['seru', 'menarik'],
          kesulitan: false,
        },
      },
    ],
    golonganDarah: 'O',
    hobi: ['Riding', 'Cosplay', 'Badminton'],
    makananFavorit: [
      {
        nama: 'Ketoprak',
        asal: 'berasal dari kota cirebon',
      }, {
        nama: 'Siomay',
        asal: 'berasal dari Tiongkok',
      }, {
        nama: 'Kebab',
        asal: 'berasal dari Turki',
      },
    ]
  }

  function printHobies(listHobi) {
    for(i = 0; i < listHobi.length; i++){
      console.log(`Hobi ke ${i + 1} adalah ${listHobi[i]}`)
    }
  }
  
  printHobies(biodata.hobi)