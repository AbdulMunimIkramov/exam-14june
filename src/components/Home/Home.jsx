import "./Home.scss"
import heroImg from "../../assets/images/image.png"

export const Home = () => {
	return (
		<header className='shop container' id='shop'>

			<div className='box__text'>
				<p className="title">
					Новые поступления
					в этом сезоне
				</p>
				<p className='text'>
					Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
				</p>

				<button>
					<div className="lefttBlock">
						<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F" />
						</svg>
					</div>
					<div className="rightBlock">
						<p>Открыть магазин</p>
					</div>
				</button>
			</div>
			<div className="blockImg">
				<img src={heroImg} alt="" />
			</div>

		</header>
	)
}

