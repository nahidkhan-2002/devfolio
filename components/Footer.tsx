import { Socials } from "./ui/Socials";

const Footer = () => {
  return (
    <footer className="w-full sm:pt-60 pb-10 relative overflow-hidden ">
      <div className="w-full absolute left-0 top-0 min-h-96">
        <img
          src="assets/img-footer.svg"
          alt="grid"
          className="w-full h-full opacity-20"
        />
      </div>
      <div className="relative flex flex-col mt-16 justify-between items-center z-10">
        <Socials />
        <div className="text-center my-10">
          <p className="mx-auto pt-5 sm:text-3xl">
            ✷ Link to the  <a
              className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
              target="_blank"
              href="https://github.com/nahidkhan-2002"
            >
              github
            </a> repository ✷
          </p>
          <small>If you like my repo, smash that star button! ⭐</small>
        </div>
        <p className="md:text-base text-sm md:font-normal font-light mt-5 opacity-60">
          Copyright By  <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            href="https://www.facebook.com/nahid1802/"
          >
            Nahid Khan Shuvo.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
