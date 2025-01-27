
let user_results = 'https://randomuser.me/api/?format=json';
let name, gender, gendertest, lat, phone, long, results, photographURL, title, nationality, forename, surname, birthday;
let margin = 35;
let textheight = 50
imgF = [];
imgM = [];
let r;
let img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14;

function preload () {
  img2 = loadImage('F/f1.jpg');
  img3 = loadImage('F/f2.jpg');
  img4 = loadImage('F/f3.jpg');
  img5 = loadImage('F/f4.jpg');
  img6 = loadImage('F/f5.jpg');
  img7 = loadImage('F/f6.jpg');
  img8 = loadImage('F/f7.jpg');
  img9 = loadImage('M/m1.jpg');
  img10 = loadImage('M/m2.jpg');
  img11= loadImage('M/m3.jpg');
  img12 = loadImage('M/m4.jpg');
  img13 = loadImage('M/m5.jpg');
  img14 = loadImage('M/m6.jpg');
}


async function getResults(){
  let data = await fetch(user_results);
  let Udata = await data.json();
  results = Udata.results[0].name.title;
  forename = Udata.results[0].name.first;
  surname = Udata.results[0].name.last;
  birthday = Udata.results[0].dob.date;
  nationality = Udata.results[0].location.country;
  lat = Udata.results[0].location. coordinates. latitude;
  long = Udata.results[0].location. coordinates. longitude;
  phone = Udata.results[0].phone;

}

async function Headshot(){
  let data = await fetch(user_results);
  let Udata = await data.json();
  gender = Udata.results[0].gender
  if (gender === 4) {
    gendertest = floor(random(8, 14))
  }
  else {gendertest = floor(random(2, 7))}
}



function Headshotgender() {
  if (gender === 'male') {
    r = random(imgF);
  }  else {
    r = random(imgM); //this function doesn't work correctly, and I have no idea why.
  }
}

async function setup() {
  createCanvas(400, 400);
  getResults();
  Headshot();
  imgF.push(img2, img3, img4, img5, img6, img7);
  imgM.push(img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14);
  Headshotgender();// this was intended to correspond to gender, but it doesn't function, so now it's a single array at random. Win for the Nbs.
}




function draw() {
  background(45);
  fill(255);
  // text('title: ' + results, margin, 220);
  text('Name: ' + forename + ' '+ surname, margin, 220)
  text('Date of Birth: ' + birthday, margin, 240);
  text('Country: ' + nationality, margin, 260)
  text(lat + ',' + long, margin, 280);
  text(phone, margin, 300);
  push();
  image(r, 200, 50, 150, 150); 
  filter(POSTERIZE,9)
  filter(GRAY);
  pop()




 
}


// "dob": {
  // "date": "1998-11-04T09:16:24.162Z",
  // "age": 26
  //"picture": {
    // "large": "https://randomuser.me/api/portraits/men/73.jpg",
    // "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
    // "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"