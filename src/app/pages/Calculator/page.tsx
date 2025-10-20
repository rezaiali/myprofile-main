"use client"
import { useState } from "react"

type Operator = "+" | "-" | "*" | "/"

function compute(a: number, b: number, op: Operator): number {
  switch (op) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/":
      return b === 0 ? NaN : a / b
  }
}

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [history, setHistory] = useState("")
  const [accumulator, setAccumulator] = useState<number | null>(null)
  const [pendingOp, setPendingOp] = useState<Operator | null>(null)
  const [waitingForNext, setWaitingForNext] = useState(false)

  const showHistory = history.length > 0

  function inputDigit(d: string) {
    setDisplay((prev) => {
      if (waitingForNext) {
        setWaitingForNext(false)
        return d
      }
      if (prev === "0") return d
      return prev + d
    })
  }

  function inputDot() {
    setDisplay((prev) => {
      if (waitingForNext) {
        setWaitingForNext(false)
        return "0."
      }
      if (prev.includes(".")) return prev
      return prev + "."
    })
  }

  function clearAll() {
    setDisplay("0")
    setHistory("")
    setAccumulator(null)
    setPendingOp(null)
    setWaitingForNext(false)
  }

  function pressOperator(op: Operator) {
    const current = parseFloat(display)

    if (accumulator === null) {
      setAccumulator(current)
      setHistory(`${current} ${op}`)
      setPendingOp(op)
      setWaitingForNext(true)
      return
    }

    // If there is a pending operation and we just entered a new number, compute it
    if (!waitingForNext && pendingOp) {
      const result = compute(accumulator, current, pendingOp)
      setAccumulator(result)
      setDisplay(Number.isNaN(result) ? "Error" : String(result))
      setHistory(`${result} ${op}`)
      setPendingOp(op)
      setWaitingForNext(true)
      return
    }

    // Change the operator if user is chaining operators
    setPendingOp(op)
    setHistory(`${accumulator} ${op}`)
  }

  function pressEquals() {
    if (accumulator === null || !pendingOp) return
    const current = parseFloat(display)
    const result = compute(accumulator, current, pendingOp)
    setDisplay(Number.isNaN(result) ? "Error" : String(result))
    setHistory(`${accumulator} ${pendingOp} ${current} =`)
    setAccumulator(result)
    setPendingOp(null)
    setWaitingForNext(true)
  }

  return (
    <>
      <div className="calculator">
        <div className={showHistory ? "historyDisplay visible" : "historyDisplay invisible"}>
          {history}
        </div>
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="btn" onClick={() => inputDigit("7")}>
            7
          </button>
          <button className="btn" onClick={() => inputDigit("8")}>
            8
          </button>
          <button className="btn" onClick={() => inputDigit("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => pressOperator("/")}>
            /
          </button>

          <button className="btn" onClick={() => inputDigit("4")}>
            4
          </button>
          <button className="btn" onClick={() => inputDigit("5")}>
            5
          </button>
          <button className="btn" onClick={() => inputDigit("6")}>
            6
          </button>
          <button className="btn operator" onClick={() => pressOperator("*")}>
            *
          </button>

          <button className="btn" onClick={() => inputDigit("1")}>
            1
          </button>
          <button className="btn" onClick={() => inputDigit("2")}>
            2
          </button>
          <button className="btn" onClick={() => inputDigit("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => pressOperator("-")}>
            -
          </button>

          <button className="btn_big" onClick={() => inputDigit("0")}>
            0
          </button>
          <button className="btn" onClick={inputDot}>
            .
          </button>
          <button className="btn operator" onClick={() => pressOperator("+")}>
            +
          </button>
          <button className="btn equal" onClick={pressEquals}>
            =
          </button>
          <button className="btn operator" onClick={clearAll}>
            C
          </button>
        </div>
      </div>
    </>
  )
}
