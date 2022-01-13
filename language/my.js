/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.limit = (prefix) =>{
	return` ⚠️ Limit Lu Abes Bujank, ${prefix}limit untuk mengecek limit`
}
exports.limitg= (prefix) =>{
	return` ⚠️ Limit Game Lu Abes Bujank, ${prefix}limit untuk mengecek limit`
}
exports.event = (prefix) =>{
	return` ⚠️ Event grup Kagak dinyalain, kirim perintah ${prefix}event on untuk mengaktifkan`
}
exports.wait = () => {
	return `⏳ Proses... Sabar Ya Bujank`
	}
exports.success = () => {
	return `❎ Done Ngab Donasi gih🗿`
	}
exports.successBc = () => {
	return `❎ Sukses Broadcast Tuan!!!`
	}
exports.wrongFormat = () => {
	return `❎ Format Salah Bujank, coba cek lagi di menu`
	}
exports.erorStik = () => {
	return `❎ Cuma Bisa Stiker,Tpi Itu Bukan Stiker`
	}
exports.tagStik = () => {
	return `❎ Reply/tag stiker nya Bujank`
	}
exports.erorLink = () => {
	return `❎ Linknya Kagak Bisa/inpalid`
	}
exports.onlygc = () => {
	return `❎ Cuma Bisa Di Grup Bujank`
	}
exports.onlyOwner = () => {
	return `❎ Yahahaha Gabisa Ya? Cuma Bisa Owner Bujank`
	}
exports.benned = () => {
	return `❎ Maap ye, Nomer Lu Keblokir, Mknya Bca rules`
	}
exports.onlygcAdmin = () => {
	return `❎ Lu Member Mau Ngapain?`
	}
exports.cariCecan = () => {
	return `⏳ Oke Gw Cari Cecan Nya`
	}
exports.cariCogan = () => {
	return `⏳ Oke Gw Cari Cogan Nya`
	}
exports.pesanBot = () => {
	return `❎ Reply pesan botnya Bujank`
	}
exports.replyFoto = () => {
	return `❎ Reply fotonya Bujank`
	}
exports.tagUser = () => {
	return `❎ Tag @user`
	}
exports.noReply = () => {
	return `❎ Pesan yang kamu reply tidak mengandung reply`
	}
exports.changeNmGc = () => {
	return `❎ Sukses... Donasi Bujank!!!`
	}
exports.changeDeskGc = () => {
	return `❎ Sukses... Donasi Bujank!!!`
	}
exports.spam = (prefix, command) => {
	return `❎ Example ${prefix + command} teks|jumlah`
	}
exports.tahta = (prefix, command) => {
	return `❎ Example ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `❎ Example ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Bot Bukan Admin Jdi Gbisa T_T`
	}
exports.tryAgain = () => {
	return `❎  Waduh,Gbisa Ngab Ulangin Sekali Lagi`
	}
exports.anlinOn = () => {
	return `❎ Antilink Aktip Bro!!!`
	}
exports.anlinOff = () => {
	return `❎ Antilink Non Aktip Bro!!!`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `❎ Masukan Angka Yang Bener lah!!`
 }
exports.adminGc = () => {
 return `Gw Kick Lu!!!,Eh Lu Admin Gjdi Deh hehe Maaf Banh`
 }
 exports.izinDt = () => {
 return `Iya Banh`
 }
 exports.anjawaOn = (command) => {
	return `❎ ${command} Di Aktifkan`
	}
exports.anjawaOff = (command) => {
	return `❎ ${command} Di Nonaktifkan`
	}
exports.anjawaUdhOn = (command) => {
	return `❎ ${command} sudah aktif`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.onORoff = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.gcOpen = (command) => {
	return `❎ ${command} Sukses... Udah Gw Buka!!!`
	}
exports.gcClose = (command) => {
	return `❎ ${command} Sukses... Udah Gw Tutup!!!`
	}
exports.nsfwmo= () => {
	return `Lu Pekob Mulu Otaknya Anj, Ngomong Ma Owner Biar Diaktifin`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Hubungi owner Biar Fiturnya Bisa Dipake`
 }
 //vote
exports.noSesiVote = () => {
 	return`Gdak Sesi Votingnye`
 }
exports.suksesDelVot = () => {
	return`Sukses Menghapus sesi Voting Di Grup Ini`
	}
exports.adaVoting = () => {
	return`Sesi Voting Sedang Berlangsung Di Grup Ini`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Menit)`
    }
exports.caraVot = () => {
 	return`masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit`
    }
//ttt
exports.noSesiTtt = () =>{
	return`Tidak ada sesi tictactoe di grup ini`
	}
exports.suksesDelTtt = () =>{
	return`Berhasil menghapus sesi tictactoe di grup ini`
	}
//on & off
exports.ownerOff = () =>{
	return`Owner saya Off`
	}
exports.ownerOn = () =>{
	return`Owner saya On`
	}
