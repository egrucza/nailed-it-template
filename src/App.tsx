/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
	const [isEightBallCheck, setIsEightBallCheck] = useState(false);
	const [isNumberToGuess, setIsNumberToGuess] = useState(
		Math.floor(Math.random() * 10) + 1
	);
	const [isGuessedNumber, setIsGuessedNumber] = useState();
	let navigate = useNavigate();
	let guessNumberOptions = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
	];

	let shuffledNumbers = guessNumberOptions
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	function ActivateMagic() {
		let newEightBallText = "";
		let ballText = document.getElementById("eightball-text-id");
		let randomNumber = Math.trunc(Math.random() * 20);
		let textOuterCircle = document.getElementById("text-outer-circle-id");
		let shouldNavigate = false;

		textOuterCircle.classList.remove("animate-ball");
		ballText.classList.remove("animate-text");

		void textOuterCircle.offsetWidth;
		void ballText.offsetWidth;

		textOuterCircle.classList.add("animate-ball");
		ballText.classList.add("animate-text");

		switch (randomNumber) {
			case 0:
				{
					newEightBallText = "It is certain.";
					shouldNavigate = true;
				}
				break;
			case 1:
				{
					newEightBallText = "It is decidedly so.";
					shouldNavigate = true;
				}
				break;
			case 2:
				{
					newEightBallText = "Without a doubt.";
					shouldNavigate = true;
				}
				break;
			case 3:
				{
					newEightBallText = "Yes - definitely.";
					shouldNavigate = true;
				}
				break;
			case 4:
				{
					newEightBallText = "You may rely on it.";
					shouldNavigate = true;
				}
				break;
			case 5:
				{
					newEightBallText = "As I see it, yes.";
					shouldNavigate = true;
				}
				break;
			case 6:
				{
					newEightBallText = "Most likely.";
					shouldNavigate = true;
				}
				break;
			case 7:
				{
					newEightBallText = "Outlook good.";
					shouldNavigate = true;
				}
				break;
			case 8:
				{
					newEightBallText = "Yes.";
					shouldNavigate = true;
				}
				break;
			case 9:
				{
					newEightBallText = "Signs point to yes.";
					shouldNavigate = true;
				}
				break;
			case 10:
				{
					newEightBallText = "Reply hazy, try again";
				}
				break;
			case 11:
				{
					newEightBallText = "Ask again later.";
				}
				break;
			case 12:
				{
					newEightBallText = "Better not tell you now.";
				}
				break;
			case 13:
				{
					newEightBallText = "Cannot predict now.";
				}
				break;
			case 14:
				{
					newEightBallText = "Concentrate and ask again.";
				}
				break;
			case 15:
				{
					newEightBallText = "Don't count on it.";
				}
				break;
			case 16:
				{
					newEightBallText = "My reply is no.";
				}
				break;
			case 17:
				{
					newEightBallText = "My sources say no.";
				}
				break;
			case 18:
				{
					newEightBallText = "Outlook not so good.";
				}
				break;
			case 19:
				{
					newEightBallText = "Very doubtful.";
				}
				break;
			default: {
				newEightBallText = "You need to try harder.";
			}
		}
		//created setTimeout function to delay until animation reaches approx. 55%
		setTimeout(() => {
			doSomething(newEightBallText, shouldNavigate);
		}, 1550);
	}

	function doSomething(newEightBallText: string, shouldNavigate: boolean) {
		document.getElementById("eightball-text-id").innerHTML =
			newEightBallText;

		setTimeout(() => {
			setIsEightBallCheck(false);
			if (shouldNavigate) {
				navigate("/objective", { replace: true });
			}
		}, 1550);
	}

	function eightBallCheck() {
		setIsEightBallCheck(true);
		setTimeout(() => {
			ActivateMagic();
		}, 500);
	}

	function handleSelectChange(e: { target: { value: any } }) {
		setIsGuessedNumber(e.target.value);
	}
	function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
		if (isGuessedNumber == isNumberToGuess) {
			navigate("/thanks", { replace: true });
		} else {
		}
	}
	return (
		<div className="app">
			<nav className="app-nav">
				<Link to="/">Home</Link>
				<a onClick={eightBallCheck} href="javascript:void(0)">
					Objective
				</a>
				<Link to="teams">Teams</Link>
				<Link to="thanks">Thank You</Link>
			</nav>
			<div className="app-content">
				<Outlet />
			</div>
			{isEightBallCheck && (
				<section className="eight-ball">
					<div className="outer-ball">
						<div
							id="text-outer-circle-id"
							className="text-outer-circle"
						>
							<div className="text-circle">
								<p
									className="eight-ball-text"
									id="eightball-text-id"
								></p>
							</div>
						</div>
					</div>
				</section>
			)}
			<form onSubmit={handleSubmit}>
				<select value={isGuessedNumber} onChange={handleSelectChange}>
					{shuffledNumbers.map((number) => {
						return (
							<option
								value={number}
								selected={isGuessedNumber == number}
							>
								{number}
							</option>
						);
					})}
				</select>
				<button type="submit">Submit</button>
			</form>
			<footer>
				<p>Credera ♥️ XD</p>
			</footer>
		</div>
	);
}

export default App;
