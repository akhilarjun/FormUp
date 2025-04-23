export const randomId = () =>
	Math.floor(Date.now() / (Math.random() * 2507)) +
	"-" +
	Math.floor(Math.random() * 10230876);