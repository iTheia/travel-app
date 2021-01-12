import { useState, useContext } from "react";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../../providers/Auth";
import { ISignUp } from "../../providers/Auth/types";

export default () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const { colors } = useTheme();

    const { signUp } = useContext(AuthContext);

    const handleSubmit = (user: ISignUp, { setSubmitting }: any) => {
        try {
            setSubmitting(true);
            signUp(user);
            setSubmitting(false);
        } catch (error) {}
    };

    const updateSecureTextEntry = () => setSecureTextEntry((prev) => !prev);

    return {
        form: {
            handleSubmit,
            updateSecureTextEntry,
            secureTextEntry,
        },
        colors,
    };
};
