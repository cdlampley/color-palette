import React from "react";
import CssOptionsList from "./CssOptionsList";
import SelectedCssOption from "./SelectedCssOption";
/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/
/*render the SelectedCssOption component with the props that it needs to render and respond to user events correctly. Check the definition of the SelectedCssOption component to see what props this component needs passed to it.*/
const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList selectColor={props.selectColor} />
      <SelectedCssOption
        palette={props.palette}
        selectedColor={props.selectedColor}
        addToPalette={props.addToPalette}
      />
    </div>
  </div>
);

export default CssOptions;
