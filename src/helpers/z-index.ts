const mapping = ['main-navigation', 'main-navigation-toggle'];

const zIndex = (key: string): number => (mapping.includes(key) ? mapping.indexOf(key) + 1 : 0);

export default zIndex;
