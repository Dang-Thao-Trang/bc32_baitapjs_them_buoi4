function callStudent(){
//input
    var x = +document.getElementById('x').value;
    var x1 = +document.getElementById('x1').value;
    var x2 = +document.getElementById('x2').value;
    var x3 = +document.getElementById('x3').value;
    var y = +document.getElementById('y').value;
    var y1 = +document.getElementById('y1').value;
    var y2 = +document.getElementById('y2').value;
    var y3 = +document.getElementById('y3').value;
    var man1 = document.getElementById('man1').value;
    var man2 = document.getElementById('man2').value;
    var man3 = document.getElementById('man3').value;
//process
    // ta có công thức tính dộ dài đoạn thẳng là:
    // căn bậc của d1 = căn bậc[(x-x1)*(x-x1)+(y-y1)*(y-y1)]
    // vì chỉ là so sánh độ dài giữa các d1 và d2 và d3 và cần tìm d có độ dài nhất nên code của e se rút gọn căn bậc 2
    var d1 = 0;
    var d2 = 0;
    var d3 = 0;

    d1 += (x-x1)*(x-x1)+(y-y1)*(y-y1);
    console.log(d1)
    d2 += (x-x2)*(x-x2)+(y-y2)*(y-y2);
    console.log(d2)
    d3 += (x-x3)*(x-x3)+(y-y3)*(y-y3);
    console.log(d3)
    var thisis = "";

    if(d1>d2 && d1>d3){
        thisis = man1;
    }
        else if(d2>d3 && d2>d1){
        thisis = man2;
    }
        else if(d3>d2 && d3>d1){
        thisis = man3;
    }
//output
document.getElementById('studentThis').innerHTML = thisis;
}