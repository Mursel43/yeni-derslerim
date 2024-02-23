var query=confirm("Siz shuşi sevirsiniz?");
if (query){
    var age=prompt("Sizin neçə yaşınız var?");
    if(age>=18){
        alert("Buyurun shuşiniz.");
        
    }
    else{
        alert("Siz shuşi yeməy üçün yaşınız çatmır. Buyrun kartof firi!");
    }
}
else{
    alert("Siz shuşi isdəmədiniz. Buyurun kartof firi!");
}