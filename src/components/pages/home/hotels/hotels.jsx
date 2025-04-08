import React from 'react';

const hotels = [
  {
    name: 'Faralda NDSM Werf',
    description:
      'Coming soon',
    distance: '2 min walk',
    amenities: ['Restaurant'],
    imageUrl: 'https://hotel-arabellapark.de/wp-content/uploads/2021/09/bw-muc-7-scaled.jpg',
    websiteUrl: 'https://cloudnative.amsterdam/',
  },
  {
    name: 'Botel Amsterdam',
    description:
      'Coming soon',
    distance: '5 min walk',
    amenities: ['Restaurant', 'Bar'],
    amenities: [],
    websiteUrl: 'https://cloudnative.amsterdam/',
  },
  {
    name: 'The Westin Grand Munich',
    websiteUrl:
      'https://cloudnative.amsterdam/',
  },
  {

    name: 'Hotel Amsterdam',
    description: 'A great place to stay',
    distance: '10 min walk',
    amenities: ['WiFi', 'Parking'],
    imageUrl: 'https://example.com/hotel-amsterdam.jpg',
    websiteUrl: 'https://hotel-amsterdam.com/',
  },
];

export default function HotelList() {
  const [highlightedHotel, ...otherHotels] = hotels;

  return (
    <div style={{ maxWidth: '1284px', margin: '0 auto', padding: '16px' }}>
      <h2 className="section-title">Nearby hotels</h2>

      {/* Highlighted Hotel */}
      <div
        style={{
          marginBottom: '32px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <img
          src={highlightedHotel.imageUrl}
          alt={highlightedHotel.name}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <div style={{ padding: '16px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            {highlightedHotel.name}
          </h2>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', lineHeight: '1.6' }}>
            Coming Soon.
          </p>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', lineHeight: '1.6' }}>
            Coming Soon.
          </p>
          <p style={{ fontSize: '14px', color: '#777' }}>📍 {highlightedHotel.distance}</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a
              href="mailto:info@hotel-arabellapark.de"
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: '#004257',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '4px',
                textDecoration: 'none',
                minWidth: '10vw',
                marginTop: '1rem',
              }}
            >
              Book now
            </a>
          </div>
        </div>
      </div>

      {/* Other Hotels */}
      <div style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
          More hotels nearby
        </h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {otherHotels.map((hotel, index) => (
            <li
              key={index}
              style={{
                marginBottom: '16px',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
                {hotel.name}
              </h4>
              <p style={{ fontSize: '14px', color: '#555', marginBottom: '4px' }}>
                {hotel.description}
              </p>
              <p style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }} />
              <a
                href="mailto:info@hotel-arabellapark.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#004257',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
