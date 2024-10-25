const db= require('../dataBaseConfig.js')

exports.enquirySave=(req,res)=>{
    let First_Name = req.body.First_Name
    let Email_Address= req.body.Email_Address
    let Phone_Number=req.body.Phone_Number
    let Message=req.body.Message

    let value=[[First_Name,Email_Address,Phone_Number,Message]]
    let sql=`insert into enquiry_table(First_Name,Email_Address, Phone_Number,Message) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("enquiry  details submitted")
        }
    })
}

exports.getEnquiry=(req,res)=>{
    let sql='Select * from enquiry_table'
    db.query(sql,(err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteEnquiry = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from enquiry_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('enquiry deleted')
        }
    })
}

exports.viewEnquiry = (req,res)=>{
    let id = req.params.id
    let sql = "select * from enquiry_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateEnquiry = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update enquiry_table set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('enquiry updated')
        }
    })
}
