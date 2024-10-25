import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import project1 from "../assets/Pro1.jpg";
import project2 from "../assets/Pro2.jpg";
import project3 from "../assets/Pro3.png";

const Project = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-evenly bg-[#5B8FB9]">
        <div className="flex w-full max-w-4xl items-center justify-between">
          <div className="flex w-1/2 flex-col items-start pr-8">
            <h1 className="mb-2 text-[100px] font-bold text-[#f1efea]">
              Projects
            </h1>
            <p className="mb-6 text-2xl text-[#efe3c9]">
              Please slide to see all my projects (disclaimer I do not own all
              of these, all rights reserved to those talented and creative
              souls)
            </p>
          </div>
          <div className="relative flex w-1/2 items-center justify-center text-center">
            <Carousel className="w-full">
              <CarouselContent className="flex">
                <CarouselItem>
                  <div className="h-[400px] w-full items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                    <img
                      src={project1}
                      alt="pro1"
                      className="w-70 h-60 items-center rounded-2xl object-cover"
                    />
                    <p className="p-7 text-gray-300">Project 1 Name</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[400px] w-full items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                    <img
                      src={project2}
                      alt="pro2"
                      className="w-70 h-60 items-center rounded-2xl object-cover"
                    />
                    <p className="p-7 text-gray-300">Project 1 Name</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[400px] w-full items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                    <img
                      src={project3}
                      alt="pro3"
                      className="w-70 h-60 items-center rounded-2xl object-cover"
                    />
                    <p className="p-7 text-gray-300">Project 1 Name</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
