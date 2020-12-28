import React, { Fragment } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import facade from './facade';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

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
				initialValues={{ email: '', password: '' }}
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
					<Fragment>
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
								placeholder="Email o contraseña"
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
								placeholder="Your Password"
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

						<TouchableOpacity>
							<Text style={{ color: '#009387', marginTop: 15 }}>
								Forgot password?
							</Text>
						</TouchableOpacity>
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
										Iniciar sesion
									</Text>
								</LinearGradient>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate('Register')}
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
									Registrate
								</Text>
							</TouchableOpacity>
						</View>
					</Fragment>
				)}
			</Formik>
		</View>
	);
};
