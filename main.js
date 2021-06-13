names_student=[];

function submit() {
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;
    var n5=document.getElementById("name5").value;
    var n6=document.getElementById("name6").value;

names_student.push(n1);
names_student.push(n2);
names_student.push(n3);
names_student.push(n4);
names_student.push(n5);
names_student.push(n6);

console.log(names_student);

document.getElementById("display_name").innerHTML=names_student;

document.getElementById("sort_button").style.display="inline-block";
document.getElementById("submit_button").style.display="none";
}

function sorting() {
    names_student.sort();

    console.log(names_student);

    document.getElementById("display_name").innerHTML=names_student;
}



