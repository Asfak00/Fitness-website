const AboutUs = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-10 flex items-center justify-between mt-28">
      <div className="w-[40%]">
        <img
          src="/BenefitsPageGraphic.png"
          alt="about/image"
          className="w-[500px]"
        />
      </div>

      <div className="w-[50%] relative">
        <img
          src="/AbstractWaves.png"
          alt="abstruck image"
          className="w-[100px] absolute top-[-15%] left-[-10%]"
        />
        <h2 className="font-[700] text-[35px]">
          MILLIONS OF HAPPY MEMBERS GETTING{" "}
          <span className="text-primary-500">FIT</span>
        </h2>
        <p className="my-5 text-justify">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>
        <p className="mb-5 text-justify">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>

        <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded hover:bg-white hover:border-secondary-500 duration-300 transition-all border mt-8">
          join now
        </button>
        <img
          src="/Sparkles.png"
          alt="spark image"
          className="w-[100px] absolute bottom-[-12%] right-[40%]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
