import React, { useState, useRef } from 'react';
import { PostContext } from './type';
import { sample } from '../../constant';
import { StatusBar } from 'react-native';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import Tabs from '../../views/Post/Tabs';
import Header from '../../views/Post/Header';
import { MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT } from '../../views/Post/const';

export const PostProvider = ({ route }) => {
	const [related, setRelated] = useState(() => {
		let temp = sample;
		return temp.splice(0, 5);
	});
	const [post, setpost] = useState(route.params.post);
	const navTitleView = useRef(null);
	return (
		<PostContext.Provider value={{ post, related, navTitleView }}>
			<StatusBar barStyle="light-content" />
			<ImageHeaderScrollView
				maxHeight={MAX_HEADER_HEIGHT}
				minHeight={MIN_HEADER_HEIGHT}
				minOverlayOpacity={0.3}
				maxOverlayOpacity={1}
				foregroundParallaxRatio={3}
				overlayColor={'#363636'}
				renderHeader={Header}
			>
				<Tabs />
			</ImageHeaderScrollView>
		</PostContext.Provider>
	);
};
