export default function Button({ children, textOnly, className, ...props }) {
  //props like type, onClick
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
