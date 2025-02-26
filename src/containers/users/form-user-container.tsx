import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { AnimateTransition } from "../../components/common/transition";
import { UserContext } from "../../contexts/users/users-context";
import { FormUserValues } from "../../models/user-modal";
import { Step1Form } from "./step-1-form";
import { Step2Form } from "./step-2-form";
import { Step3Form } from "./step-3-form";
import { StepsFormContainer } from "./steps-form-container";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Tên là bắt buộc")
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được vượt quá 50 ký tự"),
  position: Yup.string()
    .required("Vị trí là bắt buộc")
    .min(2, "Vị trí phải có ít nhất 2 ký tự")
    .max(50, "Vị trí không được vượt quá 50 ký tự"),

  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),

  department: Yup.string()
    .required("Phòng ban là bắt buộc")
    .min(2, "Phòng ban phải có ít nhất 2 ký tự")
    .max(50, "Phòng ban không được vượt quá 50 ký tự"),

  location: Yup.object().shape({
    country: Yup.string()
      .required("Quốc gia là bắt buộc")
      .min(2, "Quốc gia phải có ít nhất 2 ký tự")
      .max(50, "Quốc gia không được vượt quá 50 ký tự"),
    city: Yup.string()
      .min(2, "Thành phố phải có ít nhất 2 ký tự")
      .max(50, "Thành phố không được vượt quá 50 ký tự"),
    address: Yup.string()
      .min(5, "Địa chỉ phải có ít nhất 5 ký tự")
      .max(100, "Địa chỉ không được vượt quá 100 ký tự"),
  }),
  account_type: Yup.string().oneOf(
    ["Individual", "Company"],
    "Loại tài khoản không hợp lệ"
  ),
  phone: Yup.string().matches(/^\+?\d{10,15}$/, "Số điện thoại không hợp lệ"),
});

export const FormUserContainer = () => {
  const { formModal, addUser, setFormModal } = useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { handleSubmit, handleChange, values, errors, touched } =
    useFormik<FormUserValues>({
      initialValues: {
        name: "",
        email: "",
        avatar: "https://picsum.photos/40/40",
        phone: "",
        role: "Employee",
        position: "",
        department: "",
        location: {
          country: "",
          city: "",
          address: "",
        },
        status: "Pending",
        isFocus: false,
        portfolio: 0,
        account_type: "Individual",
      },
      validationSchema,
      onSubmit: (values) => {
        const newUser = {
          ...values,
          id: Date.now(),
          createAt: new Date().toISOString(),
        };
        addUser(newUser);
        setFormModal(false);
      },
      enableReinitialize: true,
    });

  return (
    <>
      {formModal && (
        <div className="w-full mx-auto h-full ">
          <div className="w-[60%] mx-auto">
            <StepsFormContainer
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />

            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <AnimateTransition>
                  <Step1Form
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                    nextStep={nextStep}
                  />
                </AnimateTransition>
              )}
              {currentStep === 2 && (
                <AnimateTransition>
                  <Step2Form
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                    nextStep={nextStep}
                    prevStep={prevStep}
                  />
                </AnimateTransition>
              )}
              {currentStep === 3 && (
                <AnimateTransition>
                  <Step3Form values={values} prevStep={prevStep} />
                </AnimateTransition>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
