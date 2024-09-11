function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

export function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance <= radius ? 1 : 0;
}

// Example usage:
const myLat = 28.7041; 
const myLon = 77.1025; 
const targetLat = 19.064088;
const targetLon = 72.835888; 
const radius = 50 // Radius in meters

 const result = isWithinRadius(myLat, myLon, targetLat, targetLon, radius);
console.log(result); 