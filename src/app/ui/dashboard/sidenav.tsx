import Links from "./nav-links";

export default function Sidenav() {
  return (
    <div className="flex flex-col  h-full pl-11 mt-10 w-1/6 border-r boreder-2  ">
      <div className="flex flex-col gap-5 h-full grow justify-between">
        <Links />
      </div>
    </div>
  );
}
