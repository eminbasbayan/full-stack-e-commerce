import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Pants</a>
          </li>
          <li>Basic Colored Sweatpants With Elastic Hems</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
