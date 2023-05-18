import * as Yup from "yup";


export const personalDetailsValidation = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    // middleName: Yup.string().required("middleName is required"),
    // lastName: Yup.string().required("lastName is required"),
    // dateOfBirth: Yup.date().required("Date of birth is required"),
    // contactNumber: Yup.string()
    //   .required("Contact number is required")
    //   .matches(/^\d{10}$/, "Contact number must be exactly 10 digits"),
    // alternateContactNumber: Yup.string().required(
    //   "Alternate contact number is required"
    // ),
    // gender: Yup.string().required("Gender is required"),
    // github: Yup.string().required("Github is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    // linkedIn: Yup.string().required("LinkedIn is required"),
    // bloodGroup: Yup.string().required("Blood group is required"),
    // maritalStatus: Yup.string().required("Marital status is required"),
    // bankName: Yup.string().required("Bank name is required"),
    // accountNumber: Yup.string().required("Account number is required"),
    // ifscCode: Yup.string().required("IFSC code is required"),
    // branch: Yup.string().required("Branch is required"),
    // profilePicture: Yup.mixed().required("Profile picture is required"),
  });

  export const educationDetailsValidation = Yup.object().shape({
    educationDetails:Yup.array().of(
        Yup.object().shape({
            educationType: Yup.string().required("Education type is required"),
            instituteName: Yup.string().required("Institute name is required"),
            course: Yup.string().required("Course is required"),
            cgpa: Yup.string().required("CGPA/Percentage is required"),
            passingYear: Yup.string().required("Passing year is required"),
        })
    ),
    experienceDetails:Yup.array().of(
      Yup.object().shape({
        totalExperience: Yup.string().required("Total experience is required"),
        company: Yup.string().required("Company is required"),
        designation: Yup.string().required("Designation is required"),
        technology: Yup.string().required("Technology is required"),
        fromDate: Yup.string().required("From date is required"),
        toDate: Yup.string().required("To date is required"),
        reasonForJobChange: Yup.string().required("Reason for job change is required"),
        checkBox: Yup.string().required("Checkbox is required"),
      })
    )
  }) 