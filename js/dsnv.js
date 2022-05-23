function DanhSachnhanVien() {
    this.arr = [];

    this.themNV = function(nv) {
        this.arr.push(nv);
    };
    this.timViTriNV = function(taiKhoan) {
        // TÌM VỊ TRÍ 
        // 0. tạo biến index = -1
        // 1. Duyệt mảng arr
        // 2. Nếu maSV === obiect.maSV
        // => Cập nhật lại giá trị 1 cho biến index
        var index = -1;
        this.arr.forEach(function(item, i) {
            if (item.taiKhoan === taiKhoan) {
                index = i;
            }
        });
        return index;
    }
    this.xoaNV = function(taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };
    this.suaNV = function(taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhatNV = function(nv) {
        var index = this.timViTriNV(nv.taiKhoan);
        if (index !== -1) {
            this.ar[index] = nv;
        }
    };
    this.timKiemNV = function(keyword) {
        //0. Tao mang TimKiem
        //1. Duyet mang arr
        //2. Neu item.tenSV trung voi keyword
        //=> them sv dc tim thay mangTimKiem
        //3. tra ve mangTimKiem
        var mangTimKiem = [];
        this.arr.forEach(function(item) {
            if (item.tenNV.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                mangTimKiem.push(item);
            }
        });
        return mangTimKiem;
    };

}