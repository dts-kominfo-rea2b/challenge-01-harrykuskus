// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUserFavColor = new Set(["Yellow", "Pink", "White", "Purple"]);
const secondUserFavColor = new Set(["Blue", "Black", "Grey"]);

const firstUserFavResto = new Set([
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
]);

const secondUserFavResto = new Set([
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]);

function school(name, city, graduate) {
  this.name = name;
  this.city = city;
  this.graduate = graduate;
}

const sdFirstUser = new school("SD 01", "Jakarta", 2016);
const smpFirstUser = new school("SMP 02", "Jakarta", 2019);
const smaFirstUser = new school("SMA 03", "Tangerang");

const sdSecondUser = new school("SD 02", "Jakarta", 2010);
const smpSecondUser = new school("SMP 03", "Bogor", 2013);
const smaSecondUser = new school("SMA 01", "Surabaya", 2016);
const univSecondUser = new school("Universitas Maju", "Tangerang");

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: Array.from(firstUserFavColor),
  isHavePet: true ? "Yes" : "No",
  education: { sdFirstUser, smpFirstUser, smaFirstUser },
  favoriteRestaurant: Array.from(firstUserFavResto),
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: Array.from(secondUserFavColor),
  isHavePet: false ? "Yes" : "No",
  education: { sdSecondUser, smpSecondUser, smaSecondUser, univSecondUser },
  favoriteRestaurant: Array.from(secondUserFavResto),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
