import "./App.css";
import guy from "./assets/guy.png";
import size from "./assets/size.png";
import AdjCard from "./Components/Card";
import icon1 from "./assets/icon.png";
import icon2 from "./assets/warranty.png";
import icon3 from "./assets/Shipping.png";
import icon4 from "./assets/phone.png";
const array = [
  {
    ImageUrl: icon1,
    Heading: "High Quality",
    Description: "Crafted from top material",
  },
  {
    ImageUrl: icon2,
    Heading: "Warranty Protection",
    Description: "Over 2 years",
  },
  {
    ImageUrl: icon3,
    Heading: "Free Shipping",
    Description: "Order over $150",
  },
  {
    ImageUrl: icon4,
    Heading: "24/7 Support ",
    Description: "Dedicated Support",
  },
];
function App() {
  return (
    <>
      <div className="border-y-2  border-slate-900">
        <div className="md:flex pb-2 ">
          <img
            src={guy}
            className=" lg:w-1/4 md:w-1/5   w-1/2 lg:ml-60 md:ml-46 min-[320px]:ml-12  my-1  p-auto"
          />
          <div className="w-0.5 md:h-auto h-0 ml-36 bg-slate-900"></div>
          <div className="bg-[#D2D7D3] md:w-full md:p-0.5 md:pl-4  p-4">
            <p className="text-[#767676]">Mens Collection</p>
            <h4 className="mt-8 text-[#484848]  xl:text-[50px] lg:text-[30px]  md:text-[30px]">
              Duffle Coat Latest Edition
            </h4>
            <p className="mt-6 text-black underline">DESCRIPTION</p>
            <p className="text-[#7678]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices{" "}
            </p>
            <p className="text-[#7678] flex mt-2">
              Size:
              <img className="ml-1" src={size} />
            </p>
            <p className="text-[28px] font-medium mt-4"> $100.00 </p>
            <button className="text-white bg-black rounded mt-4 mb-1 p-1">
              Buy now
            </button>
          </div>
        </div>
        <div className=" container mx-auto   p-4 mt-8 grid lg:grid-cols-4  md:grid-cols-2  grid-cols-1  ">
          {array.map((element) => (
            <AdjCard
              ImageUrl={element.ImageUrl}
              Heading={element.Heading}
              Description={element.Description}
              {...array}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
