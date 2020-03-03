const TEST_NUMBER = 5;

function crash(num: number): number {
  if (num === 0) { return 1; }
  else { return num * crash(num + 1); }
};

function next(num: number): number {
  return (num + 1);
};

function simpleEvaluator(func1: () => number, func2: () => number): () => number {
  return () => func1();
};

console.log(simpleEvaluator(() => next(TEST_NUMBER), () => crash(TEST_NUMBER))());




