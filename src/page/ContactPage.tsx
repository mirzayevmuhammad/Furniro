import Form from "../components/Contact/Form";
import Main from "../components/ui/Main";
import Info from "../components/ui/Info";

const ContactPage = () => {
  return (
    <>
      <div>
        <Main tittle="Contact" span1="Contact" span="Home" />
        <Form />
        <Info />
      </div>
    </>
  );
};

export default ContactPage;
