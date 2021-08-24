import { useState } from "react";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

export function Spinner() {
  return (
      <GridLoader color="#04125e" loading={useState(true)} css={override} size={80} />
  );
}