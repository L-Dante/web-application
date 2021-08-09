const express = require('express')
const app = express()

app.use((request,response,next)=>{
    console.log('有人请求服务器了');
    next()
})

app.get('/bookListServer',(request,response)=>{
    const bookList =[
        {id:'001',title:'tom',price:'$18',author:'aaa',seller:'sellerAAA',category:'aaaaa',status:'available',keyWord:'balabala'},
        {id:'002',title:'jerry',price:'$19',author:'bbb',seller:'sellerBBB',category:'bbbbb',status:'available',keyWord:'balabala'},
        {id:'003',title:'tony',price:'$12',author:'ccc',seller:'sellerCCC',category:'ccccc',status:'available',keyWord:'balabala'},
        {id:'004',title:'tom',price:'$18',author:'aaa',seller:'sellerAAA',category:'aaaaa',status:'available',keyWord:'balabala'},
        {id:'005',title:'jerry',price:'$19',author:'bbb',seller:'sellerBBB',category:'bbbbb',status:'available',keyWord:'balabala'},
        {id:'006',title:'tony',price:'$12',author:'ccc',seller:'sellerCCC',category:'ccccc',status:'available',keyWord:'balabala'},
    ]
    response.send(bookList)
})

app.listen(5000, (err) =>{
    if(!err)console.log('服务器启动成功了，请求学生信息地址为：http://localhost:5000/bookListServer');
})