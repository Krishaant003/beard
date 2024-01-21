interface Props {
  ImageUrl: string;
  Heading: string;
  Description: string;
}

const AdjCard = ({ ImageUrl, Heading, Description }: Props) => {
  return (
    <div className="flex mt-4  ">
      <img src={ImageUrl} />
      <div className="flex-none">
        <h4 className="text-medium xl:text-[20px] lg:text-[16px]">{Heading}</h4>
        <p className="xl:text-[16px] text-[#484848] lg:text-[12px]">
          {Description}
        </p>
      </div>
    </div>
  );
};

export default AdjCard;
