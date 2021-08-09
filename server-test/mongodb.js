const MongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://localhost";
const dbName = 'dbbookList';//db对象表名
const client = new MongoClient(dbUrl,{useUnifiedTopology:true});
client.connect(dbUrl,(err,client) =>{
    if(err) {
        console.log(err);
        return;
    }
    const db = client.db(dbName);//获取db对象
    
    app.use((request,response,next)=>{
        console.log('有人请求服务器了');
        next()
    })
    app.get('/bookListServer',(req,res)=>{
        const bookList =[
            {id:'001',title:'tom',price:'$18',author:'aaa',seller:'sellerAAA',category:'aaaaa',status:'available',keyWord:'balabala'},
            {id:'002',title:'jerry',price:'$19',author:'bbb',seller:'sellerBBB',category:'bbbbb',status:'available',keyWord:'balabala'},
            {id:'003',title:'tony',price:'$12',author:'ccc',seller:'sellerCCC',category:'ccccc',status:'available',keyWord:'balabala'},
            {id:'004',title:'tom',price:'$18',author:'aaa',seller:'sellerAAA',category:'aaaaa',status:'available',keyWord:'balabala'},
            {id:'005',title:'jerry',price:'$19',author:'bbb',seller:'sellerBBB',category:'bbbbb',status:'available',keyWord:'balabala'},
            {id:'006',title:'tony',price:'$12',author:'ccc',seller:'sellerCCC',category:'ccccc',status:'available',keyWord:'balabala'},
        ]
        // db.collection('WebAppBookList').find({}).toArray((err,dbbookList)=>{//查找到数据后转换为数组
        //     res.json({dbbookList});
        //     console.log(dbbookList);
        // });
        res.send(bookList)
    });
    app.listen(5000,() => console.log('服务器启动成功了，请求信息地址为：http://localhost:5000/bookListServer'))
})
