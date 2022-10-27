export const chargePoints = () => {

    const row = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N"
    }

    const positions = []

    for (let i = 1; i < 15; i++) {
        for (let j = 1; j <= 16; j++) {
            const position = { row: row[i], col: j, busy: false }
            positions.push(position)
        }
    }
    positions.map(e => console.log(e))
    return positions
}