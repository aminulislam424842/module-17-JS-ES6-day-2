let global = 10;

const scopeResolver = () => {
  let outer = 20;

  const innerFunction = () => {
    let inner = 30;

    return {
      inner,
      outer,
      global
    };
  };

  return innerFunction();
};

console.log(scopeResolver());