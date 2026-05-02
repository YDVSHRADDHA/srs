const StudentProfile = require('../models/StudentProfile');
const Booking = require('../models/Booking');

// Utility for Haversine distance
const getDistanceInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
};

const checkIn = async (req, res) => {
    try {
        const { bookingId, currentLat, currentLng } = req.body;

        const booking = await Booking.findById(bookingId);

        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        // Ensure current user is the tutor assigned to this booking
        if (booking.tutorId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized for this booking' });
        }

        const studentProfile = await StudentProfile.findById(booking.studentProfileId);
        const [targetLng, targetLat] = studentProfile.location.coordinates;

        const distance = getDistanceInMeters(currentLat, currentLng, targetLat, targetLng);

        if (distance > 200) { // 200 meters tolerance
            return res.status(400).json({
                message: 'Invalid location. You must be at the student\'s location to check-in.',
                distance: Math.round(distance)
            });
        }

        // Update booking or log attendance
        booking.status = 'trial_confirmed'; // Or create a separate Attendance log
        booking.checkInTime = new Date();
        await booking.save();

        res.status(200).json({ message: 'Check-in successful', time: booking.checkInTime });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { checkIn };
