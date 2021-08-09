

//tempalte view engine
const express = require ( 'express');
const path = require('path');
const multer = require('multer');

const ejs = require('ejs');
const { post } = require('request');

// init app
const app = express();
const port = 5000;

app.set('view engin', 'ejs');// ejs

//public directory 
app.use(express.static('./public')); // path 와 연결


// storage engin > multer
const multerStorage = multer.diskStorage(
    {
        destination:'./public/upload',//파일 올릴때 일믕 ㄹ  유니크하ㅡ게 만든다.
        filename: function(req, file, cb){
            cb(null, file.fieldname +'-'+ Date.now() + path.extname(file.originalname))
        }


        });


        //init  multer

        const upload = multer({
            storage: multiStorage

        }).single('myimage');
        

app.get('',(req, res) =>
{
    res.sender('index')
});
app.post('/upload' (req, res) =>{
    upload(req, res,(err) => {
        if(err){
            res.render('index',{msg: err})
         } else
    })
})


//serer running
app.listen(port, () => {
console.log('server is runing on 5000')
});


// app.get('/blog',(req, res) =>
// {
//     res.sender('blog')
// });



//강사님코드

// // Template view Engine
// const express = require(‘express’);
// const path = require(‘path’);
// const multer = require(‘multer’);
// const ejs = require(‘ejs’);
// // Init app
// const app = express();
// const port = 5000;
// // EJS
// app.set(‘view engine’, ‘ejs’);
// // Pulic Directory
// app.use(express.static(‘./public’))
// // Storage Engine -> Multer
// const multerStorage = multer.diskStorage({  저장고  
//     destination: ‘./public/upload’,
//     filename: function(req, file, cb){
//         cb(null, file.fieldname + ‘-’ + Date.now() + path.extname(file.originalname))
//     }
// });
// // Init multer
// const upload = multer({  // 실제업로드,  
//     storage: multerStorage  시토리 어디에?
// }).single(‘myImage’);  필드명


// // Router
// app.get(‘’, (req, res) => {
//     res.render(‘index’)
// });


// app.post(‘/upload’, (req, res) => {
//     upload(req, res, (err) => {
//         if(err){
//             res.render(‘index’, {msg: err})
//         } else {
//             console.log(req.file);
//             res.send(‘test’)
//         }
//     })
// })
// // Server
// app.listen(port, () => {
//     `Server is learning on ${port}`
// });


// ejs
// views
// <% 
// // post
// multer