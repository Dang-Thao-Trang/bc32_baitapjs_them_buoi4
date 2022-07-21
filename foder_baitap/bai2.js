function aboutDay(){
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    var namNhuan = (year%4) === 0;
    // var namKhongNhuan = (!(year%4) == 0);
    var days = "";
    //Day la ham tinh nam khong nhuan
    // var namKNhuan = function (){
    //     switch(month){
    //        case 2:
    //        {
    //            days =  "Co 28 ngay";
    //            break;
    //         }
    //         case 1:
    //         case 3:
    //         case 5:
    //         case 7:
    //         case 8:
    //         case 10:
    //         case 12:
    //         {
    //            days = "co 31 ngay";
    //             break;
    //         }
    //         case 4:
    //         case 6:
    //         case 9:
    //         case 11:{
    //             days = "Co 30 ngay";
    //             break;
    //         }
            
    //     }}
    var haveDay = function(){
        switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        {
            days = 31;
            break;
        }
        case 4:
            case 6:
            case 9:
            case 11:
        {
            days = 30;
            break;
        }
        case 2:
        {
            days =  28;
            break;
        }
        default:{
            alert("So thang khong hop le")
        }
        }
    return days;
    }
    if (namNhuan && month===2){
      days =  29;
    }
    else{
        days = haveDay();
    }
 document.getElementById('haveDay').innerHTML = days + " ngày.";
 
 }