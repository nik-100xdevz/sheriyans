import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
      <h2 className=" bg-white text-xl font-semibold rounded-full h-12 w-12 p-2 flex justify-center">
        1
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptas mollitia vel quae pariatur sunt?
        </p>
        <div className=" flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
            {props.user.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
