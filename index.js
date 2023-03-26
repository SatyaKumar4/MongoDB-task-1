// type - 'mongosh' in terminal
// type - use MongoTask in terminal



//1) find all the information about the products

//Ans
//type - db.products.find() to show all the documents in the collection. 
//type - it to show more than 20 documents

//2)find the product price between 400 and 800

//Ans
//type - db.products.find({product_price:{$gt:400,$lt:800}})


//3) find the product price which are not between 400 and 600

//Ans
//type - db.products.find({$nor:[{product_price:{$gt:400,$lt:800}}]})


//4) list the 4 products which are greater than 500 in price

//Ans
//type - db.products.find({product_price:{$gt:500}})


//5) find the product name and product material for each product

//Ans
//type - db.products.find({},{product_name:1,product_material:1})

//6) Find the product with a row id of 10

//Ans
//type - db.products.find({id:"10"})

//7) Find only the product name and product material
//Ans
//type - db.products.find({},{product_name:1,product_material:1})

//8) Find all products which contain the value of soft in product material 

//Ans
//type - db.products.find({product_material:"Soft"})

//9) Find products which contain product color indigo  and product price 492.00

//Ans
//type - db.products.find({$and:[{product_price:492},{product_color:"indigo"}]})

//the answer comes back empty since there is no product with color indigo and price 492.00


//10)

