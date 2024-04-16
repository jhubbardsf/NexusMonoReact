import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        About our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin flex items-center">
              <img
                className="w-24 h-24 rounded-full border border-neutral-300 mr-6"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6>{testimonial.user}</h6>
                <span className="text-sm font-normal italic text-neutral-600">
                  {testimonial.company}
                </span>
                <div className="mt-2">
                  <p>{testimonial.text}</p>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://simpleicons.org/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="w-6 h-6 mr-2"
                      style={{ filter: 'invert(100%)' }} // Apply CSS filter to make the icon white
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
