import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

interface LoaderProps {
  className?: string;
}

const SpinnerbLoader = ({ className }: LoaderProps) => {
  return <span className={cn(s.Loader, {}, className && className)}></span>;
};

export default SpinnerbLoader;
