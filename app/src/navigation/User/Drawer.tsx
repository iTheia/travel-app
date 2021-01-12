import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../../components/DrawerContent";
import { MainStack, FavoritesStack } from "./Stack";
import { DrawerParamList } from "./types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={MainStack} />
            <Drawer.Screen name='Favorites' component={FavoritesStack} />
        </Drawer.Navigator>
    );
};
