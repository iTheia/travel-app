import * as yup from "yup";

export const validCreateCategory = yup.object().shape({
    name: yup.string().trim().required(),
});
