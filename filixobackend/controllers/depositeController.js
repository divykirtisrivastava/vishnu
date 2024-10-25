const connection = require('../dataBaseConfig.js');
const path = require('path');
let jwt = require('jsonwebtoken')
const cron = require('node-cron');
const nodemailer = require('nodemailer');

exports.depositeRequest = (req, res) => {
  const { email, depositeMethod, currency, depositeAmount, selectNetwork, transactionId, transactionDate } = req.body;
  const transactionImage = req.file ? req.file.filename : null;

  const sql = `INSERT INTO deposite_table (email, depositeMethod, currency, depositeAmount, selectNetwork, transactionImage, transactionId, transactionDate)
               VALUES (?, ?, ?, ?, ?, ?, ?,  ?)`;

  connection.query(sql, [email, depositeMethod, currency, depositeAmount, selectNetwork, transactionImage, transactionId, transactionDate], (err, result) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(201).send({ message: 'Deposit created', depositId: result.insertId });
    }
  });
}
exports.getdepositeRequest = (req, res) => {
  const sql = 'SELECT * FROM deposite_table';

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
}
exports.updatedepositeRequest = (req, res) => {
  const id = req.params.id;
  let updatedData = req.body;
  const query = 'UPDATE deposite_table SET ? WHERE id = ?';

  try {
    // First query: Update the deposit request
    connection.query(query, [updatedData, id], (err, results) => {
      if (err) {
        throw err;
      } else {
        // Second query: Select the deposit request by ID to check transaction status
        connection.query('SELECT * FROM deposite_table WHERE id = ?', [id], (err, result) => {
          if (err) {
            throw err;
          } else {
            // If the transaction status is "confirm", update the profile table
            if (result[0].transactionStatus === 'confirm') {
              try {
                connection.query(
                  'UPDATE profile_table SET deposite = (IFNULL(deposite, 0) + ?), totalIncome = (IFNULL(totalIncome, 0) + ?)  WHERE email = ?',
                  [result[0].depositeAmount,result[0].depositeAmount, result[0].email],
                  (err, updateResult) => {
                    if (err) {
                      throw err;
                    } else {
                      // console.log(updateResult)
                      // Send response only after updating the profile
                      return res.send("Profile updated");
                    }
                  }
                );
              } catch (error) {
                console.log(error)
              }
            } else {
              // If no profile update is needed, just send the response for the deposit update
              return res.send("Deposit updated, no profile change needed");
            }
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};



exports.searchDeposite =  (req, res) => {
  let email  = req.params.email
  let paymentMethod  = req.params.paymentMethod
  let fromDate  = req.params.fromDate
  let toDate  = req.params.toDate

  const query = `
    SELECT * 
    FROM deposite_table 
    WHERE depositeMethod = IFNULL(?, depositeMethod) 
    AND transactionDate >= IFNULL(?, transactionDate) 
    AND transactionDate <= IFNULL(?, transactionDate)
    AND email = ?
  `;

  connection.query(query, [paymentMethod || null, fromDate || null, toDate || null, email], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Server error');
    }
    // console.log(results)
    res.json(results);
  });
}
