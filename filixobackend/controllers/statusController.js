const db= require('../dataBaseConfig.js')

exports.statusSave=(req,res)=>{
  
    let message=req.body.message

    let value=[[message]]
    let sql=`insert into status_table(message) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("status details submitted")
        }
    })
}
exports.getStatus=(req,res)=>{
    let sql='Select * from status_table'
    db.query(sql,(err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.deleteStatus = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from status_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('status details deleted')
        }
    })
}

exports.viewStatus = (req,res)=>{
    let id = req.params.id
    let sql = "select * from status_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateStatus = (req, res)=>{
    // let id = req.params.id
    let message = req.body.message
    // console.log(message)
    let sql = 'update status_table set message = ? where id = 1'
    db.query(sql, [message], (err, result)=>{
        if(err) throw err
        else{
            res.send('status  up details updated')
        }
    })
}