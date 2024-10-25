const connection = require('../dataBaseConfig.js');
const path = require('path');
let jwt = require('jsonwebtoken')
const cron = require('node-cron');
const nodemailer = require('nodemailer');

exports.withrawalRequest = (req, res) => {
  const { email, withrawalMethod, currency, withrawalAmount, selectNetwork, transactionId, transactionDate } = req.body;

  const sql = `INSERT INTO withrawal_table (email, withrawalMethod, currency, withrawalAmount, selectNetwork, transactionId, transactionDate) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  connection.query(sql, [email, withrawalMethod, currency, withrawalAmount, selectNetwork, transactionId, transactionDate], (err, result) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(201).send({ message: 'withrawal_table created', depositId: result.insertId });
    }
  });
}
exports.getwithrawalRequest = (req, res) => {
  const sql = 'SELECT * FROM withrawal_table';

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
}
exports.updatewithrawalRequest = (req, res) => {
  const id = req.params.id;
  let updatedData = req.body;
  const query = 'UPDATE withrawal_table SET ? WHERE id = ?';

  try {
    // First query: Update the deposit request
    connection.query(query, [updatedData, id], (err, results) => {
      if (err) {
        throw err;
      } else {
        // Second query: Select the deposit request by ID to check transaction status
        connection.query('SELECT * FROM withrawal_table WHERE id = ?', [id], (err, result) => {
          if (err) {
            throw err;
          } else {
            // If the transaction status is "confirm", update the profile table
            if (result[0].transactionStatus === 'confirm') {
              try {
                connection.query(
                  'UPDATE profile_table SET totalWithrawal = (IFNULL(totalWithrawal, 0) + ?)  WHERE email = ?',
                  [result[0].withrawalAmount, result[0].email],
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
              return res.send("withrawal_table updated, no profile change needed");
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



exports.searchWithrawal =  (req, res) => {
  let email  = req.params.email
  let paymentMethod  = req.params.paymentMethod
  let fromDate  = req.params.fromDate
  let toDate  = req.params.toDate

  const query = `
    SELECT * 
    FROM withrawal_table 
    WHERE withrawalMethod = IFNULL(?, withrawalMethod) 
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
