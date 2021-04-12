var surnameList = ["Bianchi","Neri","Rossi","Verdi","Gialli"];
var plusList = [...surnameList];
console.log("Original List:\n" + surnameList)
var surname = prompt("Inserisci il tuo cognome ( Case sensitive ): ");
plusList.push(surname);
console.log("Add List:\n" + plusList.sort());

var index =0;
var found = false;
while(!found){
  if(plusList[index]==surname){
    console.log("Ti trovi in posizione: "+(index+1))
    found=true;
  }
  index++;
}
//STAMPA HTML
for(index=0; index<plusList.length;index++){
  if(plusList[index]!=surname) document.getElementById("lista").innerHTML += "<li>" + plusList[index] +"</li>";
  else{
    document.getElementById("lista").innerHTML += "<li class='red'>" + plusList[index] +"</li>";
  }
}

