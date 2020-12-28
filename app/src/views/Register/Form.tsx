import React, { Fragment } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import facade from './facade';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
	const { colors, form } = facade();
	const navigation = useNavigation();
	return (
		<View
			style={[
				styles.footer,
				{
					backgroundColor: colors.background,
				},
			]}
		>
			<Formik
				initialValues={{ email: '', password: '', username: '' }}
				onSubmit={form.handleSubmit}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					errors,
					touched,
					setSubmitting,
				}) => (
					<ScrollView>
						<Text
							style={[
								styles.text_footer,
								{
									color: colors.text,
								},
							]}
						>
							Usuario
						</Text>
						<View style={styles.action}>
							<FontAwesome
								name="user-o"
								color={colors.text}
								size={20}
							/>
							<TextInput
								placeholder="Usuario"
								placeholderTextColor="#666666"
								style={[
									styles.textInput,
									{
										color: colors.text,
									},
								]}
								autoCapitalize="none"
								onChangeText={handleChange('username')}
							/>
						</View>
						<Text
							style={[
								styles.text_footer,
								{
									color: colors.text,
									marginTop: 35,
								},
							]}
						>
							Email
						</Text>
						<View style={styles.action}>
							<FontAwesome
								name="user-o"
								color={colors.text}
								size={20}
							/>
							<TextInput
								placeholder="Email"
								placeholderTextColor="#666666"
								style={[
									styles.textInput,
									{
										color: colors.text,
									},
								]}
								autoCapitalize="none"
								onChangeText={handleChange('email')}
							/>
						</View>
						<Text
							style={[
								styles.text_footer,
								{
									color: colors.text,
									marginTop: 35,
								},
							]}
						>
							Contraseña
						</Text>
						<View style={styles.action}>
							<Feather
								name="lock"
								color={colors.text}
								size={20}
							/>
							<TextInput
								placeholder="Contraseña"
								placeholderTextColor="#666666"
								secureTextEntry={form.secureTextEntry}
								style={[
									styles.textInput,
									{
										color: colors.text,
									},
								]}
								autoCapitalize="none"
								onChangeText={handleChange('password')}
							/>
							<TouchableOpacity
								onPress={form.updateSecureTextEntry}
							>
								{form.secureTextEntry ? (
									<Feather
										name="eye-off"
										color="grey"
										size={20}
									/>
								) : (
									<Feather
										name="eye"
										color="grey"
										size={20}
									/>
								)}
							</TouchableOpacity>
						</View>
						<View style={styles.button}>
							<TouchableOpacity
								style={styles.signIn}
								onPress={() =>
									form.handleSubmit(values, setSubmitting)
								}
							>
								<LinearGradient
									colors={['#01ab9d', '#01ab9d']}
									style={styles.signIn}
								>
									<Text
										style={[
											styles.textSign,
											{
												color: '#fff',
											},
										]}
									>
										Registrarse
									</Text>
								</LinearGradient>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate('Login')}
								style={[
									styles.signIn,
									{
										borderColor: '#009387',
										borderWidth: 1,
										marginTop: 15,
									},
								]}
							>
								<Text
									style={[
										styles.textSign,
										{
											color: '#009387',
										},
									]}
								>
									Iniciar sesion
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				)}
			</Formik>
		</View>
	);
};
