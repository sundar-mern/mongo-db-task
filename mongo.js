// 1. Find all the information about each products
db.products.find({}).toArray({})

//output

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1d"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1e"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1f"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f20"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f21"),
//     id: '5',
//     product_name: 'Sleek Cotton Chair',
//     product_price: 33,
//     product_material: 'Fresh',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f22"),
//     id: '6',
//     product_name: 'Awesome Wooden Towels',
//     product_price: 474,
//     product_material: 'Plastic',
//     product_color: 'orange'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f23"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f24"),
//     id: '8',
//     product_name: 'Incredible Steel Hat',
//     product_price: 78,
//     product_material: 'Rubber',
//     product_color: 'violet'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f25"),
//     id: '9',
//     product_name: 'Awesome Wooden Ball',
//     product_price: 28,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f26"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f27"),
//     id: '11',
//     product_name: 'Unbranded Wooden Cheese',
//     product_price: 26,
//     product_material: 'Soft',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f28"),
//     id: '12',
//     product_name: 'Unbranded Plastic Salad',
//     product_price: 89,
//     product_material: 'Wooden',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f29"),
//     id: '13',
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_price: 37,
//     product_material: 'Concrete',
//     product_color: 'sky blue'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2a"),
//     id: '14',
//     product_name: 'Incredible Steel Shirt',
//     product_price: 54,
//     product_material: 'Metal',
//     product_color: 'white'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2b"),
//     id: '15',
//     product_name: 'Ergonomic Cotton Hat',
//     product_price: 43,
//     product_material: 'Rubber',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2c"),
//     id: '16',
//     product_name: 'Small Soft Chair',
//     product_price: 47,
//     product_material: 'Cotton',
//     product_color: 'teal'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2d"),
//     id: '17',
//     product_name: 'Incredible Metal Car',
//     product_price: 36,
//     product_material: 'Fresh',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2e"),
//     id: '18',
//     product_name: 'Licensed Plastic Bacon',
//     product_price: 88,
//     product_material: 'Steel',
//     product_color: 'yellow'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2f"),
//     id: '19',
//     product_name: 'Intelligent Cotton Chips',
//     product_price: 46,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f30"),
//     id: '20',
//     product_name: 'Handcrafted Wooden Bacon',
//     product_price: 36,
//     product_material: 'Concrete',
//     product_color: 'lime'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f31"),
//     id: '21',
//     product_name: 'Unbranded Granite Chicken',
//     product_price: 90,
//     product_material: 'Metal',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f32"),
//     id: '22',
//     product_name: 'Ergonomic Soft Hat',
//     product_price: 99,
//     product_material: 'Rubber',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f33"),
//     id: '23',
//     product_name: 'Intelligent Steel Pizza',
//     product_price: 95,
//     product_material: 'Cotton',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f34"),
//     id: '24',
//     product_name: 'Tasty Rubber Cheese',
//     product_price: 47,
//     product_material: 'Frozen',
//     product_color: 'orchid'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f35"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]

// 2. Find the product price which are between 400 to 800
db.products.find({product_price:{$not:{$gte:400,$lte:800}}}).toArray()

//output

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1e"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f21"),
//     id: '5',
//     product_name: 'Sleek Cotton Chair',
//     product_price: 33,
//     product_material: 'Fresh',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f24"),
//     id: '8',
//     product_name: 'Incredible Steel Hat',
//     product_price: 78,
//     product_material: 'Rubber',
//     product_color: 'violet'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f25"),
//     id: '9',
//     product_name: 'Awesome Wooden Ball',
//     product_price: 28,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f26"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f27"),
//     id: '11',
//     product_name: 'Unbranded Wooden Cheese',
//     product_price: 26,
//     product_material: 'Soft',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f28"),
//     id: '12',
//     product_name: 'Unbranded Plastic Salad',
//     product_price: 89,
//     product_material: 'Wooden',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f29"),
//     id: '13',
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_price: 37,
//     product_material: 'Concrete',
//     product_color: 'sky blue'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2a"),
//     id: '14',
//     product_name: 'Incredible Steel Shirt',
//     product_price: 54,
//     product_material: 'Metal',
//     product_color: 'white'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2b"),
//     id: '15',
//     product_name: 'Ergonomic Cotton Hat',
//     product_price: 43,
//     product_material: 'Rubber',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2c"),
//     id: '16',
//     product_name: 'Small Soft Chair',
//     product_price: 47,
//     product_material: 'Cotton',
//     product_color: 'teal'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2d"),
//     id: '17',
//     product_name: 'Incredible Metal Car',
//     product_price: 36,
//     product_material: 'Fresh',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2e"),
//     id: '18',
//     product_name: 'Licensed Plastic Bacon',
//     product_price: 88,
//     product_material: 'Steel',
//     product_color: 'yellow'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2f"),
//     id: '19',
//     product_name: 'Intelligent Cotton Chips',
//     product_price: 46,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f30"),
//     id: '20',
//     product_name: 'Handcrafted Wooden Bacon',
//     product_price: 36,
//     product_material: 'Concrete',
//     product_color: 'lime'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f31"),
//     id: '21',
//     product_name: 'Unbranded Granite Chicken',
//     product_price: 90,
//     product_material: 'Metal',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f32"),
//     id: '22',
//     product_name: 'Ergonomic Soft Hat',
//     product_price: 99,
//     product_material: 'Rubber',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f33"),
//     id: '23',
//     product_name: 'Intelligent Steel Pizza',
//     product_price: 95,
//     product_material: 'Cotton',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f34"),
//     id: '24',
//     product_name: 'Tasty Rubber Cheese',
//     product_price: 47,
//     product_material: 'Frozen',
//     product_color: 'orchid'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f35"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]


