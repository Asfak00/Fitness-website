const ContactUs = () => {
  return (
    <section className="w-full  max-w-[1400px] mx-auto px-10 ">
      <div>
        <h2 className="font-[700] text-[35px] text-gray-500 uppercase">
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </h2>
        <p className="w-[55%]">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </div>

      {/* form and image */}
      <div className="w-full flex justify-between mt-16 relative pb-24">
        <form className="w-[55%]">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"
            />

            <textarea
              name="message"
              id="message"
              cols={20}
              rows={5}
              placeholder="Message"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"></textarea>
            <button className="bg-secondary-500 text-gray-500 mt-6 py-3 px-6 rounded w-[25%]">
              Send Message
            </button>
          </div>
        </form>

        {/* image */}
        <div className="w-[40%] z-20">
          <img
            src="/ContactUsPageGraphic.png"
            alt="contact/image"
            className="w-full"
          />
        </div>

        <img
          src="/EvolveText.png"
          alt="image"
          className=" absolute bottom-0 right-[-2%] z-10"
        />
      </div>
    </section>
  );
};

export default ContactUs;
