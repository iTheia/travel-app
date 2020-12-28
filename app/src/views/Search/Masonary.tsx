import React, { useContext } from 'react';
import { View } from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../components/Card';
import { cardHeight, cardWidth } from './const';
import { SearchContext } from '../../providers/Search';
export default function Masonary() {
	const { post } = useContext(SearchContext);
	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{post.map((post, index) => (
					<Card
						post={post}
						key={index}
						style={{ width: cardWidth, height: cardHeight }}
					/>
				))}
			</View>
		</ScrollView>
	);
}
