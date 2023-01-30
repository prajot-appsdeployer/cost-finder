import React, { useState } from "react";

function SelectableImage({ src, selected }) {
  return (
    <div className="selected">
      <img
        src={src}
        className={
          selected
            ? " rounded img-fluid customize-images selected "
            : " rounded img-fluid customize-images "
        }
      />
      {selected && <div className="tick">✔</div>}
    </div>
  );
}

export default SelectableImage;
