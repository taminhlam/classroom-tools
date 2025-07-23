var lastNames = ['Nguyễn','Trần','Lê','Phạm','Hoàng', 'Phan','Vũ','Võ','Đặng','Bùi','Đỗ','Hồ','Ngô','Dương','Lý'];
var boys = ['An Bảo','An Cơ','An Cường','An Hải','An Huy','An Khang','An Khương','An Nam','An Nguyên','An Ninh','An Phú','An Quảng','An Thiên','An Thịnh','An Thuận','An Thuyên','An Trung','An Tường','An Vinh','An Vương','An Vỹ','Anh Bằng','Anh Chương','Anh Cường','Anh Đăng','Anh Đạt','Anh Đức','Anh Dũng','Anh Duy','Anh Hào','Anh Hoàng','Anh Huấn','Anh Hương','Anh Kha','Anh Khải','Anh Khoa','Anh Khôi','Anh Khương','Anh Lịch','Anh Luân','Anh Minh','Anh Nghĩa','Anh Nhật','Anh Phát','Anh Quân','Anh Quang','Anh Quốc','Anh Quyên','Anh Sơn','Anh Tài','Anh Tân','Anh Thái','Anh Tú','Anh Tuấn','Anh Tùng','Anh Việt','Anh Vũ','Bình An','Chí Anh','Ðăng An','Ðức Anh','Dương Anh','Duy An','Dy An','Gia An','Gia Anh','Hùng Anh','Huy Anh','Khánh An','Lâm An','Lâm Anh','Nam An','Nhất Anh','Nhật Anh','Phi Anh','Phước An','Quang Anh','Quốc An','Quốc Anh','Thành An','Thế An','Thế Anh','Thiên An','Thiện An','Thiếu Anh','Thuận Anh','Thục An','Thụy Anh','Thy An','Tiến Anh','Trung Anh','Trường An','Trường Anh','Tuấn Anh','Tùng Anh','Tường Anh','Việt An','Việt Anh','Vũ Anh','Xuân An'];
var girls = ['An','An Bình','An Di','An Dy','An Hạ','An Khánh','An Lộc','An Nhàn','An Nhiên','An Sương','An Thanh','An Trinh','Anh Châu','Anh Chi','Anh Đài','Anh Điệp','Anh Kiều','Anh Mỹ','Anh Na','Anh Nữ','Anh Thảo','Anh Thơ','Anh Thư','Anh Trâm','Anh Trân','Chi An','Chức An','Diệp Anh','Diệu Anh','Hải Anh','Hòa An','Hoài An','Hồng An','Hồng Anh','Huệ An','Huyền Anh','Kiều Anh','Kim Anh','Lan Anh','Mai Anh','Minh An','Mỹ Anh','Ngân Anh','Ngọc An Hạ','Ngọc Anh','Nguyệt Anh','Nhi An','Như Anh','Phương An','Phương Anh','Quế Anh','Quỳnh Anh','Thanh An','Thục Anh','Thuý Anh','Thúy Anh','Thùy Anh','Trâm Anh','Trang Anh','Tú Anh','Tuyết Anh','Vân Anh','Yến Anh'];
var schools = ['Quang Trung', 'Nguyen Du', 'Pham Van Dong', 'Tran Hung Dao', 'Phan Chu Trinh', 'Ly Tu Trong'];
var transports = ['foot', 'bicycle', 'motorbike', 'car', 'bus', 'plane', 'rocket', 'balloon', 'boat', 'skateboard'];
var jobs = ['engineer', 'worker', 'teacher', 'farmer', 'doctor'];
var classes = ['A','B','C','D'];
var cities = ['Ho Chi Minh', 'Da Nang', 'Nha Trang', 'Ha Noi', 'Hai Phong', 'Can Tho', 'Da Lat'];
var streets = ['Pasteur', 'Tran Phu', 'Le Quy Don', 'Phan Boi Chau', 'Ham Long', 'Ly Tu Trong', 'Nguyen Du', 'Yersin', 'Hoang Van Thu', 'Tran Quy Cap'];
var areaCodes = ['090','091','092','093','094','095','096','097','098','0996','0997','0998','0999','0120','0121','0122','0123','0124','0125','0126','0127','0128','0129','0163','0164','0165','0166','0167','0168','0169','0186','0188','0199']

function randomInArray(array) {
    if (Array.isArray(array)) {
        return array[Math.floor(Math.random() * array.length)];
    } else {
        throw new Error(array + ' is not an array.');
    }
};

function sex() {
    if (Math.random()<.5) {
        return "male";
    } else {
        return "female";
    }
};

function randomNumber() {
    var number = "";
    var possible = "0123456789";
    for( var i=0; i < 6; i++ )
        number += possible.charAt(Math.floor(Math.random() * possible.length));
    return number;
}

function Student(sex) {
    this.sex = sex;
    this.name = function() {if (sex == "male") {return randomInArray(boys)} else {return randomInArray(girls)};};
    // Very crude values. More sophisticated ones below
    //this.height = Math.floor((Math.random() * 50) + 1)+120;
    //this.weight = Math.floor((Math.random() * 20) + 1)+40;
    this.age = Math.floor((Math.random() * 8) + 1)+10;
    this.ageF = Math.floor((Math.random() * 8) + 1)+32;
    this.ageM = Math.floor((Math.random() * 8) + 1)+30;
    // Based on the correlation between age & height in England -- ajusted with a little "je ne sais quoi"
    this.height = Math.round(this.age * (4 + Math.random()) + 85);
    this.bmi = Math.round((Math.random() * 11) + 1)+18;
    console.log(this.bmi);
    // Based on BMI calculation. 18 < BMI < 30
    this.weight = Math.round((this.height * this.height)/10000 * this.bmi);
    this.school = randomInArray(schools);
    this.class = Math.ceil(this.age - 6) + randomInArray(classes);
    this.lastName = randomInArray(lastNames);
    this.jobF = randomInArray(jobs);
    this.jobM = randomInArray(jobs);
    this.transport = randomInArray(transports);
    this.address = Math.floor((Math.random() * 100) + 1) + " " + randomInArray(streets);
    this.phone = randomInArray(areaCodes) + "-" + randomNumber();
};


function createMedicalRecord() {
    var gender = sex();
    var patient = new Student(gender);
    $('#school').text(patient.school + " School");
    $('#class').text(patient.class);
    $('#firstName').text(patient.name);
    $('#lastName').text(patient.lastName);
    $('#sex').text(patient.sex);
    $('#age').text(patient.age);
    $('#ageF').text(patient.ageF);
    $('#ageM').text(patient.ageM);
    $('#jobF').text(patient.jobF);
    $('#jobM').text(patient.jobM);
    $('#transport').text(patient.transportF);
    $('#transportF').text(patient.transportF);
    $('#transportM').text(patient.transportM);
    $('#phone').text(patient.phone);
    $('#height').text(patient.height + ' cm');
    $('#weight').text(patient.weight + ' kg');
    $('#address').text(patient.address + ' St.');
};

/*
* Average height of Vietnamese people aged 22-26: 1.642m for men/ 1.534m for women
* Prof. Nguyen Cong Khan, head of the Science, Technology and Training Dept. under the Health Ministry, for Tuoi Tre.
*/
