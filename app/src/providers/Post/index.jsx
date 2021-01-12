import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "./type";
import { StatusBar } from "react-native";
import { ImageHeaderScrollView } from "react-native-image-header-scroll-view";
import Tabs from "../../views/Post/Tabs";
import Header from "../../views/Post/Header";
import { MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT } from "../../views/Post/const";
import { useGet } from "../../hooks/useGet";
import Axios from "axios";
import { url } from "../../constant";
import { AuthContext } from "../Auth";

export const PostProvider = ({ route }) => {
    const { data: post, loading } = useGet(
        `posts/${route.params.post.id}`,
        route.params.post
    );
    const { currentUser } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [numComments, setNumComments] = useState(0);
    useEffect(() => {
        Axios.get(`${url}/api/v1/comments/post/${post.id}`).then(({ data }) => {
            if (data.error) {
                throw new Error("");
            }
            setComments(data.comments);
            setNumComments(data.numComments);
        });
    }, []);

    async function handleSubmit(comment) {
        try {
            setNumComments((prev) => prev + 1);
            setComments((prev) =>
                prev.concat({
                    author: {
                        name: currentUser.username,
                        avatar: currentUser.avatar,
                    },
                    comment,
                })
            );
            await Axios.post(`${url}/api/v1/comments/post/${id}`, {
                comment,
            });
        } catch (error) {
            console.log(error);
        }
    }
    const navTitleView = useRef(null);
    return (
        <PostContext.Provider
            value={{
                post,
                navTitleView,
                loading,
                numComments,
                comments,
                handleSubmit,
            }}
        >
            <StatusBar barStyle='light-content' />
            <ImageHeaderScrollView
                maxHeight={MAX_HEADER_HEIGHT}
                minHeight={MIN_HEADER_HEIGHT}
                minOverlayOpacity={0.3}
                maxOverlayOpacity={1}
                foregroundParallaxRatio={3}
                overlayColor={"#363636"}
                renderHeader={Header}
            >
                <Tabs />
            </ImageHeaderScrollView>
        </PostContext.Provider>
    );
};
