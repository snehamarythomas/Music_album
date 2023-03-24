import { render, screen } from "@testing-library/react"
import Searchbox from "./SearchBox";
import { Provider } from 'react-redux';
import store from '../../../app/store';


test('Verify search bar available or not', () => {

    render(<Provider store={store}><Searchbox /></Provider>);
    const searchBar = screen.getByTestId('Search');
    expect(searchBar).toBeInTheDocument();

});

test('Verify search button ', () => {

    render(<Provider store={store}><Searchbox /></Provider>);
    const searchButton = screen.getByTestId('Search-button');
    expect(searchButton).toBeInTheDocument();

}); 