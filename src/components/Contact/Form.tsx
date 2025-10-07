import { notification, Spin } from "antd";
import emailjs from "emailjs-com";
import { useState } from "react";
import Icon from "../ui/Icon";
import Input from "../ui/Input";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    type: "success" | "error" | "warning",
    message: string,
    description: string
  ) => {
    api[type]({
      message,
      description,
      placement: "topRight",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      openNotification(
        "warning",
        "Missing Fields",
        "Please fill all required fields before submitting."
      );
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      if (result.status === 200) {
        openNotification(
          "success",
          "Message Sent!",
          "Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        openNotification(
          "error",
          "Failed to Send",
          "There was a problem sending your message."
        );
      }
    } catch {
      openNotification(
        "error",
        "Error Occurred",
        "Something went wrong while sending your message."
      );
    }

    setLoading(false);
  };

  return (
    <div className="pt-[89px] pb-[171px]">
      {contextHolder}
      <div className="flex flex-col gap-y-1 justify-center items-center text-center px-4">
        <h1 className="text-[28px] sm:text-[36px] font-medium">
          Get In Touch With Us
        </h1>
        <span className="text-[16px] sm:text-[17px] max-w-[644px] opacity-55">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </span>
      </div>

      <div className="mx-auto mt-[80px] flex flex-col lg:flex-row justify-between gap-y-16 gap-x-10 px-6 lg:px-[53px] max-w-[1100px]">
        <div className="flex flex-col gap-y-9">
          <div className="flex gap-x-7">
            <Icon.location />
            <div className="flex flex-col pt-5 max-w-[191px]">
              <h1 className="text-[19px] font-medium">Address</h1>
              <span>236 5th SE Avenue, New York NY10000, United States</span>
            </div>
          </div>
          <div className="flex gap-x-7">
            <Icon.phone />
            <div className="flex flex-col pt-5 max-w-[191px]">
              <h1 className="text-[19px] font-medium">Phone</h1>
              <span>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</span>
            </div>
          </div>
          <div className="flex gap-x-7">
            <Icon.clock />
            <div className="flex flex-col pt-5 max-w-[191px]">
              <h1 className="text-[19px] font-medium">Working Time</h1>
              <span>
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-9 w-full max-w-[500px]"
        >
          <Input
            label="Your Name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Subject"
            name="subject"
            placeholder="This is optional"
            value={formData.subject}
            onChange={handleChange}
          />
          <Input
            label="Message"
            name="message"
            isTextarea
            placeholder="Hi, I'd like to ask about..."
            maxLength={351}
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-x-3 rounded-[7px] font-light px-[89px] py-[13px] max-w-[237px] text-white bg-[#b88e2f] hover:opacity-85 transition-all"
          >
            {loading ? <Spin size="small" style={{ color: "white" }} /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
