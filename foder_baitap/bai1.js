//Su kien button_yesterday
function yesterday(){
    //input
    var tDay = +document.getElementById('tDay').value;
    var tMonth = +document.getElementById('tMonth').value;
    var tYear = +document.getElementById('tYear').value;
   
    var dayToday = function(){
        switch(tMonth){
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
            case 11:{
            days = 30;
            break;
        }
        case 2:{
            days =  28;
            break;
        }
        default:{
            alert("So thang khong hop le")
        }
        }
    return days;
    }//ham cho biet so ngay
    
    //process
    var yesterdaygo = "";
    var tMonthYesterday = "";
    var tYearYesterday = "";
    if(tDay === 1 && tMonth === 1){
        yesterdaygo = dayToday();
        tMonthYesterday = 12;
        tYearYesterday = tYear -1;
    }
    else if(tDay === 1){
        yesterdaygo = dayToday();
        tMonthYesterday = tMonth -1;
        tYearYesterday = tYear;
    }
    else if(tDay !== 1){
        yesterdaygo += tDay -1;
        tMonthYesterday = tMonth;
        tYearYesterday = tYear;
    }
//input
document.getElementById('dayWhat').innerHTML = yesterdaygo+"/"+tMonthYesterday + "/" + tYearYesterday;
}
//Su kien button_tomorrow
function tomorrow(){
    //input
    var tDay = +document.getElementById('tDay').value;
    var tMonth = +document.getElementById('tMonth').value;
    var tYear = +document.getElementById('tYear').value;
    //process
    var tomorrowgo = "";
    var tMonthTomorrow = "";
    var tYearTomorrow = "";

    var dayToday = function(){
        switch(tMonth){
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
            case 11:{
            days = 30;
            break;
        }
        case 2:{
            days =  28;
            break;
        }
        default:{
            alert("So thang khong hop le")
        }
        }
    return days;
    }//ham cho biet so ngay

    if(tDay === dayToday() && tMonth === 12){
        tomorrowgo = 1;
        tMonthTomorrow = 1;
        tYearTomorrow = tYear + 1;
    }
    else if(tDay === dayToday()){
        tomorrowgo = 1;
        tMonthTomorrow = tMonth + 1;
        tYearTomorrow = tYear;
    }
    else if(tDay !== dayToday()){
        tomorrowgo += tDay +1;
        tMonthTomorrow = tMonth;
        tYearTomorrow = tYear;
    }
//input
document.getElementById('dayWhat').innerHTML = tomorrowgo+"/"+tMonthTomorrow + "/" + tYearTomorrow;
}
// De ham ben ngoai bi loi????
// function domInput(tDay, tMonth, tYear){
//     var tDay = +document.getElementById('tDay').value;
//     var tMonth = +document.getElementById('tMonth').value;
//     var tYear = +document.getElementById('tYear').value;
// }
// var dayToday = function(){
//     switch(tMonth){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     {
//         days = 31;
//         break;
//     }
//     case 4:
//         case 6:
//         case 9:
//         case 11:{
//         days = 30;
//         break;
//     }
//     case 2:{
//         days =  28;
//         break;
//     }
//     default:{
//         alert("So thang khong hop le")
//     }
//     }
// return days;
// }//ham cho biet so ngay
// function yesterday(){
//     //input
//     domInput(tDay, tMonth, tYear);
    
//     //process
//     var yesterdaygo = "";
//     var tMonthYesterday = "";
//     var tYearYesterday = "";
//     if(tDay === 1 && tMonth === 1){
//         yesterdaygo = dayToday();
//         tMonthYesterday = 12;
//         tYearYesterday = tYear -1;
//     }
//     else if(tDay === 1){
//         yesterdaygo = dayToday();
//         tMonthYesterday = tMonth -1;
//         tYearYesterday = tYear;
//     }
//     else if(tDay !== 1){
//         yesterdaygo += tDay -1;
//         tMonthYesterday = tMonth;
//         tYearYesterday = tYear;
//     }
// //input
// document.getElementById('dayWhat').innerHTML = yesterdaygo+"/"+tMonthYesterday + "/" + tYearYesterday;
// }