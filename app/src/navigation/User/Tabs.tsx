import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeView } from "../../views/Home";
import { SearchView } from "../../views/Search";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { blue } from "../../constant";
import { FavoritesView } from "../../views/Favorites";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const TabsNavigator: React.FC = () => (
    <Navigator
        initialRouteName='Home'
        activeColor='#fff'
        inactiveColor='#fff'
        shifting={true}
        screenOptions={{ tabBarColor: blue }}
    >
        <Screen
            options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color }) => (
                    <Feather color={color} size={26} name='home' />
                ),
            }}
            name='Home'
            component={HomeView}
        />
        <Screen
            options={{
                tabBarLabel: "Buscar",
                tabBarIcon: ({ color }) => (
                    <Feather color={color} size={26} name='search' />
                ),
            }}
            name='Search'
            component={SearchView}
        />
        <Screen
            options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        color={color}
                        size={26}
                        name='heart-outline'
                    />
                ),
            }}
            name='Favorites'
            component={FavoritesView}
        />
    </Navigator>
);
