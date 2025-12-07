'use client';

interface GoogleMapEmbedProps {
  address?: string;
  height?: string;
}

export default function GoogleMapEmbed({ 
  address = '서울 강남구 언주로130길 23',
  height = '340px'
}: GoogleMapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ height }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="오시는 길"
      />
    </div>
  );
}
