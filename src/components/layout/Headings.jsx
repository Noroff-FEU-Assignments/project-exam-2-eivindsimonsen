import React from "react";

export function HeadingOne({ title }) {
  return <h1>{title}</h1>;
}

export function HeadingTwo({ title }) {
  return <h2>{title}</h2>;
}

export function HeadingThree({ title }) {
  return <h3>{title}</h3>;
}

export function HeadingFour({ title }) {
  return <h4>{title}</h4>;
}

export function HeadingFive({ title }) {
  return <h5>{title}</h5>;
}

export function Quote({ text }) {
  return (
    <div>
      <q>{text}</q>;
    </div>
  );
}
