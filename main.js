/*
Mô hình 3 khối
    Đầu vào:
    +tiền lương mỗi ngày là 100000;
    +tổng sổ ngày làm trong tháng do người dùng nhập;
    Xử lý:
    tạo biến tổng số ngày làm là 30
    tongLuong=100000*soNgayLam;
    Đầu ra
    +tongLuong=?
*/
var luong=100000;
var soNgayLam=30;
var tongLuong=0;
tongLuong=luong*soNgayLam;
console.log("Tong luong la :"+tongLuong);

/*
    Đầu vào:
    +soA
    +soB
    +soC
    +soD
    +soE
    Xử lý:
    +tạo biến soA gán giá trị là 5
    +tạo biến soB gán giá trị là 10
    +tạo biến soC gán giá trị là 5
    +tạo biến soD gán giá trị là 5
    +tạo biến soE gán giá trị là 5
    tong=(soA+soB+soC+soD+soE)/5
    Đầu ra:
    +tong=?
    
*/
var soA=5;
var soB=10;
var soC=5;
var soD=5;
var soE=5;
var tong=0;
tong=(soA+soB+soC+soD+soE)/5;
console.log("Trung binh tong la : "+tong);

/*
    Đầu vào:
    USD=23500
    soTienCanDoi
    Xử lý:
    +tạo biến soTienCanDoi là 10
    +tongTien=23500*soTienCanDoi
    Đầu ra:
    +tongTien=?
*/
var USD=23500;
var soTienCanDoi=10;
var tongTien=0;
tongTien=soTienCanDoi*USD;
console.log("Tong Tien la: "+tongTien);

/*
    Đầu vào:
    +chieuDai
    +chieuRong
    Xử lý:
    +tạo biến chieuDai gán giá trị là 4
    +tạo biến chieuRong gán giá trị là 5
    +dienTich=chieuDai*chieuRong;
    +chuVi=(chieuDai+chieuRong)*2
    Đầu ra
    +dienTich=?
    +chuVi=?
*/
var chieuDai=4;
var chieuRong=5;
var dienTich=0;
var chuVi=0;
dienTich=chieuDai*chieuRong;
chuVi=(chieuDai+chieuRong)*2;
console.log("Dien tich la: "+dienTich);
console.log("Chu Vi la : "+chuVi);

/*
* tong 2 ky so
 * giả sử:
 * n=27 => 2 + 7 
 * Đầu vào
 *  +n=27
 * -Xử lý
 *  +Tách lấy hàng chục => n %10  làm tròn số Math.floor()
 *  +Tách lấy hàng đơn vị => n/10 => làm tròn số Math.floor()
 * -Đầu ra
 *  tong=hang chuc + hang don vi
 *  +tong=?
*/
var n=27;
var hangChuc=0;
var hangDonVi=0;

hangChuc=Math.floor(n%10);
hangDonVi=Math.floor(n/10);

var tongg=0;
tongg=hangChuc+hangDonVi;
console.log("Tong la : "+tongg);