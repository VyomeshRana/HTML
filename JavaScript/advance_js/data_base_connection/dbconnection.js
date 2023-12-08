let mysql = require('mysql')
let con = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : 'root',
    database : 'javascript'
})
con.connect((err)=>{
    if(err) throw new Error('something is wrong')
    console.log('connection established')


//creating table

    // let sql =  'create table student (id INT(3), name varchar(30), qual varchar(30), steam varchar(20), skill varchar(15))'
    // con.query(sql,(err,result)=>{
    //     if(err) throw err
    //     console.log('Table Created')
    //     console.table(result);
    // })

// query to add data

// (id,name,qual,steam,skill)

    let data = "insert into student (id,name,qual,steam,skill) value(2,'ashu','B.com','chm','sql'),(3,'vyomesh','B.tech','civil','python')"
    con.query(data,(err,result)=>{
        if(err)throw err
        console.log('No of data inserted :',result.affectedRows);
    })

})


// alter user 'root'@'localhost' identified with mysql_native_password BY 'root';x
