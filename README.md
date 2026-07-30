# ICode

Data Structures & Algorithms practice in **JavaScript**.

## Structure

```
src/
├── arrays/
├── strings/
├── linked-lists/
├── stacks-queues/
├── trees/
├── graphs/
├── sorting/
├── searching/
├── recursion/
├── dynamic-programming/
└── misc/
```

Each problem lives in its own file. Pair it with a `*.test.js` file when you want runnable checks.

## Run

Requires Node.js 18+.

```bash
# run a solution
node src/arrays/two-sum.js

# run all tests
npm test

# run one test file
node --test src/arrays/two-sum.test.js
```

## Conventions

- One problem per file, named after the problem (`two-sum.js`, `binary-search.js`)
- Export the main function so tests (and reuse) stay easy
- Keep a short comment at the top: problem source, time/space complexity

## License

MIT
