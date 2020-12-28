import React from 'react';
import { Image, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { sampleComments } from './const';
import styles from './styles';

export default function CommentSection() {
	return (
		<ScrollView style={styles.section}>
			{sampleComments.map((comment) => (
				<View key={comment.id} style={styles.commentCard}>
					<Image
						source={{
							uri:
								'https://i.picsum.photos/id/155/200/200.jpg?hmac=D_Tf9XAIteS9U6InmFX2j3DXYkvhlEOOkGGiWuMwU9Q',
						}}
						style={styles.commentAvatar}
					/>
					<View style={styles.comment}>
						<Text style={styles.commentAuthor}>
							Marlon Martinez Herrera
						</Text>
						<Text style={{ color: '#555' }}>{comment.comment}</Text>
					</View>
				</View>
			))}
		</ScrollView>
	);
}
