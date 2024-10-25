import avatar from "../assets/avatar.png";

const Jumbotron = () => {
  return (
    <>
      <div>
        <div>
          <div
            className="flex h-screen flex-col items-center justify-center"
            style={{
              background: "linear-gradient(to bottom, #03001C 30%, #301E67 70%)",
              fontFamily: "Playwrite GB S",
            }}
          >
            <div className="flex w-full flex-col items-center p-4 text-center">
              <b style={{ color: "#B6EADA", fontSize: "50px" }}>
                CALVIN'S HERE!
              </b>
              <b
                className="flex w-auto justify-center rounded-lg p-2 italic text-black"
                style={{ fontSize: "15px", backgroundColor: "#B6EADA" }}
              >
                Full-Stack Web Developer (in the making)
              </b>
              <div className="relative my-6">
                <img
                  src={avatar}
                  alt="avatar"
                  className="h-60 w-60 object-cover shadow-lg transition duration-300 ease-in-out"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(182, 234, 218, 0.8))",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full bg-[rgba(182,234,218,0.3)]"
                  style={{
                    filter: "blur(60px)",
                    transform: "scale(1.5)",
                    zIndex: -1,
                  }}
                />
              </div>
              <p className="text-lg text-white">let's go</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
