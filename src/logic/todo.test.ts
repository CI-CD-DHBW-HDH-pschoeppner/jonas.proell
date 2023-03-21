import { generateID, getRandInt, validateTodo } from "./todo";

const todos = [
  {
    id: "test1",
    done: false,
    value:
      "311KJd4Mbus8w53hoAStVi9qLZ65CnePhi3tuTHcsWB5sPc1hyhN8lqRUZ45wzKeQl15xeqlPi4pmpUNPF2NC8CZ0cHtUy1oPuoZ7oiJ1aTQWH1eHjS6ZWFjh2DblCuKNhwsEX74XN2xaId4g3wZdqSgxGd6YsaaCDhft2PheXP9uoaeK0In7y4Yr9N87jR6h0Rl4IvSYbUvoYE0KKG8PS4Nwi8ykfwXRjbRJUMj4fuHArRkM35WzZ2joqwpeVb",
  },
  {
    id: "test2",
    done: false,
    value:
      "_311KJd4Mbus8w53hoAStVi9qLZ65CnePhi3tuTHcsWB5sPc1hyhN8lqRUZ45wzKeQl15xeqlPi4pmpUNPF2NC8CZ0cHtUy1oPuoZ7oiJ1aTQWH1eHjS6ZWFjh2DblCuKNhwsEX74XN2xaId4g3wZdqSgxGd6YsaaCDhft2PheXP9uoaeK0In7y4Yr9N87jR6h0Rl4IvSYbUvoYE0KKG8PS4Nwi8ykfwXRjbRJUMj4fuHArRkM35WzZ2joqwpeVb",
  },
  {
    id: "test3",
    done: false,
    value: "",
  },
];

describe("generateID", () => {
  it("should generate random ids of length 5", () => {
    // run 5 test cases
    for (let i = 0; i <= 5; i++) {
      const id = generateID();
      expect(id.length).toBe(5);
    }
  });

  it("should generate unique ids", () => {
    const ids = [];
    // run 5 test cases
    for (let i = 0; i <= 5; i++) {
      const id = generateID();
      ids.push(id);
    }

    expect(ids.length === new Set(ids).size).toBe(true);
  });
});

describe("validateTodo", () => {
  it("should return false when length > 255", () => {
    expect(validateTodo(todos[0], [])).toBe(true);
    expect(validateTodo(todos[1], [])).toBe(false);
  });

  it("should return false when value is empty", () => {
    expect(validateTodo(todos[0], [])).toBe(true);
    expect(validateTodo(todos[2], [])).toBe(false);
  });

  it("should return false when value is already in list", () => {
    expect(validateTodo(todos[0], todos)).toBe(false);
    expect(
      validateTodo({ id: "test4", done: false, value: "hello world!" }, todos)
    ).toBe(true);
  });
});

describe("generateColor", () => {
  it("should return values between 50 and 150", () => {
    // run test case 5 times
    for (let i = 0; i < 5; i++) {
      const rand = getRandInt(50, 150);
      expect(rand).toBeGreaterThanOrEqual(50);
      expect(rand).toBeLessThanOrEqual(150);
    }
  });

  it("should return random values", () => {
    const rand1 = getRandInt(50, 150);
    const rand2 = getRandInt(50, 150);

    expect(rand1 === rand2).toBe(false);
  });
});
