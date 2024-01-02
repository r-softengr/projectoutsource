import { Header, Feedback, Content } from "../components";
export const Layout = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden scrollbar-thumb-primary scrollbar-thin">
      <Header />
      <Content />
      <Feedback />
    </div>
  );
};
