import games.FizzBuzz
import org.scalatest.OptionValues
import org.scalatest.funspec.AnyFunSpec
import org.scalatest.matchers.should.Matchers
import org.scalatest.prop.TableDrivenPropertyChecks.*
import org.scalatest.prop.{TableFor1, TableFor2}

class FizzBuzzTests extends AnyFunSpec with Matchers with OptionValues {
  describe("FizzBuzz") {
    it("returns its numbers representation") {
      val validInputs: TableFor2[Int, String] = Table(
        ("input", "expectedResult"),
        (1, "1"),
        (67, "67"),
        (82, "82"),
        (3, "Fizz"),
        (66, "FizzBang"),
        (99, "FizzBang"),
        (5, "Buzz"),
        (50, "Buzz"),
        (85, "Buzz"),
        (15, "FizzBuzz"),
        (30, "FizzBuzz"),
        (45, "FizzBuzz"),
        (7, "Whizz"),
        (14, "Whizz"),
        (49, "Whizz"),
        (11, "Bang"),
        (22, "Bang"),
        (44, "Bang"),
        (21, "FizzWhizz"),
        (35, "BuzzWhizz"),
        (33, "FizzBang"),
        (55, "BuzzBang"),
        (77, "WhizzBang")
      )

      forAll(validInputs) { (input: Int, expectedResult: String) =>
        FizzBuzz.convert(input).value shouldEqual expectedResult
      }
    }

    it("fails for numbers out of range") {
      val outOfRangeInputs: TableFor1[Int] = Table(
        "input",
        0,
        -1,
        101
      )

      forAll(outOfRangeInputs) { (x: Int) =>
        FizzBuzz.convert(x) should be(None)
      }
    }
  }
}