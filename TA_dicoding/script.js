var DATA = {
  title: [
    "Perpustakaan Kota Balai Pemuda",
    "Perpustakaan Kota Rungkut Sari",
    "Perpustakaan Bank Indonesia, Eks Mpu Tantular",
  ],
  image: [
    "https://images.unsplash.com/photo-1590598687530-581406de2262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ],
  desk: [
    "Perpustakaan Balai Pemuda yang berada di Jalan Gubernur Suryo Nomor 15, Surabaya ini memiliki salah satu agenda    kegiatan yang disebut (wisata buku). Aktivitas tersebut yaitu tentang mengenalkan dan menginformasikan terkait perpustakaan kepada anak sekolah yang datang berkunjung ke Perpus Balai Pemuda.Kemudian, perpustakaan itu juga membuka kelas literasi, kelas ibu dan anak (sharing seputar dunia parenting), dan bimbel komputer. Perpustakaan Balai Pemuda buka setiap Senin-Minggu, mulai pukul 07.30-21.00 WIB.",
    "Tempat bacaan ini menyediakan banyak koleksi buku bacaan untuk anak-anak. Sehubungan dengan hal tersebut, di perpustakaan itu terdapat kegiatan menulis ulasan buku cerita. Kegiatan itu dibimbing oleh para petugas perpustakaan rungkut.Lalu, ada juga agenda mendongeng bersama boneka si 'Chika', dan berbagai aktivitas belajar bersama. Lokasi Perpustakaan Rungkut berada di Jalan Rungkut Asri Tengah Nomor 5-7, Surabaya, Jawa Timur.",
    "Perpustakaan BI buka setiap Senin-Jumat, mulai pukul 08.00-16.00 WIB, sedangkan pada Minggu, buka pukul 08.00-15.00 WIB. Perpustakaan ini sering kali menyelenggarakan berbagai acara, seperti workshop, seminar, dan lomba-lomba.Tak ketinggalan, Perpustakaan BI kerap mendapat kunjungan dari anak-anak pelajar. Perpus tersebut juga memiliki koleksi jurnal-jurnal online. Selanjutnya, perpus BI pernah mendapatkan penghargaan sebagai Juara 1 Perpustakaan Terbaik (2013) dan Juara Teladan (2015).",
  ],
};
var i = 0;

var display = document.getElementById("display");
var img = document.createElement("img");
var deskDisplay = document.getElementsByClassName("desk");

var data = 0;

deskDisplay[0].innerHTML = DATA.desk[0];

img.setAttribute("src", DATA.image[0]);
display.appendChild(img);

var title = document.getElementsByClassName("title");
title[0].innerHTML = DATA.title[0];

// modal
const modal = document.getElementById("Modal");
const close = document.getElementsByClassName("close");
var btnmore = document.getElementsByClassName("btnread-more");

btnmore[0].addEventListener("click", () => {
  if (true) {
    img.style.transform = "scale(1.1) ";
    modal.style.display = "block";
  } else {
    img.style.transform = "scale(1)";
    clik = 0;
  }
});

close[0].addEventListener("click", () => {
  reset();
  modal.style.display = "none";
});

const reset = () => {
  img.style.transform = "scale(1)";
};

const next = () => {
  data++;
  if (data >= DATA.image.length) {
    data = 0;
  }
  reset();
  deskDisplay[0].innerHTML = DATA.desk[data];
  title[0].innerHTML = DATA.title[data];
  img.setAttribute("src", DATA.image[data]);
  display.appendChild(img);
};

const prev = () => {
  data--;
  if (i < 0) {
    data = DATA.image.length - 1;
  }
  reset();
  deskDisplay[0].innerHTML = DATA.desk[data];
  title[0].innerHTML = DATA.title[data];
  img.setAttribute("src", DATA.image[data]);
  display.appendChild(img);
};

window.onclick = function (event) {
  if (event.target == modal) {
    reset();
    modal.style.display = "none";
  }
};
