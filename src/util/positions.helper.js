export const chargePoints = () => {
  const row = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
  };

  const positions = [];

  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= 7; j++) {
      const position = { row: row[i], col: j, busy: false };
      positions.push(position);
    }
  }

  return positions;
};
