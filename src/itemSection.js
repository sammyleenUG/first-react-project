const Item = (props) =>{
	return (
		<div className="col-md-6">
			<div className="card">
				<div className="card-body">
					<center>
						<img width="400px" src={props.url} alt='product'/>
					</center>
				</div>
			</div>
		</div>

	)
}

export default Item;