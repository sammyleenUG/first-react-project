import ProductData from './ProductData';

const Detail = (props) => {
	const colorOptions = ProductData.colorOptions.map(
		(item,pos) => {
			return (
				<div className='select' key={pos}>
					<img onClick={()=>props.selectedOption(pos)} width="80" src={item.imageUrl} 
					alt={item.styleName}/>
				</div>
			)
		}
	)

	const features = ProductData.featureList.map(
		(item,pos) => {
			return (
				<div className='features' key={pos}>
					<button className="btn btn-sm btn-outline-secondary">
						{item}
					</button>
				</div>
			)
		}
	)

	return (
		<div className="col-md-6">
			<div className="card">
				<div className="card-header">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
				<div className="card-body">
					<h5>Select color</h5>
					{colorOptions}
					<h6>Features</h6>
					{features}
				</div>
				<div className="card-footer">
					<a type="button" href="amevibez.epizy.com" className="btn btn-sm btn-secondary">Buy Now</a>
				</div>
			</div>
		</div>

	)
}

export default Detail;