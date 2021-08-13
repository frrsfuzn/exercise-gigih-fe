/* eslint-disable no-undef */
import React from 'react'
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App";
import '@testing-library/jest-dom'
test("check search button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerDisplay = screen.getByTestId('buttonTestSearch');
	const searchBarDisplay = screen.getByTestId('searchBar')
  expect(headerDisplay).toBeInTheDocument();
	expect(searchBarDisplay).toBeInTheDocument();
	// screen.debug()
});

test("check trending", async () => {
	render(
    <Provider store={store}>
      <App />
    </Provider>
  );
	const trendingLink = screen.getByText('Trending')
	userEvent.click(trendingLink)
	const gifResult = await screen.findAllByTestId('result')
	expect(gifResult[0]).toBeInTheDocument()
})
