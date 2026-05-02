export default function SchemaMarkup({ area }) {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://srstutors.com/#organization",
        "name": `SRS Home Tutors${area ? ` - ${area}` : ""}`,
        "image": "https://srstutors.com/images/og-image.jpg",
        "telePhone": "+91-9606180784",
        "url": "https://srstutors.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Infront Of Katara Hospital, Katara Hills",
            "addressLocality": "Bhopal",
            "addressRegion": "MP",
            "postalCode": "462043",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.2333",
            "longitude": "77.4333"
        },
        "areaServed": [
            { "@type": "City", "name": "Bhopal" },
            { "@type": "AdministrativeArea", "name": "Katara Hills" },
            { "@type": "AdministrativeArea", "name": "MP Nagar" },
            { "@type": "AdministrativeArea", "name": "Kolar Road" }
        ],
        "priceRange": "₹₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1240"
        }
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(businessSchema)}
        </script>
    );
}
