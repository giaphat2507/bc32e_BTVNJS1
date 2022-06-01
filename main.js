var luong=100000;
var soNgayLam=30;
var tongLuong=0;
tongLuong=luong*soNgayLam;
console.log("Tong luong la :"+tongLuong);

var soA=5;
var soB=10;
var soC=5;
var soD=5;
var soE=5;
var tong=0;
tong=(soA+soB+soC+soD+soE)/5;
console.log("Trung binh tong la : "+tong);

var USD=23500;
var soTienCanDoi=10;
var tongTien=0;
tongTien=soTienCanDoi*USD;
console.log("Tong Tien la: "+tongTien);


var chieuDai=4;
var chieuRong=5;
var dienTich=0;
var chuVi=0;
dienTich=chieuDai*chieuRong;
chuVi=(chieuDai+chieuRong)*2;
console.log("Dien tich la: "+dienTich);
console.log("Chu Vi la : "+chuVi);

var n=27;
var hangChuc=0;
var hangDonVi=0;


hangChuc=Math.floor(n%10);
hangDonVi=Math.floor(n/10);

var tongg=0;
tongg=hangChuc+hangDonVi;
console.log("Tong la : "+tongg);