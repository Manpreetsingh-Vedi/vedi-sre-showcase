
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

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

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'manpreetsinghvedi15@gmail.com',
    pass: process.env.EMAIL_PASSWORD || '', // Use app password for Gmail
  },
});

/**
 * Submit a contact message to the database and send email notification
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
    
    // Send email notification
    try {
      await sendEmailNotification(messageData);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue even if email fails - the message is saved in the database
    }
    
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

/**
 * Send email notification for new contact messages
 * @param {Object} messageData - The message data 
 * @returns {Promise<Object>} - Result of the email sending operation
 */
async function sendEmailNotification(messageData) {
  const { name, email, message } = messageData;
  
  const mailOptions = {
    from: '"Portfolio Contact Form" <manpreetsinghvedi15@gmail.com>',
    to: 'manpreetsinghvedi15@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p>This message was sent from your portfolio website contact form.</p>
    `
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  submitContactMessage
};
