const Scroll = (props) => {
	return (
		<div style={{ 'overflowY': 'scroll', 'border': '1px solid black', 'height': 'calc(100vh - 187px)', 'minHeight': '350px' }}>
			{props.children}
		</div>
	);
}

export default Scroll;