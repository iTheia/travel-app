import React from 'react';
import { View, Text } from 'react-native';
import CommentSection from './CommentSection';
import { sampleComments } from './const';
import Footer from './Footer';
import styles from './styles';

export const Comments: React.FC = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.section}>
				<Text style={[styles.title, { fontSize: 16 }]}>
					Numero de comentarios {sampleComments.length}
				</Text>
			</View>
			<CommentSection />
			<Footer />
		</View>
	);
};
