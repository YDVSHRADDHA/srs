export const SITE_CONFIG = {
    NAME: 'SRS TUTORS',
    PHONE: import.meta.env.VITE_PHONE || '96061 80784',
    EMAIL: import.meta.env.VITE_EMAIL || 'sona.star0126@gmail.com',
    ADDRESS: 'Infront Of Katara Hospital, Katara Hills, Bhopal',
    WHATSAPP_LINK: `https://wa.me/91${(import.meta.env.VITE_PHONE || '96061 80784').replace(/\s/g, '')}?text=Hi%20SRS%20Tutors,%20I%20am%20looking%20for%20a%20home%20tutor%20in%20Bhopal`,
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
};
