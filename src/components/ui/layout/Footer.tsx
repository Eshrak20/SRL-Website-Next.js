import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <Container className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;