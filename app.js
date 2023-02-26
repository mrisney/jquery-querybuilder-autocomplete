var express = require('express');
const cors = require('cors');
var app = express();
var PORT = 8080;
 
// single routing
var router = express.Router();

const data =    [{ id: '1', name: 'Andrew'},
                 { id: '2', name: 'Bob'},
                 { id: '3', name: 'Charles'},
                 { id: '4', name: 'Cavid'},
                 { id: '5', name: 'Emily'},
                 { id: '6', name: 'Frank' },
                 { id: '7', name: 'George' },
                 { id: '8', name: 'Harry' },
                 { id: '9', name: 'Isabelle' },
                 { id: '10', name: 'Jerry' }];

function search(str) {
    console.log("search string :"+str);
    let res = data.filter(s => s.name.includes(str));
    console.log("found results : "+JSON.stringify(res,null,2));
    return res;
}
     
router.get('/suggest', function(req, res, next) {
    console.log(req.query)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(search(req.query.q)));
});
 
app.use(cors({
    origin: '*'
}));

app.use(router);
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});