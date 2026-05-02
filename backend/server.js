const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();
const { errorHandler } = require('./middleware/errorMiddleware');

const compression = require('compression');
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/parent', require('./routes/parentRoutes'));
app.use('/api/match', require('./routes/matchRoutes'));
app.use('/api/booking', require('./routes/bookingRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));

app.use('/api/tutors', require('./routes/tutorRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));


// Error Handler
app.use(errorHandler);

// Database connection
connectDB();

// Root route for Vercel health check
app.get('/', (req, res) => {
    res.json({ message: "SRS Tutors API is live." });
});

// Export for Vercel
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
