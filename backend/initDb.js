const { sequelize } = require('./config/db');
const User = require('./models/userModel');
const bcrypt = require('bcryptjs');

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop and recreate the tables

    // Create an initial admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
    });

    // Create some initial employees
    
    console.log('Database has been initialized and populated with initial data.');
  } catch (error) {
    console.error('Initialization failed:', error);
  } finally {
    process.exit();
  }
};

initializeDatabase();
