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
    message: yup.string().optional(),
  })
  .required();

export default function ContactForm() {
  const [prompt, setPrompt] = React.useState<{
    status: string;
    message: string;
  } | null>(null);
  const [isLoading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    setLoading(true);
    const dataToSend = new FormData();

    dataToSend.append("firstname", values.firstname);
    dataToSend.append("lastname", values.lastname);
    dataToSend.append("phone", values.phone);
    dataToSend.append("email", values.email);
    dataToSend.append("message", values.message);

    try {
      const resp = await fetch(
        "https://website-endpoints-t2275yuwlq-ue.a.run.app/inquiry",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      if (resp.status === 200) {
        setPrompt({
          status: "success",
          message: "We have received your message and will contact you soon.",
        });
        reset()
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

  return (
    <div className="pt-[50px] max-w-6xl mx-auto">
      <h2 className="mb-[40px] text-center text-[42px] font-bold text-primary">
        Write to Us
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
          <div className="flex-grow min-w-full">
            <label className="text-[#667974]" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-w-full resize-none border px-4 py-3 rounded-[20px] border-[#C6DAD5]"
              {...register("message")}
              id="message"
              cols={30}
              rows={8}
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
            className={classNames("max-w-[440px] w-full")}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
