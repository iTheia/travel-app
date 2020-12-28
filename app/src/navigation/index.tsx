import React, { useEffect, useContext } from 'react';
import { AuthNavigation } from './Auth';
import { UserNavigation } from './User';
import { FullsizeLoader } from '../components/FullSizeLoader/FullSizeLoader';
import { AuthContext } from '../providers/Auth';
import { AppContext } from '../providers/App';

export const Navigator: React.FC = () => {
	const { currentUser } = useContext(AuthContext);
	const { isLoading } = useContext(AppContext);
	useEffect(() => {}, [currentUser]);
	if (isLoading) return <FullsizeLoader />;
	if (currentUser === false) return <AuthNavigation />;
	else return <UserNavigation />;
};
