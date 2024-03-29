import ReactDOM from 'react-dom/client';
import {
	ReactiveBase,
	DynamicRangeSlider,
	SelectedFilters,
	// ResultList,
	// ReactiveList,
} from '@appbaseio/reactivesearch';

import './index.css';

const Main = () => (
	<ReactiveBase
		app="good-books-ds"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
	>
		<div className="row">
			<div className="col">
				<DynamicRangeSlider
					dataField="books_count"
					componentId="BookSensor"
					rangeLabels={() => ({
						start: `${0} book`,
						end: `${200} books`,
					})}
				/>
			</div>

			<div className="col">
				<SelectedFilters />
			</div>
		</div>
	</ReactiveBase>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
