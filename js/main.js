var dsnv = new DanhSachNhanVien();

var validation = new Validation();

getLocalStorge();

function getEle(id) {
    return document.getElementById(id)
}

function layThongTinNV() {

    //DOM tới các thẻ input lấy value
    var _taiKhoan = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _email = getEle("email").value;
    var _pass = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _luongCoBan = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;

    //flag (cờ) - isvalid là true hop lệ false không hợp lệ
    //var isValid = true;
    //Check validation
    //MaSV
    //isValid = validation.kiemTraRong(_maSV, "errorMaSV", "(*)Vui lòng nhập mã sinh vien");


    // if (_maSV === "") {
    //     getEle("errorMaSV").innerHTML = "(*) Vui lòng nhập mã sinh viên";
    //     getEle("errorMaSV").style.display = "block";
    //     isValid = false;
    // } else {
    //     getEle("errorMaSV").innerHTML = "";
    //     getEle("errorMaSV").style.display = "none";
    //     isValid = true;
    // }

    // if (_tenSV === "") {
    //     getEle("errorTenSV").innerHTML = "(*) Vui lòng nhập mã sinh viên";
    //     getEle("errorTenSV").style.display = "block";
    //     isValid = false;
    // } else {
    //     getEle("errorTenSV").innerHTML = "";
    //     getEle("errorTenSV").style.display = "none";
    //     isValid = true;
    // }


    //Check isValid
    if (!isValid) return;

    //Tao doi tuong sinhVien tu lop doi tuong SinhVien
    var nhanVien = new NhanVien(
        _taiKhoan,
        _tenNV,
        _email,
        _pass,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam,
    );

    //Tinh DTB

    nhanVien.tinhLuong();

    return nhanVien;
}

//Them sinh vien

getEle("btnThemNV").onclick = function() {
    var nhanVien = layThongTinNV();
    //them SV
    if (nhanVien) {
        dsnv.themNV(nhanVien);
        taoBang(dsnv.arr);
        setLocalStorage();
    }

};

// function taoBang(data) {
//     var content = "";
//     data.forEach(function(item) {
//         content += "<tr>";
//         content += "<td>" + item.maSV + "</td>";
//         content += "<td>" + item.tenSV + "</td>";
//         content += "<td>" + item.email + "</td>";
//         content += "<td>" + item.ngaySinh + "</td>";
//         content += "<td>" + item.khoaHoc + "</td>";
//         content += "<td>" + item.DiemTB + "</td>";
//         content += "</tr>";
//     });
//     getEle("tbodySinhVien").innerHTML = content;
// }

function taoBang(data) {
    var content = "";
    data.forEach(function(item) {
        content += `
          <tr>
              <td>${item.taiKhoan}</td>
              <td>${item.tenNV}</td>
              <td>${item.email}</td>
              <td>${item.ngayLam}</td>
              <td>${item.chucVu}</td>
              <td>${item.tongLuong}</td>
              <td>${item.xepLoai}</td>
              <td>
                <button class = "btn btn-info" onclick="suaNV('${item.taiKhoan}')">Sửa</button>
                <button class = "btn btn-danger" onclick ="xoaNV('${item.taiKhoan}')">Xóa</button>
              </td>
          </tr>
      `;
    });
    getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(id) {
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

function suaNV(id) {
    var nv = dsnv.suaNV(id);
    if (nv) {
        //Dom toi cac the input show value
        getEle("tknv").value = nv.taiKhoan;
        getEle("name").value = nv.tenNV;
        getEle("email").value = nv.email;
        getEle("password").value = nv.pass;
        getEle("datepicker").value = nv.ngayLam;
        getEle("luongCB").value = nv.luongCoBan;
        getEle("chucvu").value = nv.chucVu;
        getEle("gioLam").value = nv.gioLam;

        //Hien thi lai buttin "Cap nhat"
        getEle("btnCapNhat").style.display = "inline-block";
        //disable input#txtMaSV
        getEle("tkn").disabled = true;
    }
}

//Cap nhat SV

getEle("btnCapNhat").onclick = function() {
    var nhanVien = layThongTinNV;
    dsnv.capNhatNV(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
};

//Tìm kiếm SV
getEle("keyword").addEventListener("keyup", function() {
    var keyword = getEle("keyword").value;
    var mangTimKiem = dssv.timKiemSV(keyword);
    taoBang(mangTimKiem);
});


function setLocalStorage() {
    //Convert from JSON to string
    var dataString = JSON.stringify(dsnv.arr);
    //Luu xuong localStorage
    localStorage.setItem("DSNV", dataString);
}

function getLocalStorge() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        //Convert from String to JSON
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
        taoBang(dsnv.arr);
    }
}