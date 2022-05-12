export const inc = () => ({
  type: "INCREMENT",
});

export const dec = () => ({
  type: "DECREMENT",
});

export const ran = (randomValue) => {
  return {
    type: "RANDOM",
    payload: randomValue,
  };
};
