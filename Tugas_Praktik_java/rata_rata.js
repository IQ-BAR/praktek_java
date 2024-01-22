let TimA = 96+108+89;
let TimB = 88+91+110;

let PembagianA = TimA/3;
let PembagianB = TimB/3;

if (TimA > TimB){
    console.log(`Tim A Menang Dengan Rata Rata Skor ${PembagianA}`);

}else if (TimA < TimB){
    console.log(`Tim B menang Dengan Rata Rata Skor ${PembagianB}`);

}else{
    console.log(`Pertandingan Seri`)
}