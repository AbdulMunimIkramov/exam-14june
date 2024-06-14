import "./Shop.scss"
import { useEffect, useState } from 'react'
import { getAllProduct } from '../../api/product.api'

export const Shop = () => {

	const [products, setProducts] = useState([])

	const getAllProd = async () => {
		try {
			const { data } = await getAllProduct()
			setProducts(data)
			console.log(data)
		} catch (error) {

		}
	}

	useEffect(() => {
		getAllProd()
	}, [])


	return (
		<header className='Shop container' id='Shop'>
			{
				products.map(product => (
					<div className="cart">
						<div className='cart__img'>
							<img src={product.url} alt="" />
						</div>
						<div className='cart__titleAndPrice'>
							<p className={product.title}>Футболка</p>
							<p className='price'>$290</p>
						</div>

					</div>
				))
			}
		</header>
	)
}

