import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from "@/screens/OnboardingScreen";
import HomeScreen from "@/screens/HomeScreen";



const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnBoardingScreen} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            </Stack.Navigator>
        </>
    )
}
