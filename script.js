
function onFormSubmit() {
        var ProductCode = document.querySelector("#ProductCode");
        var ProductName = document.querySelector("#ProductName");
        var Qty = document.querySelector("#Qty");
        var price = document.querySelector("#price");
        var table = document.querySelector(".product-list");
        if (price.value < 0 || Qty.value < 0) {
                alert("price and quentity can not be less then 0");

                if (price.value < 0) {

                        price.value = "";
                }
                if (Qty.value < 0) {

                        Qty.value = "";
                }
        }
        else {
                if (ProductCode.value != "" && ProductName.value != "") {
                        total(price.value);
                        // Create a new <tr> element
                        var newRow = document.createElement("tr");

                        // Create <td> elements for each piece of data
                        var codeCell = document.createElement("td");
                        codeCell.textContent = ProductCode.value;

                        var nameCell = document.createElement("td");
                        nameCell.textContent = ProductName.value;

                        var qtyCell = document.createElement("td");
                        qtyCell.textContent = Qty.value;

                        var priceCell = document.createElement("td");
                        priceCell.textContent = price.value;

                        // Append <td> elements to the <tr> element
                        newRow.appendChild(codeCell);
                        newRow.appendChild(nameCell);
                        newRow.appendChild(qtyCell);
                        newRow.appendChild(priceCell);

                        // Append the <tr> element to the table
                        table.appendChild(newRow);

                        document.getElementById("ProductCode").value = "";
                        document.getElementById("ProductName").value = "";
                        document.getElementById("Qty").value = "";
                        document.getElementById("price").value = "";
                } else {
                        alert("All values are required");
                }


        }

}
var sum = 0;
let total = (p) => {
        sum += Number(p);
        document.querySelector("#sum").innerHTML = sum;

}


// var lable = document.querySelectorAll("form label");
// var input = document.querySelectorAll("form input");
// input.forEach((inp,ind)=>{
//         inp.addEventListener("mouseleave",()=>{
//             console.log(ind)
//                lable[ind].style.bottom=20+"px";
//         })
//     inp.addEventListener("focus",()=>{
//         console.log(ind)
//            lable[ind].style.bottom=50+"px";
//     })
// })
