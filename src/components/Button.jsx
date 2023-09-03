const Button = ({ title, btnColor }) => {
  //console.log(btnColor);
  return (
    <a
      href=""
      style={{
        color: "whitesmoke",
        textDecoration: "none",
        backgroundColor: `${btnColor}`,
        borderRadius: "10px",
        textAlign: "center",
        padding: "15px 20px",
      }}
    >
      {title}
    </a>
  );
};

export { Button };
