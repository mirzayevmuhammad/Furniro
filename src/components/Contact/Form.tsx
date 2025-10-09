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
    <div className="pt-16 pb-28 px-4 sm:px-8 lg:px-16">
      {contextHolder}
      <div className="flex flex-col items-center text-center gap-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Get In Touch With Us
        </h1>
        <p className="text-base sm:text-lg max-w-2xl opacity-70">
          For more information about our products & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row justify-between gap-14 max-w-[1200px] mx-auto w-full">
        {/* Contact Info Section */}
        <div className="flex flex-col gap-y-10 w-full lg:w-1/2">
          <div className="flex gap-x-6">
            <Icon.location />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Address</h2>
              <span className="text-sm sm:text-base opacity-80">
                236 5th SE Avenue, New York NY10000, United States
              </span>
            </div>
          </div>
          <div className="flex gap-x-6">
            <Icon.phone />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Phone</h2>
              <span className="text-sm sm:text-base opacity-80">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </span>
            </div>
          </div>
          <div className="flex gap-x-6">
            <Icon.clock />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Working Time</h2>
              <span className="text-sm sm:text-base opacity-80">
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full lg:w-1/2"
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
            className="flex items-center justify-center gap-x-3 rounded-md font-medium px-10 py-3 sm:max-w-[93%] max-w-[99%] sm:w-auto text-white bg-[#b88e2f] hover:opacity-85 transition-all"
          >
            {loading ? <Spin size="small" style={{ color: "white" }} /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
