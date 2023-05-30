function addFood (foodName,foodType){
    this.foodName=foodName;
    this.foodType=foodType
}

let existingID = [];

addFood.prototype.foodID = function(existingID){
    var ID = Math.floor(1000 + Math.random() * 9000);
    while (existingID.includes(ID)){
        ID = Math.floor(1000 + Math.random() * 9000);
    }
    existingID.push(ID) ;
    return ID ;
}
const table = document.getElementById("food");
const form = document.getElementById("foodForm");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("foodName").value;
    let type = document.getElementById("food-type").value;
    let price=document.getElementById("price").value;

    let newFood = new addFood(name,type);
    let id = newFood.foodID(existingID);
    
    let foodRow = document.createElement("tr");
    table.appendChild(foodRow);

    let th1=document.createElement("th");
    th1.textContent=id;
    foodRow.appendChild(th1);
    let th2=document.createElement("th");
    th2.textContent=name;
    foodRow.appendChild(th2);
    let th3=document.createElement("th");
    th3.textContent=type;
    foodRow.appendChild(th3);
    let th4=document.createElement("th");
    th4.textContent=price;
    foodRow.appendChild(th4);
    
});




