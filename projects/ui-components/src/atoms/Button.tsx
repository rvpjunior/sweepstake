import React from "react";

interface IProps {
  label: string;
}

export const Button: React.FC<IProps> = ({ label }) => <button>{label}-</button>;
