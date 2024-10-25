import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-evenly bg-gradient-to-b from-[#5B8FB9] to-[#B6EADA] text-center">
        <div>
          <h1 className="text-[100px] font-bold text-[#f1efea]">Services</h1>
          <div className="relative flex items-center justify-center text-center">
            <Carousel className="w-full">
              <CarouselContent className="flex gap-3 p-1">
                <CarouselItem className="h-[400px] w-[200px] basis-1/3 items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                  ...
                </CarouselItem>
                <CarouselItem className="h-[400px] w-[200px] basis-1/3 items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                  ...
                </CarouselItem>
                <CarouselItem className="h-[400px] w-[200px] basis-1/3 items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                  ...
                </CarouselItem>
                <CarouselItem className="h-[400px] w-[200px] basis-1/3 items-center rounded-[20px] bg-black bg-opacity-50 p-16 shadow-md backdrop-blur-lg">
                  ...
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <p className="text-[#6d6d6a]">
            “Everybody can be great because everybody can serve.” – Martin
            Luther King, Jr.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
