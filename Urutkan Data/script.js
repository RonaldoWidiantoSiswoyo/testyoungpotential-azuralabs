let data = {
  1: {
    nama: "Indomie",
    harga: 3000,
    rating: 5,
    likes: 150,
  },
  2: {
    nama: "Laptop",
    harga: 4000000,
    rating: 4.5,
    likes: 123,
  },
  3: {
    nama: "Aqua",
    harga: 3000,
    rating: 4,
    likes: 250,
  },
  4: {
    nama: "Smart TV",
    harga: 4000000,
    rating: 4.5,
    likes: 42,
  },
  5: {
    nama: "Headphone",
    harga: 4000000,
    rating: 3.5,
    likes: 90,
  },
  6: {
    nama: "Very Smart TV",
    harga: 4000000,
    rating: 3.5,
    likes: 87,
  },
};

let arrayData = [];
for (i in data) {
  arrayData.push([data[i].nama, data[i].harga, data[i].rating, data[i].likes]);
}

if (data[i].harga == true) {
  arrayData.sort(function (a, b) {
    return b[2] - a[2];
  });
} else if (data[i].rating == true) {
  arrayData.sort(function (a, b) {
    return b[3] - a[3];
  });
} else {
  arrayData.sort(function (a, b) {
    return a[1] - b[1];
  });
}
console.log(arrayData);
