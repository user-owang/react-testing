import React from "react";
import { render } from "@testing-library/react";
import Card from './Card'
import image1 from "./image1.jpg";

it('should render without crashing', () => {
  render(<Card caption="Photo by Richard Pasquarella on Unsplash" src={image1} currNum={1} totalNum={1} />)
})