// 3. Find the product price which are not between 400 to 600
db.products.find({product_price:{$gt:400,$lt:800}}).toArray()

//output

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1d"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1f"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f20"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f22"),
//     id: '6',
//     product_name: 'Awesome Wooden Towels',
//     product_price: 474,
//     product_material: 'Plastic',
//     product_color: 'orange'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f23"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   }
// ]

// 4.List the four product which are grater than 500 in price 
db.products.find({product_price:{$gte:500}})

//output

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1d"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1e"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1f"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f23"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   }
// ]

// 5.Find the product name and product material of each products
db.products.find({},{_id: 0, product_name:1,product_meterial:1}).toArray()

//OUTPUT

// [
//   { product_name: 'Intelligent Fresh Chips' },
//   { product_name: 'Practical Fresh Sausages' },
//   { product_name: 'Refined Steel Car' },
//   { product_name: 'Gorgeous Plastic Pants' },
//   { product_name: 'Sleek Cotton Chair' },
//   { product_name: 'Awesome Wooden Towels' },
//   { product_name: 'Practical Soft Shoes' },
//   { product_name: 'Incredible Steel Hat' },
//   { product_name: 'Awesome Wooden Ball' },
//   { product_name: 'Generic Wooden Pizza' },
//   { product_name: 'Unbranded Wooden Cheese' },
//   { product_name: 'Unbranded Plastic Salad' },
//   { product_name: 'Gorgeous Cotton Keyboard' },
//   { product_name: 'Incredible Steel Shirt' },
//   { product_name: 'Ergonomic Cotton Hat' },
//   { product_name: 'Small Soft Chair' },
//   { product_name: 'Incredible Metal Car' },
//   { product_name: 'Licensed Plastic Bacon' },
//   { product_name: 'Intelligent Cotton Chips' },
//   { product_name: 'Handcrafted Wooden Bacon' },
//   { product_name: 'Unbranded Granite Chicken' },
//   { product_name: 'Ergonomic Soft Hat' },
//   { product_name: 'Intelligent Steel Pizza' },
//   { product_name: 'Tasty Rubber Cheese' },
//   { product_name: 'Licensed Steel Car' }

// 6.Find the product with a row id of 10
db.products.findOne({id:'10'})

//OUTPUT

// {
//   _id: ObjectId("655b53e9f9ff4f1b94916f26"),
//   id: '10',
//   product_name: 'Generic Wooden Pizza',
//   product_price: 84,
//   product_material: 'Frozen',
//   product_color: 'indigo'
// }

// 7.Find only the product name and product material
db.products.find({},{product_name:1, product_meterial:1}).toArray();

//OUTPUT

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1d"),
//     product_name: 'Intelligent Fresh Chips'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1e"),
//     product_name: 'Practical Fresh Sausages'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1f"),
//     product_name: 'Refined Steel Car'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f20"),
//     product_name: 'Gorgeous Plastic Pants'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f21"),
//     product_name: 'Sleek Cotton Chair'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f22"),
//     product_name: 'Awesome Wooden Towels'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f23"),
//     product_name: 'Practical Soft Shoes'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f24"),
//     product_name: 'Incredible Steel Hat'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f25"),
//     product_name: 'Awesome Wooden Ball'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f26"),
//     product_name: 'Generic Wooden Pizza'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f27"),
//     product_name: 'Unbranded Wooden Cheese'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f28"),
//     product_name: 'Unbranded Plastic Salad'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f29"),
//     product_name: 'Gorgeous Cotton Keyboard'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2a"),
//     product_name: 'Incredible Steel Shirt'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2b"),
//     product_name: 'Ergonomic Cotton Hat'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2c"),
//     product_name: 'Small Soft Chair'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2d"),
//     product_name: 'Incredible Metal Car'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2e"),
//     product_name: 'Licensed Plastic Bacon'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f2f"),
//     product_name: 'Intelligent Cotton Chips'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f30"),
//     product_name: 'Handcrafted Wooden Bacon'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f31"),
//     product_name: 'Unbranded Granite Chicken'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f32"),
//     product_name: 'Ergonomic Soft Hat'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f33"),
//     product_name: 'Intelligent Steel Pizza'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f34"),
//     product_name: 'Tasty Rubber Cheese'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f35"),
//     product_name: 'Licensed Steel Car'
//   }
// ]

// 8.Find all products which contain the value of soft in product material 
db.product_list.find({product_material:'Soft'});

//output

// {
//   "product_name": "Intelligent Cotton Chips",
//   "product_material": "Soft"
// },
// {
//   "product_name": "Gorgeous Plastic Pants",
//   "product_material": "Soft"
// },
// {
//   "product_name": "Awesome Wooden Ball",
//   "product_material": "Soft"
// },
// {
//   "product_name": "Unbranded Wooden Cheese",
//   "product_material": "Soft"
// }

// 9.Find products which contain product color indigo  and product price 492.00
db.products.find({$or : [{product_color: "indigo"},{product_price: 492}]});

//output

// [
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f1e"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f20"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f26"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("655b53e9f9ff4f1b94916f35"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]

// 10.Delete the products which product price value are same
db.products.aggregate([
    {$group: {_id: "$product_price", count: {$sum:1}}},
    {$match: {_id: {$ne:null},count: {$gt:1}}}
]);
db.products.deleteMany({$or: [{product_price:36},{product_price:47}]});

//output

//{ acknowledged: true, deletedCount: 4 }




