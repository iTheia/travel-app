import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export const getHeaderTitle = (route: any) => {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Fitme';
	if (routeName === 'Groups') {
		return 'Grupos';
	} else if (routeName === 'Community') {
		return 'Comunidad';
	} else if (routeName === 'Profile') {
		return 'Perfil';
	} else {
		return 'Fitme';
	}
};
