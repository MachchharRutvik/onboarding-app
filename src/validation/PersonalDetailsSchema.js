import * as Yup from "yup";


export const PersonalDetailsSchema = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    middleName: Yup.string().required("middleName is required"),
    lastName: Yup.string().required("lastName is required"),
    dateOfBirth: Yup.date().max(new Date(), "Enter Valid Birth date").required("Date of birth is required"),
    contactNumber: Yup.string()
      .required("Contact number is required")
      .matches(/^\d{10}$/, "Contact number must be exactly 10 digits"),
    alternateContactNumber: Yup.string().required(
      "Alternate contact number is required"
    ),
    gender: Yup.string().required("Gender is required"),
    github: Yup.string().required("Github is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    linkedIn: Yup.string().required("LinkedIn is required"),
    bloodGroup: Yup.string().required("Blood group is required"),
    maritalStatus: Yup.string().required("Marital status is required"),
    bankName: Yup.string().required("Bank name is required"),
    accountNumber: Yup.number().required("Account number is required").typeError("Please Enter valid account number"),
    ifscCode: Yup.string().required("IFSC code is required"),
    branch: Yup.string().required("Branch is required"),
    profilePicture: Yup.mixed().required("Profile picture is required"),
  });