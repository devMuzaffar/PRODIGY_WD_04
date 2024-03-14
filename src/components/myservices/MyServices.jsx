import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="services" id="services">
      <div className="title">
        <h1>Services Offers</h1>
      </div>

      <div className="cards_container">
        {/* Service 1 */}
        <div className="service">
          <img src="./assets/services/s1.png" alt="" />
          <div>
            <h2>Frontend Development</h2>
            <p>
              Implementation of interactive frontend solutions using modern web
              framework such as React JS. Ensuring compatibility across various
              devices for an optimal experience
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service">
          <img src="./assets/services/s2.png" alt="" />
          <div>
            <h2>Backend Development</h2>
            <p>
              Development efficient backend systems using server-side
              technologies like Node.js. Building databases, APIs, and server
              logic to handle data processing, user authentication, and business
              logic
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service">
          <img src="./assets/services/s3.png" alt="" />
          <div>
            <h2>Performance Optimization</h2>
            <p>
              Optimizing website to enhance speed, responsiveness, and user
              experience. Utilizing techniques achieve faster loading times
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service">
          <img src="./assets/services/s4.png" alt="" />
          <div>
            <h2>Full Stack Development</h2>
            <p>
              Developing web applications having both frontend and backend components. Using React framework for dynamic frontend interfaces and integrating them seamlessly with powerful backend systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
