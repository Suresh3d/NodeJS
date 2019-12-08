var fs =require('fs');

var data = {
    name:'Suresh'
}

fs.writeFile('data.json',JSON.stringify(data),(err)=>{
    console.log(err);
});