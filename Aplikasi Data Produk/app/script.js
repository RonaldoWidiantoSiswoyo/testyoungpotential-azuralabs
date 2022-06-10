let produk = [
  "iPhone 11 Pro Max 256GB",
  "Kulkas Polytron 2 Pintu",
  "iPhone 14 Pro 64GB",
  "Mesin Cuci LG 15kg",
  "Smart TV Realme 4K",
  "Macbook Pro 2019 Touchbar",
  "Mac Mini M1 2020 256GB",
];

function tampil() {
  let tabel = document.getElementById("tabel");
  tabel.innerHTML = "<tr><th>No</th><th>Nama Produk<th></tr>";
  for (let i = 0; i < produk.length; i++) {
    let btnEdit =
      "<button class='btn-edit' href='#' onclick='edit(" +
      i +
      ")'>Edit</button>";
    let btnHapus =
      "<button class='btn-hapus' href='#' onclick='hapus(" +
      i +
      ")'>Hapus</button>";
    let btnPreview =
      "<button class='btn-preview' href='#' onclick='preview(" +
      i +
      ")'>Preview</button>";
    j = i + 1;
    tabel.innerHTML +=
      "<tr><td>" +
      j +
      "</td><td>" +
      produk[i] +
      "</td><td>" +
      btnEdit +
      " " +
      btnHapus +
      "" +
      btnPreview;
    ("</tr>");
  }
}
function tambah() {
  var input = document.querySelector("input[name=daftar-produk]");
  produk.push(input.value);
  tampil();
  input.value = "";
}

function edit(id) {
  var baru = prompt("Edit", produk[id]);
  produk[id] = baru;
  tampil();
}

function hapus(id) {
  produk.pop(id);
  tampil();
}
// const btnHapus = document.getElementsByClassName(".btn-hapus");
// function hapus(id) {
//   if (btnHapus === 1) {
//     produk.splice(id, -1);
//   }
// }
function preview() {}

tampil();
