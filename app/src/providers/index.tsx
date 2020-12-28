import React from 'react';
import { Navigator } from '../navigation';
import { AppProvider } from './App';
import { AuthProvider } from './Auth';

export const Providers: React.FC = () => (
	<AppProvider>
		<AuthProvider>
			<Navigator />
		</AuthProvider>
	</AppProvider>
);
