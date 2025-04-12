
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'vediuser',
  password: process.env.MYSQL_PASSWORD || 'vedipassword',
  database: process.env.MYSQL_DATABASE || 'vediportfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

/**
 * Submit a contact message to the database
 * @param {Object} messageData - The message data to submit
 * @returns {Promise<Object>} - Result of the operation
 */
async function submitContactMessage(messageData) {
  try {
    const { name, email, message } = messageData;
    
    // Validate input
    if (!name || !email || !message) {
      return { success: false, message: 'Missing required fields' };
    }
    
    // Insert into database
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    connection.release();
    
    return {
      success: true,
      message: 'Message submitted successfully',
      id: result.insertId
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      message: 'Failed to submit message',
      error: error.message
    };
  }
}

module.exports = {
  submitContactMessage
};
