import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Fragment, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
	liked: boolean;
}

export default function HeaderRigth({ liked }: Props) {
	const [userFav, setUserFav] = useState(liked);

	function addFav() {
		setUserFav(true);
	}
	function deleteFav() {
		setUserFav(false);
	}
	let size = 35;
	if (userFav) {
		return (
			<TouchableOpacity onPress={deleteFav}>
				<MaterialCommunityIcons
					name="heart"
					size={size}
					color="#f02e58"
				/>
			</TouchableOpacity>
		);
	}

	return (
		<TouchableOpacity onPress={addFav}>
			<MaterialCommunityIcons
				name="heart-outline"
				size={size}
				color="#f02e58"
			/>
		</TouchableOpacity>
	);
}
