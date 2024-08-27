export function Counter({counter, title, name}) {
 // instead of destructuring it here, we can directly use the destructuring as the parameter itself as the props
 // let { counter, title, name } = props;

  console.log("props is-->", counter,title,name);

  return (
    <>
      <h1>
        This is counter {title}. {name}
      </h1>
      <p>And it counts here--- {counter}</p>
    </>
  );
}
