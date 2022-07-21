
function read(){
//input
    var realNumber = +document.getElementById('realNumber').value;
    console.log("realNumber" + realNumber)
    var hangTram = 0;
    var hangChuc = 0;
    var hangDv = 0;
//process
    // tách số
    hangTram += Math.floor(realNumber / 100);
        // console.log('hangTram'+ hangTram)
    hangChuc += Math.floor(realNumber %100 / 10);
        // console.log('hangChuc'+ hangChuc)
    hangDv += (realNumber % 10);
        // console.log('hangDv'+ hangDv);
    //Đây là hàm đọc số cho hàng chục và hàng trăm
    var readNumber1 = function(n){
        switch(n){
        case 1: {
            read = "một";
            break;
        }
        case 2: {
            read = "hai"
            break;
        }
        case 3: {
            read = "ba"
            break;
        }
        case 4: {
            read4 = "bốn"
            break;
        }
        case 5: {
            read = "năm"
            break;
        }
        case 6: {
            read = "sáu"
            break;
        }
        case 7: {
            read = "bảy"
            break;
        }
        case 8: {
            read = "tám"
            break;
        }
        case 9: {
            read = "chín"
            break;
        }
        case 0: {
            read = ""
            break;
        } 
        default:{
            alert("So khong hop le")
        }
    }
    return read;
    }
    // Đây là hàm đọc số cho đơn vị
    var readNumber2 = function(){
        switch(hangDv){
            case 1: {
                read = "mốt";
                break;
            }
            case 2: {
                read = "hai"
                break;
            }
            case 3: {
                read = "ba"
                break;
            }
            case 4: {
                read = "bốn"
                break;
            }
            case 5: {
                read = "lăm"
                break;
            }
            case 6: {
                read = "sáu"
                break;
            }
            case 7: {
                read = "bảy"
                break;
            }
            case 8: {
                read = "tám"
                break;
            }
            case 9: {
                read = "chín"
                break;
            }
            case 0: {
                read = ""
                break;
            } 
            default:{
                alert("So khong hop le")
            }
        }
        return read;
        }

    if(hangTram === 0 || hangChuc===0 || hangTram > 10){
        alert("hàng trăm hoặc hàng chục không xác định");
    }else if(hangChuc===1 && hangDv===1){
        readHangTram = readNumber1(hangTram)+ " trăm ";
        readHangChuc = " mười ";
        readHangDv = "một";
    }
    else if(hangChuc===1){
        readHangTram = readNumber1(hangTram)+ " trăm ";
        readHangChuc = " mười ";
        readHangDv = readNumber2();
    }
    else{
        readHangTram = readNumber1(hangTram)+ " trăm ";
        readHangChuc = readNumber1(hangChuc)+ " mươi ";
        readHangDv = readNumber2();
    }
//input
    document.getElementById('readding').innerHTML = readHangTram + readHangChuc + readHangDv;
}
