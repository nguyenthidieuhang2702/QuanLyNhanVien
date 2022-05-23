function NhanVien(
    _taiKhoan,
    _tenNV,
    _email,
    _pass,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam,
) {

    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.pass = _pass;
    this.ngaylam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.giolam = _gioLam;
    this.tongLuong = 0;

    this.tongLuong = function() {
        this.tongLuong =
            (parseFloat(this.diemToan) +
                parseFloat(this.diemLy) +
                parseFloat(this.diemHoa)) /
            3;
    };
}