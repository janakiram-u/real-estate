
let express=require("express");

const db_con=require('./db_con')
const cors=require("cors");
const bodyparser=require('body-parser');

let app=express()
//port
app.listen(4003);
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.get("/project", async (req, res) => {
    let data = await db_con.getProjectData();
    res.json(data);
});

app.post("/saveproject", async (req, res) => {
    let data = await db_con.saveProjectData(req.body.Name, req.body.location, req.body.Description);
    res.json(data);
});

app.put("/updateproject/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.updateProjectData(id, req.body.Name, req.body.location, req.body.Description);
    res.json(data);
});

app.delete("/deleteproject/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.deleteProjectData(id);
    res.json(data);
});

//product

app.get("/product", async (req, res) => {
    let data = await db_con.getProductData();
    res.json(data);
});

app.post("/saveproduct", async (req, res) => {
    let data = await db_con.saveProductData(req.body.Name, req.body.Size, req.body.Price,req.body.Total);
    res.json(data);
});

app.put("/updateproduct/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.updateProductData(id, req.body.Name, req.body.Size, req.body.Price,req.body.Total);
    res.json(data);
});

app.delete("/deleteproduct/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.deleteProductData(id);
    res.json(data);
});
// sell

app.get("/sell", async (req, res) => {
    let data = await db_con.getSellData();
    res.json(data);
});

app.post("/savesell", async (req, res) => {
    let data = await db_con.saveSellData(req.body.CustomerName, req.body.ProjectName, req.body.ProductId,req.body.SellerName);
    res.json(data);
});

app.put("/updatesell/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.updateSellData(id, req.body.CustomerName, req.body.ProjectName, req.body.ProductId,req.body.SellerName);
    res.json(data);
});

app.delete("/deletesell/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.deleteSellData(id);
    res.json(data);
});

// purchase

app.get("/purchase", async (req, res) => {
    let data = await db_con.getPurchaseData();
    res.json(data);
});

app.post("/savepurchase", async (req, res) => {
    let data = await db_con.savePurchaseData(req.body.RequisitionId, req.body.ProjectName, req.body.EmployeeName, req.body.RequisitionAmount);
    res.json(data);
});

app.put("/updatepurchase/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.updatePurchaseData(id, req.body.RequisitionId, req.body.ProjectName, req.body.EmployeeName, req.body.RequisitionAmount);
    res.json(data);
});

app.delete("/deletepurchase/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.deletePurchaseData(id);
    res.json(data);
});

// employee

app.get("/employee", async (req, res) => {
    let data = await db_con.getEmployeeData();
    res.json(data);
});

app.post("/saveemployee", async (req, res) => {
    let data = await db_con.saveEmployeeData(req.body.Name, req.body.Phone, req.body.Email, req.body.Department);
    res.json(data);
});

app.put("/updateemployee/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.updateEmployeeData(id, req.body.Name, req.body.Phone, req.body.Email, req.body.Department);
    res.json(data);
});

app.delete("/deleteemployee/:id", async (req, res) => {
    const id = req.params.id;
    let data = await db_con.deleteEmployeeData(id);
    res.json(data);
});

//login 
app.get("/login", async (req, res) => {
    let data = await db_con.getLoginData();
    res.json(data);
})