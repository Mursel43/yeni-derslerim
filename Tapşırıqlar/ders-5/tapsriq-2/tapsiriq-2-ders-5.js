var honey=prompt("Aldığınız balı yazın.");
var honey=Number(honey);
if (honey>100){
    alert("Siz ancaq 100 bala qədər qiyməti hesablaya bilərsiniz. Zəhmət olmasa 100-dən aşağı bal daxil edin.");
}
if (honey>=90){
    alert("Sizin qiymətiniz: 'A' ");
}
else if (89<=honey || 80<=honey){
    alert("Sizin qiymətiniz: 'B' ");
}
else if (79<=honey || 70<=honey){
    alert("Sizin qiymətiniz: 'C' ");
}
else if (69<=honey || 60<=honey ){
    alert("Sizin qiymətiniz: 'D' ");
}
else if (honey<60){
    alert("Sizin qiymətiniz: 'F' ");
}
else {
    alert("Xayiş olunur ədəd daxil edəsiniz.");
}
