interface CardsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
export const Cards = ({ icon, title, description }: CardsProps) => {
  return (
    <div className="text-customBlack group flex h-[20rem] w-full sm:w-[20rem] flex-col rounded-md border p-5 transition-all delay-150 border-primary shadow-lg">
      <div className="flex h-[20rem] w-full flex-col items-center justify-center text-center">
        {icon}
      </div>
      <div className="flex h-full w-full flex-col gap-4 text-center">
        <span className="text-center text-xl font-bold text-primary">
          {title}
        </span>
        <span className="font-semibold">{description}</span>
      </div>
    </div>
  );
};
