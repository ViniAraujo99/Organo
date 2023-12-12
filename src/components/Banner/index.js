import "./Banner.css";

export const Banner = (props) => {
  return (
    <header className="banner">
      <img src={props.img} alt={props.alt} />
    </header>
  );
};
