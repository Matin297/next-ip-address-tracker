const PUBLIC_TOKEN = 'pk.eyJ1IjoiYXNtYW1pcjI5NyIsImEiOiJja3B1dHkzeDAxNDJoMnlxcmZ4bTI5b3IyIn0.yAsS9xzAkseYEDK-6xAGsA';
const USERNAME = 'mapbox';
const STYLE_ID = 'streets-v11';

export const URL = `https://api.mapbox.com/styles/v1/${USERNAME}/${STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${PUBLIC_TOKEN}`;
export const ATTRIBUTE = '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
