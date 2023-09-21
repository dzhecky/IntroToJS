//soal 3

//tugas 2

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
    }, {
      nama: 'Daarul Uluum 01',
      tingkat: 'Madrasah Tsanawiyah/ MTS',
      tahunMulai: 2018,
      tahunAkhir: 2020,
      jurusan: null,
      direkomendasikan: false,
      lokasi: 'kota bogor, provinsi jawa barat',
    }, {
      nama: 'Negeri 1 Ciomas',
      tingkat: 'Sekolah Menengah Kejuruan/ SMK',
      tahunMulai: 2020,
      tahunAkhir: 2023,
      jurusan: 'Rekayasa Perangkat Lunak',
      direkomendasikan: false,
      lokadi: 'kabupaten bogor, provinsi jawa barat',
    },
  ],
  pengajarFavorit: ['Rizki Sofian', 'Kurnadi'],
  materiFavorit: [
    {
      nama: 'CSS',
      date: '2021',
      pengajar: 'Rizki Sofian',
      alasan: ['menarik', 'menyenangkan'],
      apakahSulit: false,
    },
  ],
  golonganDarah: 'O',
  hobi: ['Riding', 'Badminton', 'Cosplay'],
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

console.log(`Nama Lengkap: ${biodata.namaLengkap}
Nomor handphone: ${biodata.noTelp}
Programming Experience: ${biodata.programmingExperience}
Nama dan asal Makanan Favorit: ${biodata.makananFavorit[0].nama}, ${biodata.makananFavorit[0].asal}
Hobi: ${biodata.hobi[2]}
Nama materi dan Pengajar Favorit: ${biodata.pengajarFavorit[1]}, ${biodata.materiFavorit[0].nama}`)