import * as Yup from "yup";

export const ConfirmationSchema = Yup.object({
    checkbox:Yup.string().required("Please accept the terms and conditions"),
  })