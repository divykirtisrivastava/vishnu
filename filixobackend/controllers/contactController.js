const db= require('../dataBaseConfig.js')

exports.contactSave=(req,res)=>{
    let Name = req.body.Name
    let Email= req.body.Email
    let Message=req.body.Message

    let value=[[Name,Email,Message]]
    let sql=`insert into contact_table(Name,Email,Message) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("contact us details submitted")
        }
    })
}
exports.getContact=(req,res)=>{
    let sql='Select * from contact_table'
    db.query(sql,(err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteContact = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from contact_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('contact deleted')
        }
    })
}

exports.viewContact = (req,res)=>{
    let id = req.params.id
    let sql = "select * from contact_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateContact = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update contact_table set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('contact updated')
        }
    })
}