import { useState } from "react";
import { initialDominoes } from "../utils/Data"; // Mengimpor data dari Data.ts
import {
  sortDominoesAscending,
  sortDominoesDescending,
  flipDominoes,
  removeDuplicateDominoes,
  removeDominoByNumber,
  countDoubles,
} from "../utils/handleButton";

export default function DominoApp() {
  const [dominoes, setDominoes] = useState<number[][]>(initialDominoes); // Menggunakan data dari Data.ts
  const [inputNumber, setInputNumber] = useState("");

  // Actions
  const handleSortAscending = () => {
    setDominoes(sortDominoesAscending(dominoes));
  };

  const handleSortDescending = () => {
    setDominoes(sortDominoesDescending(dominoes));
  };

  const handleFlipDominoes = () => {
    setDominoes(flipDominoes(dominoes));
  };

  const handleRemoveDuplicates = () => {
    setDominoes(removeDuplicateDominoes(dominoes));
  };

  const handleRemoveDominoByNumber = () => {
    const numberToRemove = parseInt(inputNumber, 10);
    setDominoes(removeDominoByNumber(dominoes, numberToRemove));
    setInputNumber("");
  };

  const resetDominoes = () => {
    setDominoes(initialDominoes); // Reset ke data awal
  };

  // Count double numbers (where a == b)
  const doubleCount = countDoubles(dominoes);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dominoes</h1>

      <div className="mb-4">
        <label className="block font-medium">Source</label>
        <textarea
          className="w-full border rounded p-2 text-black"
          rows={3}
          value={JSON.stringify(dominoes)}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Double Numbers</label>
        <input
          type="text"
          className="w-full border rounded p-2 text-black"
          value={doubleCount}
          readOnly
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {dominoes.map(([a, b], index) => (
          <div
            key={index}
            className="border rounded p-2 text-center flex flex-col items-center"
          >
            <span>{a}</span>
            <span>-</span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSortAscending}
        >
          Sort (ASC)
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSortDescending}
        >
          Sort (DESC)
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleFlipDominoes}
        >
          Flip
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleRemoveDuplicates}
        >
          Remove Dup
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={resetDominoes}
        >
          Reset
        </button>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Input Number</label>
        <input
          type="number"
          className="w-full border rounded p-2 text-black"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRemoveDominoByNumber}
      >
        Remove
      </button>
    </div>
  );
}
