import * as yup from "yup";

export const validCommentSchema = yup.object().shape({
    comment: yup.string().required().trim(),
});
