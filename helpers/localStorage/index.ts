import AsyncStorage from '@react-native-async-storage/async-storage';

interface SetArgs {
	key: string;
	value: any;
}
export const set = async ({ key, value }: SetArgs) => {
	if (!['boolean', 'string', 'number'].includes(typeof value)) value = JSON.stringify(value);
	else value = value + '';
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		throw new Error(err);
	}
};

export const get = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) return value;
		return undefined;
	} catch (err) {
		throw new Error(err);
	}
};
