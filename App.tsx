import { ChooseLeague, ChooseClub } from '@/screens/entry';
import { ClubOverview } from '@/screens/club';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="ChooseLeague" component={ChooseLeague} options={{ title: 'Welcome' }} />
				<Stack.Screen name="ChooseClub" component={ChooseClub} options={{ title: 'Choose your club' }} />
				<Stack.Screen name="ClubOverview" component={ClubOverview} options={{ title: 'Club' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
