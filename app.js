document.writeln("<h1>---marksheet---</h1>")
var studentname  = prompt("enter your name")
var bio = +("enter bio marks")
var chem = +("enter chem marks")
var phy = +("enter phy marks")
var eng = +("enter eng marks")
var urdu = +("enter urdu marks")
var obtainmarks = bio + chem + phy + eng + urdu 
var perc = (obtainmarks / 500) * 100
var grade;
if (perc >=80){

    grade="A+"
}
else if (perc >=70){
    grade="B"
}
else if (perc >=60){
    grade="C"
}
else if (perc >=50){
    grade="D"
}
else if (perc >=40){
    grade="F"
}

document.writeln(

`
<table border="1px">











`





)

























