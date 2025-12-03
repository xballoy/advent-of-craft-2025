package games

object FizzBuzz {
  val MIN: Int = 1
  val MAX: Int = 100

  private val FIZZ: Int = 3
  private val BUZZ: Int = 5
  private val WHIZZ: Int = 7
  private val BANG: Int = 11

  private val rules: List[(Int, String)] = List(
    (FIZZ, "Fizz"),
    (BUZZ, "Buzz"),
    (WHIZZ, "Whizz"),
    (BANG, "Bang")
  )

  def convert(input: Int): Option[String] = {
    if (isOutOfRange(input)) None
    else Some(convertSafely(input))
  }

  private def convertSafely(input: Int): String = {
    val result = rules
      .filter { case (divisor, _) => input % divisor == 0 }
      .map { case (_, word) => word }
      .mkString

    if (result.isEmpty) input.toString else result
  }

  private def isOutOfRange(input: Int): Boolean = input < MIN || input > MAX
}