# Day 02 Solution: Adding Whizz and Bang Rules

## Overview

Added two new divisibility rules to FizzBuzz:
- Multiples of 7 → "Whizz"
- Multiples of 11 → "Bang"

Combinations are supported (e.g., 21 → "FizzWhizz", 77 → "WhizzBang").

## Implementation Approach

### Before: Pattern Matching with Pre-computed Constants

The original code used explicit pattern matching with a pre-computed `FIZZBUZZ = 15`:

```scala
private def convertSafely(input: Int): String = input match {
  case _ if `is`(FIZZBUZZ, input) => "FizzBuzz"
  case _ if `is`(FIZZ, input) => "Fizz"
  case _ if `is`(BUZZ, input) => "Buzz"
  case _ => input.toString
}
```

**Problem:** With 4 divisors, you'd need 15 constants for all combinations (2^4 - 1).

### After: Dynamic String Building

```scala
private val rules: List[(Int, String)] = List(
  (FIZZ, "Fizz"),
  (BUZZ, "Buzz"),
  (WHIZZ, "Whizz"),
  (BANG, "Bang")
)

private def convertSafely(input: Int): String = {
  val result = rules
    .filter { case (divisor, _) => input % divisor == 0 }
    .map { case (_, word) => word }
    .mkString

  if (result.isEmpty) input.toString else result
}
```

**Benefits:** Extensible, no combinatorial explosion, cleaner code.

## Scala Concepts Explained

### 1. Tuples `(Int, String)`

A tuple groups related values together. Here each tuple pairs a divisor with its corresponding word:

```scala
(3, "Fizz")  // divisor 3 maps to "Fizz"
(5, "Buzz")  // divisor 5 maps to "Buzz"
```

### 2. `List[(Int, String)]`

A typed list where each element is a tuple. Scala's type system ensures every element has the same structure.

### 3. Pattern Matching in Lambdas

```scala
.filter { case (divisor, _) => input % divisor == 0 }
```

- `case` allows destructuring the tuple inside a lambda
- `(divisor, _)` binds the first element to `divisor`
- `_` means "ignore this value" (we don't need the word during filtering)

This is equivalent to:
```scala
.filter(tuple => input % tuple._1 == 0)
```

But pattern matching is more readable.

### 4. Method Chaining

```scala
rules
  .filter { ... }  // Keep only matching rules
  .map { ... }     // Extract just the words
  .mkString        // Concatenate into a single string
```

Each method returns a new collection, enabling fluent transformations.

### 5. `mkString`

Concatenates all elements of a list into a single string:

```scala
List("Fizz", "Whizz").mkString  // → "FizzWhizz"
List("Buzz").mkString           // → "Buzz"
List().mkString                 // → ""
```

### 6. If-Expression

```scala
if (result.isEmpty) input.toString else result
```

In Scala, `if` is an expression that returns a value, not just a statement.

## Test Updates

Two existing test cases needed updates because they're now divisible by 11:

| Input | Old Result | New Result | Reason |
|-------|------------|------------|--------|
| 66 | "Fizz" | "FizzBang" | 66 = 6 × 11 (divisible by 3 and 11) |
| 99 | "Fizz" | "FizzBang" | 99 = 9 × 11 (divisible by 3 and 11) |

## New Test Cases Added

| Input | Result | Reason |
|-------|--------|--------|
| 7 | "Whizz" | 7 × 1 |
| 14 | "Whizz" | 7 × 2 |
| 49 | "Whizz" | 7 × 7 |
| 11 | "Bang" | 11 × 1 |
| 22 | "Bang" | 11 × 2 |
| 44 | "Bang" | 11 × 4 |
| 21 | "FizzWhizz" | 3 × 7 |
| 35 | "BuzzWhizz" | 5 × 7 |
| 33 | "FizzBang" | 3 × 11 |
| 55 | "BuzzBang" | 5 × 11 |
| 77 | "WhizzBang" | 7 × 11 |

## Files Modified

1. `src/main/scala/games/FizzBuzz.scala` - New dynamic implementation
2. `src/test/scala/FizzBuzzTests.scala` - Added and updated test cases
3. `src/test/scala/FizzBuzzProperties.scala` - Updated valid output strings list
