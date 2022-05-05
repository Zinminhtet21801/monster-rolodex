import "./searchbox.style.css";

export const Searchbox = ({ handleChange, placeholder }) => {
  console.log(handleChange);
  return (
    <input
      className="search"
      type="search"
      onChange={(e) => handleChange(e.target.value)}
      //   value={this.state.name}
      placeholder={placeholder}
    />
  );
};
