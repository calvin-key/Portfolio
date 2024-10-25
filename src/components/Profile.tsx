import photo from "../assets/Picture.jpg";

const Profile = () => {
  return (
    <>
      <div className="flex min-h-screen items-center bg-gradient-to-b from-[#301E67] to-[#5B8FB9]">
        <div className="mx-8 my-0 flex h-full w-full max-w-7xl flex-col items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg md:flex-row">
          <div className="flex-1 p-4">
            <h1 className="mb-4 text-5xl font-bold text-white">Hello!</h1>
            <p className="mb-4 text-gray-300">
              I'm Calvin Pangkey. I'm a professional web developer. Ok Imma stop
              lying from here, yea I'm not a professional web developer YET, but
              I'll become one trust me. Just enjoy the process, let's do our
              best and God do the rest, ain't that what people believe. Also
              Imma start yapping from here. I don't know what to say in this
              section but Imma just say whatever since it's just a dummy
              paragraph anyway. So yea if you're interested in hiring me, my
              advise probably wait until I master how to make a portfolio that's
              it.
            </p>
            <div className="mb-4">
              <h2 className="font-semibold text-white">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#5942a0] px-3 py-1 text-white">
                  JavaScript
                </span>
                <span className="rounded-full bg-[#5942a0] px-3 py-1 text-white">
                  TypeScript
                </span>
                <span className="rounded-full bg-[#5942a0] px-3 py-1 text-white">
                  Git
                </span>
                <span className="rounded-full bg-[#5942a0] px-3 py-1 text-white">
                  React
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center p-4">
            <img
              src={photo}
              alt="Handsome Man"
              className="h-[300px] w-[300px] rounded-lg object-cover"
            />
            {/* <p className="text-gray-300">My photo (will be updated later)</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
