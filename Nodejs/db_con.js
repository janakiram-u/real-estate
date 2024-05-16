let mysql=require("mysql2");

//connection

let con=mysql.createConnection(
    {
        host :"localhost",
        user :"root",
        password:"admin",
        database:"synergy"
    }
)

function startConnection(){
    con.connect((err)=>{
        if(err) throw err;
        console.log("connection is working")
    })
    
}
async function getProject(){
    startConnection();
    let data= await con.promise().query("select * from project")
    return data[0]
}

async function saveProject(Name, location, Description) {
    startConnection();
    let res = await con.promise().query("INSERT INTO project (Name, Location, Description) VALUES (?, ?, ?)", [Name, location, Description]);
    return res[0];
}

async function updateProject(id, Name, location, Description) {
    startConnection();
    let res = await con.promise().query("UPDATE project SET Name = ?, location = ?, Description = ? WHERE id = ?", [Name, location, Description, id]);
    return res[0];
}

async function deleteProject(id) {
    startConnection();
    let res = await con.promise().query("DELETE FROM project WHERE id = ?", [id]);
    return res[0];
}
// product

async function getProduct(){
    startConnection();
    let data= await con.promise().query("select * from product")
    return data[0]
}

async function saveProduct(Name, Size, Price,Total) {
    startConnection();
    let res = await con.promise().query("INSERT INTO product (Name, Size, Price,Total) VALUES (?, ?, ?,?)", [Name,  Size, Price,Total]);
    return res[0];
}

async function updateProduct(id, Name, Size, Price,Total) {
    startConnection();
    let res = await con.promise().query("UPDATE product SET Name = ?, Size = ?, Price = ?, Total=? WHERE id = ?", [Name,  Size, Price,Total,id]);
    return res[0];
}

async function deleteProduct(id) {
    startConnection();
    let res = await con.promise().query("DELETE FROM product WHERE id = ?", [id]);
    return res[0];
}


//sell
async function getSell(){
    startConnection();
    let data= await con.promise().query("select * from Sell")
    return data[0];
}

async function saveSell(CustomerName, ProjectName, ProductId,SellerName) {
    startConnection();
    let res = await con.promise().query("INSERT INTO Sell (CustomerName, ProjectName, ProductId,SellerName) VALUES (?, ?, ?,?)", [CustomerName, ProjectName, ProductId,SellerName]);
    return res[0];
}

async function updateSell(id, CustomerName, ProjectName, ProductId,SellerName) {
    startConnection();
    let res = await con.promise().query("UPDATE Sell SET CustomerName= ?, ProjectName = ?, ProductId=? ,SellerName=? WHERE id = ?", [CustomerName, ProjectName, ProductId,SellerName,id]);
    return res[0];
}

async function deleteSell(id) {
    startConnection();
    let res = await con.promise().query("DELETE FROM Sell WHERE id = ?", [id]);
    return res[0];
}

// purchase
async function getPurchase() {
    startConnection();
    let data = await con.promise().query("select * from Purchase");
    return data[0];
}

async function savePurchase(RequisitionId, ProjectName, EmployeeName, RequisitionAmount) {
    startConnection();
    let res = await con.promise().query("INSERT INTO Purchase (RequisitionId, ProjectName, EmployeeName, RequisitionAmount) VALUES (?, ?, ?, ?)", [RequisitionId, ProjectName, EmployeeName, RequisitionAmount]);
    return res[0];
}

async function updatePurchase(id, RequisitionId, ProjectName, EmployeeName, RequisitionAmount) {
    startConnection();
    let res = await con.promise().query("UPDATE Purchase SET RequisitionId = ?, ProjectName = ?, EmployeeName = ?, RequisitionAmount = ? WHERE id = ?", [RequisitionId, ProjectName, EmployeeName, RequisitionAmount, id]);
    return res[0];
}

async function deletePurchase(id) {
    startConnection();
    let res = await con.promise().query("DELETE FROM Purchase WHERE id = ?", [id]);
    return res[0];
}

// employee

async function getEmployee() {
    startConnection();
    let data = await con.promise().query("SELECT * FROM Employee");
    return data[0];
}

async function saveEmployee(Name, Phone, Email, Department) {
    startConnection();
    let res = await con.promise().query("INSERT INTO Employee (Name, Phone, Email, Department) VALUES (?, ?, ?, ?)", [Name, Phone, Email, Department]);
    return res[0];
}

async function updateEmployee(id, Name, Phone, Email, Department) {
    startConnection();
    let res = await con.promise().query("UPDATE Employee SET Name = ?, Phone = ?, Email = ?, Department = ? WHERE id = ?", [Name, Phone, Email, Department, id]);
    return res[0];
}

async function deleteEmployee(id) {
    startConnection();
    let res = await con.promise().query("DELETE FROM Employee WHERE id = ?", [id]);
    return res[0];
}


// login

async function getLogin() {
    startConnection();
    let data = await con.promise().query("SELECT * FROM Login");
    return data[0];
}

module.exports={
    getProjectData: async () => getProject(),
    saveProjectData: async (Name, location, Description) => saveProject(Name, location, Description),
    updateProjectData: async (id, Name, location, Description) => updateProject(id, Name, location, Description),
    deleteProjectData: async (id) => deleteProject(id),

    //product
    getProductData: async () => getProduct(),
    saveProductData: async (Name,  Size, Price,Total) => saveProduct(Name,  Size, Price,Total),
    updateProductData: async (id, Name,  Size, Price,Total) => updateProduct(id, Name,  Size, Price,Total),
    deleteProductData: async (id) => deleteProduct(id),

    //Sell
    getSellData: async ()=> getSell(),
    saveSellData: async (CustomerName, ProjectName, ProductId,SellerName) => saveSell(CustomerName, ProjectName, ProductId,SellerName),
    updateSellData: async (id, CustomerName, ProjectName, ProductId,SellerName) => updateSell(id, CustomerName, ProjectName, ProductId,SellerName),
    deleteSellData: async (id) => deleteSell(id),

     // Purchase
     getPurchaseData: async () => getPurchase(),
     savePurchaseData: async (RequisitionId, ProjectName, EmployeeName, RequisitionAmount) => savePurchase(RequisitionId, ProjectName, EmployeeName, RequisitionAmount),
     updatePurchaseData: async (id, RequisitionId, ProjectName, EmployeeName, RequisitionAmount) => updatePurchase(id, RequisitionId, ProjectName, EmployeeName, RequisitionAmount),
     deletePurchaseData: async (id) => deletePurchase(id),


     // Employee
    getEmployeeData: async () => getEmployee(),
    saveEmployeeData: async (Name, Phone, Email, Department) => saveEmployee(Name, Phone, Email, Department),
    updateEmployeeData: async (id, Name, Phone, Email, Department) => updateEmployee(id, Name, Phone, Email, Department),
    deleteEmployeeData: async (id) => deleteEmployee(id),
//login
    getLoginData: async () => getLogin()

}








