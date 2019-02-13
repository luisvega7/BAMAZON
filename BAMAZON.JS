var mysql = require('mysql');
var inquirer = require('inquirer');

let id;
let units;
let totalPrice;
let queryPrice;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '*******',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected as id " + connection.threadId);
    showProducts();
});

function showProducts() {
    var quiery = connection.query("SELECT * FROM PRODUCTS", function (err, res) {
        if (err) throw err;
        //res console log.
        console.log("\nWelcome! Lets Shop!" + "\n------------------------------+\n")
        for (let i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id, " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].deparment_name + " | Price: " + res[i].price + " | Stock Quantity: " + res[i].stock_quantity + "\n")
        }
        userPrompt();
    });
}

function userPrompt() {
    inquirer
        .prompt([
            {
                name: "id",
                message: "Select the Products ID to purchase :) :"
            },
            {
                name: 'units',
                message: "How many would you like, We have many in stock!:"
            }
        ]).then((answer) => {
            id = parseInt(answer.id);
            units = parseInt(answer.units);
            qtyCheck(id, units);
        })
}


//function that runs the inventory check
function qtyCheck(id, units) {

    connection.query("SELECT * FROM products WHERE item_id = " + id, function (err, res) {
        let queryQTY;
        if (err) throw err;
        queryQTY = parseInt(res[0].stock_quantity);
        if (units > queryQTY) {
            console.log("Sorry! We dont have enough in stock. Try again.")
        } else {
            updateBamazon(id, units, queryQTY);
        }

    });
}

//function that update the BAMAZON STOCK !

function updateBamazon(id, units, queryQTY) {
    let qtyUpdate = "UPDATE products SET stock_quantity = " + (queryQTY - units) + " WHERE item_id = " + id;
    let qtyPrice = "SELECT * FROM products WHERE item_id = " + id;
    connection.query(qtyUpdate, (err, res) => {
        if (err) throw err;
        // console.log(res.affectedRows + " record(s) updated");
    })
    connection.query(qtyPrice, (err, res) => {
        if (err) throw err;
        // console.log(res);
        queryPrice = parseFloat(res[0].price);
        totalPrice = queryPrice * units;

        console.log("Thank you for purchasing: " + res[0].product_name + "\nYour total cost is: $" + totalPrice.toFixed(2));
        updateSales(totalPrice, id);
    })

}

//function of updated sales
function updateSales(totalPrice, id) {
    //console loging the total price.
    let salesUpdate = ("UPDATE products SET stock_quantity = " + totalPrice + "WHERE item_id = " + id);
    connection.query(salesUpdate, (err, res) => {
        if (err) throw err;
    })
    connection.end();
}
