const db= require('../dataBaseConfig.js')
let jwt = require('jsonwebtoken')

function generateToken(data){
    return jwt.sign({id:data.id}, "hii", {expiresIn:'1d'})
}

exports.signSave=(req,res)=>{
    let name = req.body.name
    let email= req.body.email
    let password=req.body.password

    let value=[[name,email,password]]
    let sql=`insert into sign_up(name,email,password) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("signup details submitted")
        }
    })
}

exports.clientLogin =  (req, res)=>{
    let email= req.body.email
    let password=req.body.password

    let sql=`select * from sign_up where email = ? and password = ?`

    db.query(sql,[email, password],async (err,result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
                let token = await generateToken(result[0])
                let isMatch = true
                res.json({isMatch,token})
            }else{
                let isMatch = false
                res.json({isMatch})
            }
        }
    })

}



exports.verifyClient = (req, res)=>{
    let token = req.headers['authorization'].split(" ")[1]
    if(token){
        jwt.verify(token, "hii", (err, decode)=>{
            if(err) throw err
            else{
                db.query('select * from sign_up where id = ?', [decode.id], (err, result)=>{
                    if(err) throw err
                    else{
                        res.json(result[0])
                    }
                })
            }
        })
    }
}


exports.getSignByEmail=(req,res)=>{
    let email = req.params.email
    let sql='Select * from sign_up where email = ?'
    // console.log(email)
    db.query(sql,[email],(err, result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
                // console.log(result)
                res.send(true)
            }else{
                // console.log(result)
                res.send(false)
            }
        }
    })
}
exports.getSignById=(req,res)=>{
    let id = req.params.id
    let sql='Select * from sign_up where id = ?'
    db.query(sql,[id],(err, result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
                // console.log(result)
                res.json(result[0])
            }else{
                res.send(false)
            }
        }
    })
}

exports.deleteSign = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from sign_up where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('signup details deleted')
        }
    })
}

exports.viewSign = (req,res)=>{
    let sql = "select * from sign_up"
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateSign = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    // console.log(newData)
    let sql = 'update sign_up set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('sign up details updated')
        }
    })
}


exports.paymentSave=(req,res)=>{
    let upi = req.body.upi
    let email= req.body.email
    let amount=req.body.amount
// console.log(req.body)
    let value=[[upi,email,amount]]
    let sql=`insert into payment_table(upi,email,amount) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("payment details submitted")
        }
    })
}
exports.paymentView=(req,res)=>{
    let sql=`select * from payment_table`
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}