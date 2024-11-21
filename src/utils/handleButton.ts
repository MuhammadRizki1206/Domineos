// Fungsi untuk mengurutkan dominoes secara ascending
export const sortDominoesAscending = (dominoes: number[][]): number[][] => {
  return [...dominoes].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
};

// Fungsi untuk mengurutkan dominoes secara descending
export const sortDominoesDescending = (dominoes: number[][]): number[][] => {
  return [...dominoes].sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
};

// Fungsi untuk membalik dominoes
export const flipDominoes = (dominoes: number[][]): number[][] => {
  return dominoes.map(([a, b]) => [b, a]);
};

// Fungsi untuk menghapus duplikat dominoes
export const removeDuplicateDominoes = (dominoes: number[][]): number[][] => {
  return dominoes.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        ([a, b]) =>
          (a === item[0] && b === item[1]) || (a === item[1] && b === item[0])
      )
  );
};

// Fungsi untuk menghapus domino berdasarkan hasil penjumlahan dominoes
export const removeDominoByNumber = (
  dominoes: number[][],
  numberToRemove: number
): number[][] => {
  return dominoes.filter(([a, b]) => a + b !== numberToRemove);
};

// Fungsi untuk menghitung jumlah double numbers (a == b)
export const countDoubles = (dominoes: number[][]): number => {
  return dominoes.filter(([a, b]) => a === b).length;
};
