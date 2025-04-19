type CardProps = {
    img: string;
    name: string;
    position: string;
    experience: string;
   
  };
  
  const Card = ({ img, name, position, experience }: CardProps) => {
    return (
      <div className="border border-gray-200 rounded-xl shadow-md p-4 w-full  bg-white">
        <div className="flex items-start space-x-4">

          <div className="relative">
            <img
              src={img}
              alt={name}
              className="h-24 w-24 rounded-lg object-cover"
            />

          </div>

          <div className="flex-1">
            <h1 className="text-lg font-semibold flex items-center gap-1">
              {name}
              <span className="text-green-500">✔️</span>
            </h1>
            <p className="text-gray-600 text-sm">{position}</p>
            <p className="mt-2 text-sm text-gray-800">{experience}</p>
          </div>

          <div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
              View profile
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  