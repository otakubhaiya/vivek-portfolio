import "./style.scss";
export default function Services() {
  return (
    <div className="services-container m-3 p-3 gap-3 flex overflow-hidden rounded-md border border-white/30 max-md:flex-col max-md:h-fit">
      <div className="services">
        <h1 className=" text-2xl font-semibold">Services</h1>
        <ul className="text-2xl max-md:max-h-fit flex-1">
          <li>Video Editing</li>
          <li>effect making</li>
          <li>pc dhamaka</li>
          <li>dhamaka editing</li>
          <li>let me be your portable heater</li>
        </ul>
      </div>
      <div className="banner"></div>
    </div>
  );
}
