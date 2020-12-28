import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { IPost } from '../../constant';

export type UserParamList = {
	Home: undefined;
	Post: {
		post: IPost;
	};
};

export type DrawerParamList = {
	Home: undefined;
	Favorites: undefined;
	Profile: undefined;
	Settings: undefined;
	Support: undefined;
};

export type UserNavigationProp<T extends keyof UserParamList> = {
	navigation: StackNavigationProp<UserParamList, T>;
	route: RouteProp<UserParamList, T>;
};

export type DrawerNavigationProp<T extends keyof DrawerParamList> = {
	navigation: StackNavigationProp<DrawerParamList, T>;
	route: RouteProp<DrawerParamList, T>;
};
