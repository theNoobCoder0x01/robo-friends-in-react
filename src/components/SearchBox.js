const SearchBox = ({ searchTextChange }) => (
	<div className="pa2">
		<input
			className="pa3 ba b--green bg-lightest-blue"
			type='search'
			placeholder='search robots'
			onChange={searchTextChange}
		/>
	</div>
);

export default SearchBox;