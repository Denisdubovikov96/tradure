import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";

const phoneRegExp = new RegExp(
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
);

const schema = yup
  .object({
    firstname: yup.string().required("Field required"),
    lastname: yup.string().required("Field required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Field required"),
    email: yup.string().email("Email invalid").required("Field required"),
  })
  .required();

export default function RegisterForm() {
  const [prompt, setPrompt] = React.useState<{
    status: string;
    message: string;
  } | null>(null);
  const [isLoading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      const dataToSend = new FormData();

      dataToSend.append("firstname", values.firstname);
      dataToSend.append("lastname", values.lastname);
      dataToSend.append("phone", values.phone);
      dataToSend.append("email", values.email);

      const resp = await fetch(
        "https://website-endpoints-t2275yuwlq-ue.a.run.app/signup",
        {
          method: "POST",
          body: dataToSend,
        }
      );
      if (resp.status === 200) {
        setPrompt({
          status: "success",
          message: "User added successfully ",
        });
        reset();
      } else {
        setPrompt({
          status: "error",
          message: "Something went wrong try again later.",
        });
      }
      setLoading(false);
    } catch (error) {
      setPrompt({
        status: "error",
        message: "Something went wrong try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = isDirty && !isValid;

  return (
    <div className="">
      <h2 className="mb-2 text-left text-[42px] max-md:text-[30px] font-bold text-primary">
        Sign Up
      </h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap gap-x-[30px]">
          <div className="flex-grow flex-[500px] w-full">
            <Input
              label="First Name"
              {...register("firstname")}
              error={errors.firstname && errors.firstname.message}
            />
          </div>
          <div className="flex-grow flex-[500px] w-full">
            <Input
              label="Last Name"
              {...register("lastname")}
              error={errors.lastname && errors.lastname.message}
            />
          </div>
          <div className="flex-grow flex-[500px] w-full">
            <Input
              label="Phone"
              {...register("phone")}
              error={errors.phone && errors.phone.message}
            />
          </div>
          <div className="flex-grow flex-[500px] w-full">
            <Input
              label="Email"
              {...register("email")}
              error={errors.email && errors.email.message}
            />
          </div>
        </div>
        {prompt && (
          <div className="flex justify-center mt-3">
            <p
              className={classNames(
                prompt?.status === "success"
                  ? "text-green-500"
                  : "text-rose-500"
              )}
            >
              {prompt?.message}
            </p>
          </div>
        )}
        <div className="mt-[30px] flex justify-center">
          <Button
            disabled={isDisabled}
            className={classNames("max-w-[440px] w-full")}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
